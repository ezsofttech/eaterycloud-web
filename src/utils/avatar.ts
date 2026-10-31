/**
 * Avatar Utilities
 * Generates initials, site brand colors (Orange & White), and fallback SVG avatar data URIs.
 */

export interface AvatarColorTheme {
  bg: string;
  text: string;
  gradientFrom: string;
  gradientTo: string;
}

// Brand-focused Orange & White palettes
const AVATAR_PALETTES: AvatarColorTheme[] = [
  { bg: "#FF710D", text: "#FFFFFF", gradientFrom: "#FF8833", gradientTo: "#E65E00" }, // Primary Eatery Orange
  { bg: "#E65E00", text: "#FFFFFF", gradientFrom: "#FF710D", gradientTo: "#D25200" }, // Deep Brand Orange
  { bg: "#FF5C00", text: "#FFFFFF", gradientFrom: "#FF7E29", gradientTo: "#EA5100" }, // Vibrant Sunset Orange
  { bg: "#FA6400", text: "#FFFFFF", gradientFrom: "#FFA057", gradientTo: "#FA6400" }, // Bright Tangerine Orange
  { bg: "#F97316", text: "#FFFFFF", gradientFrom: "#FB923C", gradientTo: "#EA580C" }, // Warm Amber Orange
];

/**
 * Extracts 1-2 character initials from a full name or title.
 * Examples:
 *  - "Ananya Mehta" -> "AM"
 *  - "Rakesh Sharma" -> "RS"
 *  - "Spice Villa" -> "SV"
 */
export function getInitials(name?: string, maxChars = 2): string {
  if (!name || typeof name !== "string") return "?";

  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return "?";

  if (words.length === 1) {
    return words[0].slice(0, maxChars).toUpperCase();
  }

  return words
    .slice(0, maxChars)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/**
 * Deterministically generates an Orange & White color pair based on the name.
 */
export function getAvatarColor(name?: string): AvatarColorTheme {
  if (!name) return AVATAR_PALETTES[0];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % AVATAR_PALETTES.length;
  return AVATAR_PALETTES[index];
}

/**
 * Generates an SVG Data URI in the site's Orange & White theme.
 * Can be directly plugged into `<img src="..." />` or Next.js `<Image src="..." />`.
 */
export function generateAvatarSvg(name?: string, size = 128): string {
  const safeName = name?.trim() || "User";
  const initials = getInitials(safeName);
  const { gradientFrom, gradientTo, text } = getAvatarColor(safeName);
  const fontSize = Math.round(size * 0.4);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
    <defs>
      <linearGradient id="ecAvatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${gradientFrom}"/>
        <stop offset="100%" stop-color="${gradientTo}"/>
      </linearGradient>
    </defs>
    <rect width="${size}" height="${size}" rx="${size / 2}" fill="url(#ecAvatarGrad)"/>
    <text x="50%" y="50%" dy="0.36em" fill="${text}" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="${fontSize}" font-weight="700" letter-spacing="0.05em" text-anchor="middle">${initials}</text>
  </svg>`.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Returns the provided image URL if valid, otherwise falls back to the Orange/White SVG avatar.
 */
export function getAvatarUrl(avatarSrc?: string | null, name?: string, size = 128): string {
  if (avatarSrc && avatarSrc.trim().length > 0) {
    return avatarSrc;
  }
  return generateAvatarSvg(name, size);
}
