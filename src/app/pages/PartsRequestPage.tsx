import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEOHead } from '@/app/components/SEOHead';
import { seoContent } from '@/utils/seoContent';
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
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#1a2332] to-[#2a5298] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Package className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {t('partsrequest.title')}
              </h1>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
              {t('partsrequest.subtitle')}
            </p>
          </div>
        </div>
      </section>

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
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 leading-relaxed">
                {t('partsrequest.form.error')}
              </p>
            </div>
          )}

          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('partsrequest.form.fullname')} *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#2a5298] transition-colors"
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('partsrequest.form.companyname')} *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#2a5298] transition-colors"
                />
              </div>

              {/* Company Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('partsrequest.form.country')} *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#2a5298] transition-colors"
                />
              </div>

              {/* Job Title / Position */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('partsrequest.form.jobtitle')} *
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#2a5298] transition-colors"
                />
              </div>

              {/* Corporate Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('partsrequest.form.corporateemail')} *
                </label>
                <input
                  type="email"
                  name="corporateEmail"
                  value={formData.corporateEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#2a5298] transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('partsrequest.form.phone')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+90 XXX XXX XX XX"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#2a5298] transition-colors"
                />
              </div>

              {/* Part Number (P/N) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('partsrequest.form.partnumber')} *
                </label>
                <input
                  type="text"
                  name="partNumber"
                  value={formData.partNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#2a5298] transition-colors"
                />
              </div>

              {/* Part Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('partsrequest.form.partdescription')} *
                </label>
                <textarea
                  name="partDescription"
                  value={formData.partDescription}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#2a5298] transition-colors resize-none"
                />
              </div>

              {/* Quantity Required */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('partsrequest.form.quantity')} *
                </label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#2a5298] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2a5298] text-white px-6 py-4 rounded hover:bg-[#1e3d6f] transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting 
                  ? (language === 'en' ? 'Sending...' : 'Gönderiliyor...')
                  : t('partsrequest.form.submit')
                }
              </button>

              {/* Disclaimer */}
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-xs text-gray-500 leading-relaxed">
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