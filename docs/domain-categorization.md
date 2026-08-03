# guleraero.com — kategorizasyon başvuruları

## Neden

`guleraero.com` şu an en az bir kurumsal güvenlik ürünü tarafından **uzaktan
tarayıcı izolasyonuna** sokuluyor. Ölçülen kanıt:

- Sayfa kaynağında birebir `Netskope Isolation Technology` yorumu geliyor;
  sitenin kendi HTML'i tarayıcıya hiç ulaşmıyor (`#root` yok, `<noscript>` yok,
  yerine 353 KB'lık izolasyon istemcisi).
- Aynı tarayıcıda, aynı ağda `ardaisker.github.io` **sorunsuz** açılıyor.
  Yani politika GitHub Pages'e veya ağa değil, doğrudan bu alan adına özel.

Bu davranış tipik olarak **kategorisiz / yeni görülen** alan adlarına uygulanır.
Müşteri kitlesi havacılık ve savunma şirketleri — yani tam da bu tür katı
vekilleri olan kurumlar. Kategorize edilmesi doğrudan erişim kazancıdır.

Not: kategori durumunu doğrulayamadım. Zscaler'ın sorgu aracı yalnız kendi
müşterilerine açık, Palo Alto reCAPTCHA arkasında, Cisco Talos Cloudflare
doğrulaması istiyor. Yukarıdaki "kategorisiz" teşhisi en olası açıklama,
kanıtlanmış bir gerçek değil.

## Talep edilecek kategori

Sağlayıcıların sözlükleri farklı, ama hepsinde şu üçünden biri hedeflenmeli:

| Tercih | Tipik karşılığı |
|---|---|
| 1 | Business / Corporate Marketing |
| 2 | Manufacturing / Industrial |
| 3 | Aviation / Transportation |

Kaçınılması gereken: "Newly Registered Domain", "Uncategorized", "Shareware /
Freeware", "Parked".

## Nereye başvurulacak

| Sağlayıcı | Adres | Not |
|---|---|---|
| Netskope | Netskope destek portalı üzerinden (kurumsal müşteri talebi) | Herkese açık formu yok; ağ yöneticisi açmalı |
| Zscaler | https://sitereview.zscaler.com | Yalnız Zscaler müşterisi ağından erişilebiliyor |
| Palo Alto | https://urlfiltering.paloaltonetworks.com | Sorgu sonrası "Request Change"; reCAPTCHA var |
| Cisco Talos | https://talosintelligence.com/reputation_center | "Submit a dispute" |
| Forcepoint | https://csi.forcepoint.com | "Suggest a category" |
| Broadcom / Symantec | https://sitereview.bluecoat.com | E-posta doğrulaması ister |

Kendi ağınızdaki engeli en hızlı çözecek olan **Netskope** maddesidir ve o
sağlayıcının kamuya açık formu yok: Trendyol tarafındaki ağ/güvenlik ekibine
`guleraero.com` için istisna veya yeniden kategorilendirme talebi açılması
gerekiyor.

## Başvuruya yapıştırılacak metin (İngilizce)

> guleraero.com is the official corporate website of Guler Aero Solutions, an
> international aviation, defense and aerospace parts brokerage and commercial
> consultancy company. The site is informational: it describes the company's
> brokerage and consultancy services, the aircraft spare parts categories it
> handles (Boeing and Airbus platforms), the international standards it works
> to, and provides contact and quotation request forms.
>
> The site is a static build hosted on GitHub Pages, served over HTTPS with a
> valid certificate. It loads no third-party scripts, trackers or advertising,
> and requests no resources from any host other than its own domain. The only
> outbound call is a form submission to EmailJS when a visitor sends an enquiry.
> Ownership and a security contact are published at
> https://guleraero.com/.well-known/security.txt
>
> It is currently subject to remote browser isolation, which we believe is due
> to the domain being uncategorised rather than to any content on it. We are
> requesting categorisation as Business / Corporate Marketing (alternatively
> Manufacturing or Aviation).

## Başvuru sırasında istenecek bilgiler

- Alan adı: `guleraero.com`
- İletişim e-postası: `info@guleraero.com`
- Şirket: Guler Aero Solutions
- Sitemap: `https://guleraero.com/sitemap.xml`
- security.txt: `https://guleraero.com/.well-known/security.txt`

## Bunlar neden bende bitmedi

Formların gönderilmesi sizin adınıza dış dünyaya yapılan bir işlem ve e-posta
adresi istiyor; ayrıca Palo Alto reCAPTCHA arkasında, Zscaler müşteriye özel,
Talos'ta Cloudflare doğrulaması var. Metni hazırladım, gönderim sizde.
