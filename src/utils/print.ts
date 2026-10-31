/**
 * Utility for printing thermal invoices and receipts (ESC/POS 80mm & 58mm standard)
 * without requiring any third-party dependencies.
 *
 * Adheres strictly to documents/RULE.md:
 * - Zero third-party dependencies (pure native browser print utility)
 * - Single Responsibility Principle (SRP)
 * - Fully typed contracts with explicit TypeScript interfaces
 * - Automatic resource cleanup and error handling
 * - Single-page continuous receipt rendering (no unwanted page splits)
 */

export interface PrintInvoiceOptions {
  /** Document title appearing in print spooler / dialog */
  title?: string;
  /** Thermal roll width standard (e.g., "80mm", "58mm") */
  rollWidth?: "80mm" | "58mm" | string;
  /** Custom @page size if needed; defaults to 'auto' to prevent page splitting */
  pageSize?: string;
  /** Whether to fallback to a popup window if iframe printing is blocked */
  fallbackToWindow?: boolean;
}

/**
 * Escapes characters for safe inclusion in generated HTML.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Generates print CSS that ensures the thermal receipt prints on a single continuous page
 * without getting split or fragmented across multiple pages by browser print engines.
 */
function getPrintStyles(rollWidth: string, pageSize = "auto"): string {
  return `
    @page {
      size: ${pageSize};
      margin: 0 !important;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    html, body {
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
      color: #000000 !important;
      width: 100% !important;
      height: auto !important;
    }
    .receipt-wrapper {
      display: block !important;
      width: 100% !important;
      max-width: ${rollWidth} !important;
      margin: 0 auto !important;
      padding: 0 !important;
      text-align: center !important;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
      page-break-before: avoid !important;
      page-break-after: avoid !important;
      break-after: avoid !important;
    }
    .receipt-img {
      display: block !important;
      width: 100% !important;
      max-width: ${rollWidth} !important;
      height: auto !important;
      margin: 0 auto !important;
      page-break-inside: avoid !important;
      break-inside: avoid !important;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
    }
    @media print {
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        height: auto !important;
        overflow: visible !important;
      }
      .receipt-wrapper {
        display: block !important;
        width: 100% !important;
        max-width: ${rollWidth} !important;
        margin: 0 auto !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
        page-break-after: avoid !important;
        break-after: avoid !important;
      }
      .receipt-img {
        display: block !important;
        width: 100% !important;
        max-width: ${rollWidth} !important;
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
    }
  `;
}

/**
 * Fallback print handler using a minimal popup window if iframe printing fails or is restricted.
 */
function fallbackPrintWindow(
  fileUrl: string,
  title: string,
  rollWidth: string,
  pageSize = "auto"
): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const popup = window.open(
        "",
        "_blank",
        "width=480,height=680,menubar=no,toolbar=no,status=no,location=no"
      );

      if (!popup) {
        reject(
          new Error(
            "Print popup was blocked by browser. Please enable popups or check permissions."
          )
        );
        return;
      }

      const escapedTitle = escapeHtml(title);
      const escapedUrl = escapeHtml(fileUrl);
      const styles = getPrintStyles(rollWidth, pageSize);

      popup.document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapedTitle}</title>
    <style>${styles}</style>
  </head>
  <body>
    <div class="receipt-wrapper">
      <img id="receipt-img" class="receipt-img" src="${escapedUrl}" alt="${escapedTitle}" />
    </div>
    <script>
      (function() {
        var img = document.getElementById('receipt-img');
        function triggerPrint() {
          setTimeout(function() {
            window.focus();
            window.print();
            window.close();
          }, 150);
        }
        if (img && img.complete) {
          triggerPrint();
        } else if (img) {
          img.onload = triggerPrint;
        }
      })();
    </script>
  </body>
</html>`);

      popup.document.close();
      resolve();
    } catch (err) {
      reject(err instanceof Error ? err : new Error("Fallback print window failed"));
    }
  });
}

/**
 * Prints an invoice/receipt file using standard browser printing styled for thermal roll output.
 * Uses an isolated, hidden iframe to avoid printing the surrounding application UI.
 *
 * @param fileUrl Path or URL to the invoice receipt image/file.
 * @param options Roll width, document title, and fallback behavior.
 */
export function printInvoice(
  fileUrl: string,
  options: PrintInvoiceOptions = {}
): Promise<void> {
  const {
    title = "POS-001552 - Invoice",
    rollWidth = "80mm",
    pageSize = "auto",
    fallbackToWindow = true,
  } = options;

  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      reject(new Error("printInvoice must be executed in a browser environment."));
      return;
    }

    if (!fileUrl) {
      reject(new Error("No invoice file URL specified for printing."));
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.setAttribute("aria-hidden", "true");
    iframe.setAttribute("tabindex", "-1");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    iframe.style.visibility = "hidden";

    let cleanedUp = false;

    const cleanup = () => {
      if (cleanedUp) return;
      cleanedUp = true;
      try {
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
      } catch {
        // Ignored
      }
    };

    document.body.appendChild(iframe);

    const frameWindow = iframe.contentWindow;
    const frameDoc = frameWindow?.document;

    if (!frameWindow || !frameDoc) {
      cleanup();
      if (fallbackToWindow) {
        fallbackPrintWindow(fileUrl, title, rollWidth, pageSize)
          .then(resolve)
          .catch(reject);
        return;
      }
      reject(new Error("Unable to create print frame window."));
      return;
    }

    const escapedTitle = escapeHtml(title);
    const escapedUrl = escapeHtml(fileUrl);
    const styles = getPrintStyles(rollWidth, pageSize);

    const printHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapedTitle}</title>
    <style>${styles}</style>
  </head>
  <body>
    <div class="receipt-wrapper">
      <img id="print-target-img" class="receipt-img" src="${escapedUrl}" alt="${escapedTitle}" />
    </div>
  </body>
</html>`;

    frameDoc.open();
    frameDoc.write(printHtml);
    frameDoc.close();

    const targetImg = frameDoc.getElementById("print-target-img") as HTMLImageElement | null;

    const executePrint = () => {
      try {
        frameWindow.focus();
        frameWindow.print();
        resolve();
      } catch (err) {
        if (fallbackToWindow) {
          fallbackPrintWindow(fileUrl, title, rollWidth, pageSize)
            .then(resolve)
            .catch(reject);
          return;
        }
        reject(err instanceof Error ? err : new Error("Print execution failed"));
      } finally {
        frameWindow.addEventListener("afterprint", cleanup, { once: true });
        // Fallback cleanup timer in case afterprint does not fire on some devices
        setTimeout(cleanup, 60000);
      }
    };

    if (targetImg) {
      if (targetImg.complete && targetImg.naturalWidth > 0) {
        setTimeout(executePrint, 150);
      } else {
        targetImg.onload = () => {
          setTimeout(executePrint, 150);
        };
        targetImg.onerror = () => {
          cleanup();
          reject(new Error(`Failed to load invoice receipt from ${fileUrl}`));
        };
      }
    } else {
      setTimeout(executePrint, 150);
    }
  });
}

/**
 * Utility to download the invoice receipt file directly.
 * Useful for archiving or passing to file-based ESC/POS print spoolers.
 *
 * @param fileUrl Path or URL to the invoice receipt image/file.
 * @param fileName Custom name for the downloaded file.
 */
export function downloadInvoiceFile(
  fileUrl: string,
  fileName = "POS_Invoice_001552.png"
): void {
  if (typeof window === "undefined" || !fileUrl) return;

  const anchor = document.createElement("a");
  anchor.href = fileUrl;
  anchor.download = fileName;
  anchor.rel = "noopener noreferrer";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
