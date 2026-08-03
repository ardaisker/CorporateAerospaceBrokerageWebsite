/**
 * The contact and parts-request forms post to api.emailjs.com. That is the one
 * third-party host the site depends on at runtime, and it is exactly the kind
 * of SaaS endpoint corporate proxies block — the same networks this company's
 * buyers sit behind. Verified: with api.emailjs.com blocked, the visitor saw
 * "an error occurred, please try again later" and the two mailto links on the
 * page were bare `mailto:info@guleraero.com`, so everything they had typed
 * would have to be retyped into a mail client. Every enquiry from such a
 * network was lost.
 *
 * This builds a mailto: URL carrying what they already wrote, so the failure
 * costs one click instead of the enquiry.
 */

export const CONTACT_EMAIL = 'info@guleraero.com';

/** mailto gövdeleri düz metindir; alan adı boşsa satırı hiç yazma. */
function lines(fields: Array<[string, string | undefined]>): string {
  return fields
    .filter(([, v]) => v && String(v).trim())
    .map(([label, v]) => `${label}: ${String(v).trim()}`)
    .join('\n');
}

export function buildMailto(subject: string, fields: Array<[string, string | undefined]>, footer?: string): string {
  const body = [lines(fields), footer].filter(Boolean).join('\n\n');
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
