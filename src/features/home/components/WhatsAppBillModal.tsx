"use client";

import React, { useState, useEffect, useRef } from "react";
import { COUNTRIES, Country, DEFAULT_COUNTRY } from "@/constants/countries";

interface WhatsAppBillModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (formattedPhone: string) => void;
  invoiceNumber?: string;
  orderCode?: string;
  totalAmount?: string;
  invoiceImageUrl?: string;
}

const CLIENT_BASE_URL = (
  process.env.NEXT_PUBLIC_CLIENT || "https://eaterycloud.com"
).replace(/\/+$/, "");

/**
 * Resolves a universally reachable HTTPS URL for the invoice image
 * so that links received on mobile phones can be opened outside localhost.
 */
function getPublicInvoiceUrl(pathOrUrl: string): string {
  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;

  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    try {
      const parsed = new URL(pathOrUrl);
      if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
        return `${CLIENT_BASE_URL}${parsed.pathname}`;
      }
      return pathOrUrl;
    } catch {
      return pathOrUrl;
    }
  }

  if (typeof window !== "undefined") {
    const isLocal =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    if (isLocal) {
      return `${CLIENT_BASE_URL}${normalizedPath}`;
    }
    return `${window.location.origin}${normalizedPath}`;
  }

  return `${CLIENT_BASE_URL}${normalizedPath}`;
}

export function WhatsAppBillModal({
  isOpen,
  onClose,
  onSuccess,
  invoiceNumber = "INV-002208",
  orderCode = "POS-001552",
  totalAmount = "Rs. 1,248.00",
  invoiceImageUrl = "/images/thermal_invoice.png",
}: WhatsAppBillModalProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isCountryPickerOpen, setIsCountryPickerOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const countryPickerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus phone input on modal open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Focus search input when country picker opens
  useEffect(() => {
    if (isCountryPickerOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isCountryPickerOpen]);

  // Handle click outside country picker
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        countryPickerRef.current &&
        !countryPickerRef.current.contains(e.target as Node)
      ) {
        setIsCountryPickerOpen(false);
      }
    };
    if (isCountryPickerOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isCountryPickerOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isCountryPickerOpen) {
          setIsCountryPickerOpen(false);
          inputRef.current?.focus();
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isCountryPickerOpen, onClose]);

  if (!isOpen) return null;

  const filteredCountries = COUNTRIES.filter((c) => {
    const q = countrySearch.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.dialCode.includes(q.replace(/^\+/, ""))
    );
  });

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsCountryPickerOpen(false);
    setCountrySearch("");
    inputRef.current?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rawDigits = phoneNumber.replace(/[^\d+]/g, "");

    if (!rawDigits) {
      setError("Please enter a phone number.");
      inputRef.current?.focus();
      return;
    }

    let finalNumber = "";
    if (rawDigits.startsWith("+")) {
      finalNumber = rawDigits.substring(1);
    } else {
      const dial = selectedCountry.dialCode;
      if (rawDigits.startsWith(dial) && rawDigits.length > dial.length + 6) {
        finalNumber = rawDigits;
      } else {
        finalNumber = `${dial}${rawDigits}`;
      }
    }

    if (finalNumber.length < 8) {
      setError(`Please enter a valid phone number for ${selectedCountry.name}.`);
      inputRef.current?.focus();
      return;
    }

    const receiptUrl = getPublicInvoiceUrl(invoiceImageUrl);

    // Clean plain text transaction bill formatting
    const textMessage = [
      "EATERYCLOUD POS - TAX INVOICE",
      "----------------------------------------",
      "Dear Customer,",
      `Here is your official digital invoice for order ${orderCode}.`,
      "",
      "BILL DETAILS",
      `Invoice No: ${invoiceNumber}`,
      `Order ID: ${orderCode}`,
      "Date & Time: 30 Oct 2026, 09:45 PM",
      "Billed At: Main Dine-In (Table #04)",
      "",
      "PAYMENT BREAKDOWN",
      "Taxable Value: Rs. 1,188.57",
      "CGST (2.5%): Rs. 29.71",
      "SGST (2.5%): Rs. 29.71",
      `Total Paid: ${totalAmount}`,
      "Payment Mode: UPI Instant (Paid)",
      "Status: 100% GST Compliant",
      "",
      "DIGITAL THERMAL RECEIPT",
      "View or download your full itemized 80mm thermal bill:",
      receiptUrl,
      "",
      "----------------------------------------",
      "EateryCloud Smart Restaurant OS",
      "GST Section 9(5) Certified Billing",
      "Thank you for dining with us!",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${finalNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    onSuccess(finalNumber);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="whatsapp-modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 z-10 transition-all">
        {/* Header */}
        <div className="px-6 pt-5 pb-4 border-b border-gray-100 flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-emerald-50/50 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg shadow-sm">
              <i className="bi bi-whatsapp" />
            </div>
            <div>
              <h3 id="whatsapp-modal-title" className="font-bold text-[#102B46] text-base">
                Send WhatsApp Bill
              </h3>
              <p className="text-xs text-gray-500">
                Official digital e-invoice dispatch
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Close dialog"
          >
            <i className="bi bi-x-lg text-sm" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Bill summary preview card */}
          <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-3.5 space-y-2 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-gray-200">
              <div className="flex items-center gap-1.5 font-bold text-[#102B46]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>EateryCloud Digital Bill</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-semibold">
                UPI PAID
              </span>
            </div>

            <div className="grid grid-cols-2 gap-y-1.5 text-gray-600 pt-0.5 text-[11px]">
              <div>
                <span className="text-gray-400 block text-[10px]">Invoice No</span>
                <span className="font-mono font-semibold text-[#102B46]">{invoiceNumber}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px]">Order Ref</span>
                <span className="font-mono font-semibold text-[#102B46]">{orderCode}</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px]">GST Breakdown</span>
                <span>CGST (2.5%) + SGST (2.5%)</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px]">Total Amount</span>
                <span className="font-extrabold text-[#102B46] text-xs">{totalAmount}</span>
              </div>
            </div>
          </div>

          {/* Phone Input with Country Code Selector */}
          <div className="relative" ref={countryPickerRef}>
            <label
              htmlFor="whatsapp-phone-input"
              className="block text-xs font-semibold text-[#102B46] mb-1.5"
            >
              Customer WhatsApp Number
            </label>

            <div className="relative flex rounded-xl border border-gray-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all bg-white">
              {/* Country Picker Toggle Button */}
              <button
                type="button"
                onClick={() => {
                  setIsCountryPickerOpen((prev) => !prev);
                  if (error) setError(null);
                }}
                className="inline-flex items-center gap-1.5 px-3 bg-gray-50 hover:bg-gray-100 border-r border-gray-200 text-gray-700 text-xs font-bold transition-colors cursor-pointer select-none rounded-l-xl"
                aria-label={`Country code: ${selectedCountry.name} (+${selectedCountry.dialCode}). Click to change`}
                aria-expanded={isCountryPickerOpen}
              >
                <span className="text-base leading-none">{selectedCountry.flag}</span>
                <span>+{selectedCountry.dialCode}</span>
                <i
                  className={`bi bi-chevron-down text-[9px] text-gray-500 transition-transform ${
                    isCountryPickerOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <input
                ref={inputRef}
                id="whatsapp-phone-input"
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  if (error) setError(null);
                }}
                placeholder={`e.g. ${
                  selectedCountry.dialCode === "91" ? "98765 43210" : "Mobile number"
                }`}
                className="w-full py-2.5 px-3 text-sm text-[#102B46] placeholder:text-gray-400 outline-none rounded-r-xl"
              />
            </div>

            {/* Country Dropdown Popover with Search */}
            {isCountryPickerOpen && (
              <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden animate-fade-in">
                {/* Search Bar */}
                <div className="p-2 border-b border-gray-100 bg-gray-50">
                  <div className="relative flex items-center">
                    <i className="bi bi-search absolute left-3 text-gray-400 text-xs" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder="Search country or dial code..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-gray-200 rounded-lg text-[#102B46] placeholder:text-gray-400 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                    {countrySearch && (
                      <button
                        type="button"
                        onClick={() => setCountrySearch("")}
                        className="absolute right-2.5 text-gray-400 hover:text-gray-600 text-xs cursor-pointer"
                        aria-label="Clear search"
                      >
                        <i className="bi bi-x-circle-fill" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Searchable Country List */}
                <div className="max-h-52 overflow-y-auto divide-y divide-gray-50">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((c) => {
                      const isSelected = c.code === selectedCountry.code;
                      return (
                        <button
                          key={`${c.code}-${c.dialCode}`}
                          type="button"
                          onClick={() => handleSelectCountry(c)}
                          className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-emerald-50/60 transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-emerald-50 font-bold text-emerald-900"
                              : "text-gray-700"
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="text-base shrink-0 leading-none">{c.flag}</span>
                            <span className="truncate">{c.name}</span>
                            <span className="text-[10px] text-gray-400">({c.code})</span>
                          </div>
                          <span className="text-xs font-mono shrink-0 ml-2 text-gray-500">
                            +{c.dialCode}
                          </span>
                        </button>
                      );
                    })
                  ) : (
                    <div className="py-6 text-center text-xs text-gray-400">
                      No country found matching &ldquo;{countrySearch}&rdquo;
                    </div>
                  )}
                </div>
              </div>
            )}

            {error ? (
              <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                <i className="bi bi-exclamation-circle-fill text-[10px]" />
                <span>{error}</span>
              </p>
            ) : (
              <p className="text-[11px] text-gray-500 mt-1">
                Press Enter to dispatch the official receipt directly to WhatsApp.
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <i className="bi bi-whatsapp text-xs" />
              <span>Send Official Receipt</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
