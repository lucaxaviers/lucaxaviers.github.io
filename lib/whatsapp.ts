export function getWhatsAppNumber(): string {
  const raw = (process.env.NEXT_PUBLIC_WHATSAPP?.trim() || "19981400709");
  // Clean all non-digits
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "5519981400709";
  // If user passed DDD without country code, add 55
  if (digits.length === 10 || digits.length === 11) {
    return `55${digits}`;
  }
  return digits;
}

export function getWhatsAppUrl(message = "Oi Lucas! Vi seu site e queria conversar sobre um projeto."): string {
  const number = getWhatsAppNumber();
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export const CONTACT_EMAIL = "lucas.xavier.pln@gmail.com";
export const WHATSAPP_PHONE_DISPLAY = "(19) 98140-0709";
export const INSTAGRAM_HANDLE = "@lucaxaviers";
export const INSTAGRAM_URL = "https://instagram.com/lucaxaviers";
export const GITHUB_URL = "https://github.com/lucaxaviers";
export const LINKEDIN_URL = "https://linkedin.com/in/lucaxaviers";

