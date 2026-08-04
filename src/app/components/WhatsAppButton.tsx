import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * WhatsApp hizli iletisim.
 *
 * Eskiden ekranin kosesinde etiketsiz, tam doygunlukta yesil bir daireydi:
 * paletle carpisiyor, ne oldugu ancak uzerine gelince (yalniz farede) ortaya
 * cikiyordu ve dokunmatikte tamamen tahmine kaliyordu.
 *
 * Artik etiketi her zaman gorunur (genis ekranda yazi, dar ekranda yalniz ikon
 * ama aria-label ile adlandirilmis), yesil marka rengi korunuyor cunku o
 * WhatsApp'in kimligi, ancak koyu bir kenarlik ve olculu bir golge ile
 * sayfaya bagli duruyor. Buyume yerine hafif kalkma: dokunmatikte hover yok,
 * :active ile geri bildirim var.
 */
export const WhatsAppButton: React.FC = () => {
  const { language } = useLanguage();
  const label = language === 'en' ? 'Chat on WhatsApp' : "WhatsApp'tan yazın";

  return (
    <a
      href="https://wa.me/905316699519"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group fixed bottom-5 right-5 z-40 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-whatsapp-surface px-4 py-3 text-white shadow-e3 ring-1 ring-black/10 transition-[transform,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:bg-whatsapp-surface-hover active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
      {/* Dar ekranda yer kaplamasin, genis ekranda ne oldugu yazsin. */}
      <span className="hidden text-sm font-semibold sm:inline">{label}</span>
    </a>
  );
};
