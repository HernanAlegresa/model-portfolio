/**
 * Contact channels, shared by the footer, the Home's closing section and
 * /contact. Edit them here only.
 *
 * - `email`: the professional inbox. Setting it to null brings back the
 *   "on the way" text (`contact.email.pending` in src/i18n/ui.ts).
 * - `phone`: null hides it everywhere. Only fill it in once Hernán confirms
 *   it may be public (docs/PROJECT-BRIEF.md, privacy rules):
 *     phone: { display: '+598 9X XXX XXX', tel: '+5989XXXXXXX', whatsapp: true },
 *   `display` is how it reads, `tel` the digits for the link (no spaces),
 *   `whatsapp: true` also adds a WhatsApp link.
 */
export interface ContactInfo {
  instagram: { handle: string; url: string };
  email: string | null;
  phone: { display: string; tel: string; whatsapp: boolean } | null;
}

export const contact: ContactInfo = {
  instagram: { handle: '@hernanalegresa', url: 'https://instagram.com/hernanalegresa' },
  email: 'hernanalegresa10@gmail.com',
  phone: null,
};

/** wa.me wants the number without the plus sign. */
export const whatsappUrl = (tel: string) => `https://wa.me/${tel.replace(/\D/g, '')}`;
