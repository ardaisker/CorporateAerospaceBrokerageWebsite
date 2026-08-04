import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { seoContent } from '@/utils/seoContent';
import { PageHeader } from '@/app/components/primitives/PageHeader';
import { buildMailto } from '@/utils/mailtoFallback';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();
  const seo = seoContent[language].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_rejee1o';
      const templateId = 'template_w07i7vc';
      const publicKey = 'tIKH8tpHcR8RaiNVN';

      // Prepare email template parameters
      const templateParams = {
        to_email: 'info@guleraero.com',
        from_name: formData.name,
        contact_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        submission_date: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Europe/Istanbul'
        })
      };

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonical="https://guleraero.com/contact"
        keywords={seo.keywords}
      />
      
      <PageHeader title={t('contact.title')} subtitle={t('contact.subtitle')} />

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-surface-muted p-6 sm:p-8 rounded-lg border border-line">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-900 mb-4 sm:mb-6">
                {language === 'en' ? 'Send Us a Message' : 'Bize Mesaj Gönderin'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="contact-name">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="contact-email">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="contact-phone">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="contact-message">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-600 text-white px-6 py-3 sm:py-4 rounded hover:bg-brand-700 transition-colors font-medium flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting 
                    ? (language === 'en' ? 'Sending...' : 'Gönderiliyor...')
                    : t('contact.form.submit')
                  }
                </button>
              </form>

              {/* Submission Status */}
              {submitStatus === 'success' && (
                <div className="mt-4 text-sm text-green-500 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {language === 'en'
                    ? 'Thank you for your message. We will contact you within 24 hours.'
                    : 'Mesajınız için teşekkür ederiz. 24 saat içinde sizinle iletişime geçeceğiz.'}
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4" role="alert">
                  <div className="flex items-start gap-2 text-sm text-red-800">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>
                      {language === 'en'
                        ? 'We could not send your message from this network. Your details are still in the form below.'
                        : 'Mesajınızı bu ağ üzerinden gönderemedik. Yazdıklarınız aşağıdaki formda duruyor.'}
                    </span>
                  </div>
                  {/* Kurumsal vekiller api.emailjs.com'u sik engelliyor. Yazdigi
                      her seyi tasiyan bir mailto ver ki talep kaybolmasin. */}
                  <a
                    href={buildMailto(
                      language === 'en' ? 'Website enquiry' : 'Web sitesi talebi',
                      [
                        [language === 'en' ? 'Name' : 'Ad Soyad', formData.name],
                        [language === 'en' ? 'Email' : 'E-posta', formData.email],
                        [language === 'en' ? 'Phone' : 'Telefon', formData.phone],
                        [language === 'en' ? 'Message' : 'Mesaj', formData.message],
                      ]
                    )}
                    className="mt-3 inline-flex items-center gap-2 rounded bg-brand-900 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
                  >
                    {language === 'en' ? 'Send it by email instead' : 'Bunun yerine e-posta ile gönderin'}
                  </a>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-900 mb-4 sm:mb-6">
                  {t('contact.info.title')}
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center h-12">
                      <a href="mailto:info@guleraero.com" className="text-sm sm:text-base text-ink-muted hover:text-brand-600 transition-colors break-all">
                        info@guleraero.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center h-12">
                      <a href="tel:+905316699519" className="text-sm sm:text-base text-ink-muted hover:text-brand-600 transition-colors">
                        +90 531 669 9519
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-whatsapp rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center h-12">
                      <a 
                        href="https://wa.me/905316699519" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-ink-muted hover:text-whatsapp transition-colors"
                      >
                        {language === 'en' ? 'Chat on WhatsApp' : 'WhatsApp ile Mesajlaşın'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-gradient-to-br from-brand-900 to-brand-600 p-6 sm:p-8 rounded-lg text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">
                  {language === 'en' ? 'Response Time' : 'Yanıt Süresi'}
                </h3>
                <p className="text-sm sm:text-base text-brand-100 mb-4 sm:mb-6">{t('contact.info.response')}</p>
                <div className="border-t border-white/20 pt-4 sm:pt-6">
                  <p className="text-sm text-brand-200">
                    {language === 'en'
                      ? 'For urgent inquiries, please indicate "URGENT" in your message subject.'
                      : 'Acil talepler için lütfen mesaj konunuzda "ACİL" belirtiniz.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-brand-900 to-brand-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              {language === 'en' ? 'How Can We Help?' : 'Nasıl Yardımcı Olabiliriz?'}
            </h2>
            <p className="text-base sm:text-lg text-brand-100 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Our team is ready to discuss your aerospace parts requirements, commercial consultancy needs, or any questions about our services.'
                : 'Ekibimiz havacılık parça gereksinimlerinizi, ticari danışmanlık ihtiyaçlarınızı veya hizmetlerimizle ilgili herhangi bir sorunuzu görüşmeye hazırdır.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-lg border border-white/20 text-center">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {language === 'en' ? 'Parts Inquiries' : 'Parça Talepleri'}
              </h3>
              <p className="text-sm text-brand-100">
                {language === 'en'
                  ? 'Specific component requirements and sourcing'
                  : 'Spesifik bileşen gereksinimleri ve tedarik'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-lg border border-white/20 text-center">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {language === 'en' ? 'Consultancy Services' : 'Danışmanlık Hizmetleri'}
              </h3>
              <p className="text-sm text-brand-100">
                {language === 'en'
                  ? 'Strategic advisory and procurement optimization'
                  : 'Stratejik danışmanlık ve tedarik optimizasyonu'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-5 sm:p-6 rounded-lg border border-white/20 text-center">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {language === 'en' ? 'Partnership Opportunities' : 'Ortaklık Fırsatları'}
              </h3>
              <p className="text-sm text-brand-100">
                {language === 'en'
                  ? 'Become a supplier or distribution partner'
                  : 'Tedarikçi veya distribütör ortak olun'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};