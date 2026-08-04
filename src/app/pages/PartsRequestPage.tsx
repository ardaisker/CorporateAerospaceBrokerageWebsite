import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { seoContent } from '@/utils/seoContent';
import { PageHeader } from '@/app/components/primitives/PageHeader';
import { buildMailto } from '@/utils/mailtoFallback';
import { Send, Package, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const PartsRequestPage: React.FC = () => {
  const { t, language } = useLanguage();
  const seo = seoContent[language].partsRequest;
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    country: '',
    jobTitle: '',
    corporateEmail: '',
    phone: '',
    partNumber: '',
    partDescription: '',
    quantity: '',
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
      const templateId = 'template_1z4idda';
      const publicKey = 'tIKH8tpHcR8RaiNVN';

      // Prepare email template parameters
      const templateParams = {
        to_email: 'info@guleraero.com',
        from_name: formData.fullName,
        company_name: formData.companyName,
        country: formData.country,
        job_title: formData.jobTitle,
        corporate_email: formData.corporateEmail,
        phone: formData.phone || 'Not provided',
        part_number: formData.partNumber,
        part_description: formData.partDescription,
        quantity: formData.quantity,
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
        fullName: '',
        companyName: '',
        country: '',
        jobTitle: '',
        corporateEmail: '',
        phone: '',
        partNumber: '',
        partDescription: '',
        quantity: '',
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
        canonical="https://guleraero.com/parts-request"
        keywords={seo.keywords}
      />
      
      <PageHeader title={t('partsrequest.title')} subtitle={t('partsrequest.subtitle')} />

      {/* Parts Request Form */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-800 leading-relaxed">
                {t('partsrequest.form.success')}
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800 leading-relaxed">
                  {t('partsrequest.form.error')}
                </p>
              </div>
              {/* Vekil api.emailjs.com'u engellediginde talep kaybolmasin diye
                  girilen her alani tasiyan bir mailto sun. */}
              <a
                href={buildMailto(
                  language === 'en' ? 'Aircraft parts request' : 'Uçak parçası talebi',
                  [
                    [language === 'en' ? 'Company' : 'Firma', formData.companyName],
                    [language === 'en' ? 'Country' : 'Ülke', formData.country],
                    [language === 'en' ? 'Contact' : 'Yetkili', formData.fullName],
                    [language === 'en' ? 'Job title' : 'Görev', formData.jobTitle],
                    [language === 'en' ? 'Email' : 'E-posta', formData.corporateEmail],
                    [language === 'en' ? 'Phone' : 'Telefon', formData.phone],
                    [language === 'en' ? 'Part number' : 'Parça numarası', formData.partNumber],
                    [language === 'en' ? 'Description' : 'Açıklama', formData.partDescription],
                    [language === 'en' ? 'Quantity' : 'Adet', formData.quantity],
                  ]
                )}
                className="mt-3 inline-flex items-center gap-2 rounded bg-brand-900 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600"
              >
                {language === 'en' ? 'Send it by email instead' : 'Bunun yerine e-posta ile gönderin'}
              </a>
            </div>
          )}

          <div className="bg-surface-muted p-6 sm:p-8 rounded-lg border border-line">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="pr-fullName">
                  {t('partsrequest.form.fullname')} *
                </label>
                <input
                    id="pr-fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="pr-companyName">
                  {t('partsrequest.form.companyname')} *
                </label>
                <input
                    id="pr-companyName"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                />
              </div>

              {/* Company Country */}
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="pr-country">
                  {t('partsrequest.form.country')} *
                </label>
                <input
                    id="pr-country"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                />
              </div>

              {/* Job Title / Position */}
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="pr-jobTitle">
                  {t('partsrequest.form.jobtitle')} *
                </label>
                <input
                    id="pr-jobTitle"
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                />
              </div>

              {/* Corporate Email Address */}
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="pr-corporateEmail">
                  {t('partsrequest.form.corporateemail')} *
                </label>
                <input
                    id="pr-corporateEmail"
                  type="email"
                  name="corporateEmail"
                  value={formData.corporateEmail}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="pr-phone">
                  {t('partsrequest.form.phone')}
                </label>
                <input
                    id="pr-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+90 XXX XXX XX XX"
                  className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                />
              </div>

              {/* Part Number (P/N) */}
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="pr-partNumber">
                  {t('partsrequest.form.partnumber')} *
                </label>
                <input
                    id="pr-partNumber"
                  type="text"
                  name="partNumber"
                  value={formData.partNumber}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                />
              </div>

              {/* Part Description */}
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="pr-partDescription">
                  {t('partsrequest.form.partdescription')} *
                </label>
                <textarea
                  id="pr-partDescription"
                  name="partDescription"
                  value={formData.partDescription}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30 resize-none"
                />
              </div>

              {/* Quantity Required */}
              <div>
                <label className="block text-sm font-medium text-ink-muted mb-2" htmlFor="pr-quantity">
                  {t('partsrequest.form.quantity')} *
                </label>
                <input
                    id="pr-quantity"
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full rounded-lg border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-subtle transition-[border-color,box-shadow] duration-200 hover:border-brand-300 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/30"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-600 text-white px-6 py-4 rounded hover:bg-brand-700 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting 
                  ? (language === 'en' ? 'Sending...' : 'Gönderiliyor...')
                  : t('partsrequest.form.submit')
                }
              </button>

              {/* Disclaimer */}
              <div className="mt-6 pt-6 border-t border-line-strong">
                <p className="text-xs text-ink-subtle leading-relaxed">
                  {t('partsrequest.form.disclaimer')}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};