import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { seoContent } from '@/utils/seoContent';
import { Section } from '@/app/components/primitives/Section';
import { SectionHeading } from '@/app/components/primitives/SectionHeading';
import { Card, CardIcon } from '@/app/components/primitives/Card';
import { CtaLink } from '@/app/components/primitives/CtaLink';
import { Reveal } from '@/app/components/primitives/Reveal';
import aircraftHeroImage from '@/assets/home-hero-aircraft.webp';
import { Shield, Globe, CheckCircle, Users, Building2, Plane } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  const seo = seoContent[language].home;

  const values = [
    { icon: Shield, title: t('value.trust.title'), desc: t('value.trust.desc') },
    { icon: Globe, title: t('value.international.title'), desc: t('value.international.desc') },
    { icon: CheckCircle, title: t('value.compliance.title'), desc: t('value.compliance.desc') },
  ];

  const principles = [
    { icon: CheckCircle, title: t('principles.part'), desc: t('principles.part.desc') },
    { icon: Users, title: t('principles.supplier'), desc: t('principles.supplier.desc') },
    { icon: Building2, title: t('principles.structure'), desc: t('principles.structure.desc') },
  ];

  // Firma bu standartlara gore calistigini Standards sayfasinda anlatiyordu ama
  // ana sayfada tek bir guven isareti yoktu — B2B alicinin ilk aradigi sey bu.
  const credentials = ['FAA', 'EASA', 'IATA', 'AS9100', 'ISO 9001'];

  const stats = [
    { value: t('stats.platforms'), label: t('stats.platforms.label') },
    { value: t('stats.response'), label: t('stats.response.label') },
    { value: t('stats.reach'), label: t('stats.reach.label') },
    { value: t('stats.traceability'), label: t('stats.traceability.label') },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical="https://guleraero.com/"
        keywords={seo.keywords}
      />

      {/* ── Hero ────────────────────────────────────────────────────────────
          Ucak eskiden opacity-20 ile gradyanin altinda eziliyordu: ne temiz
          bir fotograf ne temiz bir renk alaniydi. Artik fotograf tam
          opaklikta; okunabilirligi yonlu bir karartma (scrim) sagliyor. */}
      <section className="relative isolate overflow-hidden bg-brand-950">
        <img
          src={aircraftHeroImage}
          alt="Commercial aircraft in flight"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Metnin oturdugu tarafi koyultan, ucagi serbest birakan iki katman. */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/70 to-brand-950/25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/40"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
              {t('hero.eyebrow')}
            </p>
            <h1 className="text-3xl text-white sm:text-4xl lg:text-5xl">{t('hero.title')}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-100 sm:mt-6 sm:text-lg">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <CtaLink to="/parts-request" variant="onDark" arrow>
                {t('hero.cta2')}
              </CtaLink>
              {/* Ikincil eylem: birincilden gorsel olarak acikca geride. */}
              <CtaLink
                to="/services"
                variant="ghost"
                className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                {t('hero.cta')}
              </CtaLink>
            </div>
          </div>
        </div>

        {/* Guven seridi — hero'nun altina oturur, kaydirmadan gorunur. */}
        <div className="relative border-t border-white/10 bg-brand-950/60 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:gap-8 sm:px-6 lg:px-8">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-brand-300">
              {t('hero.credentials')}
            </span>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="text-sm font-semibold tracking-wide text-brand-100 sm:text-base"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Olcutler ─────────────────────────────────────────────────────── */}
      <Section tone="muted" size="sm">
        {/* Once <dl> kullaniliyordu, ama Reveal araya bir <div> koyuyor ve
            dt/dd artik dl'in dogrudan cocugu olmuyordu — axe bunu yapisal
            hata olarak isaretledi. Deger ve etiket zaten ekranda yan yana
            gorunuyor, tanim listesi ek bir sey kazandirmiyordu. */}
        <ul className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <li key={s.label}>
              <Reveal index={i}>
                <div className="border-l-2 border-brand-600 pl-4">
                  <span className="block font-display text-lg font-semibold leading-tight text-ink sm:text-xl">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-sm text-ink-subtle">{s.label}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Deger onerileri ──────────────────────────────────────────────── */}
      <Section tone="surface">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} index={i}>
              <Card className="h-full">
                <CardIcon icon={v.icon} />
                <h2 className="text-lg text-ink sm:text-xl">{v.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{v.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Ilkeler ──────────────────────────────────────────────────────── */}
      <Section tone="muted">
        <SectionHeading
          eyebrow={language === 'en' ? 'How we operate' : 'Çalışma biçimimiz'}
          title={t('principles.title')}
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} index={i}>
              {/* Numaralandirma: uc ilke bir sira, rastgele uc kutu degil. */}
              <Card className="h-full">
                <span
                  className="mb-4 block font-display text-sm font-bold tracking-widest text-brand-300"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex items-start gap-3">
                  <p.icon className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                  <h3 className="text-lg text-ink sm:text-xl">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">{p.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Kapanis cagrisi ──────────────────────────────────────────────── */}
      <Section tone="accent" width="4xl">
        <div className="text-center">
          <Plane
            className="mx-auto mb-6 h-10 w-10 text-brand-300 sm:h-12 sm:w-12"
            aria-hidden="true"
          />
          <h2 className="text-2xl text-white sm:text-3xl">
            {language === 'en'
              ? 'Ready to connect with global aerospace partners?'
              : 'Küresel havacılık ortaklarıyla bağlantı kurmaya hazır mısınız?'}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
            {language === 'en'
              ? 'Discover transparent brokerage solutions for your aerospace parts requirements.'
              : 'Havacılık parça ihtiyaçlarınız için şeffaf aracılık çözümlerini keşfedin.'}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaLink to="/contact" variant="onDark" arrow>
              {t('nav.contact')}
            </CtaLink>
            <CtaLink
              to="/parts-request"
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              {t('nav.partsrequest')}
            </CtaLink>
          </div>
        </div>
      </Section>
    </div>
  );
};
