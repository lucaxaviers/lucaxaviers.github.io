export function getWhatsAppNumber(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP?.trim();
  if (!raw) return null;
  // Clean all non-digits
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  // If user passed DDD without country code, add 55
  if (digits.length === 10 || digits.length === 11) {
    return `55${digits}`;
  }
  return digits;
}

export function getWhatsAppUrl(message = "Oi Lucas! Vi seu site e queria conversar sobre um projeto."): string | null {
  const number = getWhatsAppNumber();
  if (!number) return null;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export const CONTACT_EMAIL = "lucas.xavier.pln@gmail.com";
