import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../../components/ui/button';

interface FormData {
  first_name: string;
  last_name: string;
  business_email: string;
  company_name: string;
  primary_interest: string[];
  message: string;
  heard_about_us: string;
  campaign_source: string;
  website_url: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  business_email?: string;
  company_name?: string;
  primary_interest?: string;
}

const interestOptions = [
  'Improving Profitability',
  'Improving Customer Satisfaction',
  'Improving Data Visibility',
  'Improving Employee Performance',
  'Improving Operational Efficiency',
  'Improving Supplier Performance',
  'Not sure – show me what\'s possible',
];

export const AIReadiness: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    business_email: '',
    company_name: '',
    primary_interest: [],
    message: '',
    heard_about_us: '',
    campaign_source: 'direct',
    website_url: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [generalError, setGeneralError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const utmSource = params.get('utm_source');
    if (utmSource) {
      setFormData((prev) => ({ ...prev, campaign_source: utmSource }));
    }
  }, [location]);

  const validateField = (name: keyof FormData, value: string | string[]): string | undefined => {
    switch (name) {
      case 'first_name':
        return !value ? 'First name is required' : undefined;
      case 'last_name':
        return !value ? 'Last name is required' : undefined;
      case 'business_email':
        if (!value) return 'Work email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value as string) ? 'Invalid email format' : undefined;
      case 'company_name':
        return !value ? 'Company name is required' : undefined;
      case 'primary_interest':
        return Array.isArray(value) && value.length === 0 ? 'Please select at least one interest' : undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => {
      const newInterests = prev.primary_interest.includes(interest)
        ? prev.primary_interest.filter((item) => item !== interest)
        : [...prev.primary_interest, interest];

      const error = validateField('primary_interest', newInterests);
      setErrors((prevErrors) => ({ ...prevErrors, primary_interest: error }));

      return { ...prev, primary_interest: newInterests };
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      first_name: validateField('first_name', formData.first_name),
      last_name: validateField('last_name', formData.last_name),
      business_email: validateField('business_email', formData.business_email),
      company_name: validateField('company_name', formData.company_name),
      primary_interest: validateField('primary_interest', formData.primary_interest),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-readiness`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
      } else {
        setGeneralError(
          'Something went wrong. Please try again or email support@performacentric.com.'
        );
      }
    } catch (error) {
      console.error('Submission error:', error);
      setGeneralError(
        'Something went wrong. Please try again or email support@performacentric.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-[#1a7f8e] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-center">
          <div className="mb-6">
            <img
              className="w-[150px] h-auto mx-auto mb-6"
              alt="Logo"
              src="/Transparent Logo.png"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
            You're booked in.
          </h2>
          <p className="text-lg text-gray-600 mb-8 [font-family:'Manrope',Helvetica]">
            A Performacentric strategist will reach out within one business day to schedule your workshop.
          </p>
          <Button
            onClick={handleBackToHome}
            className="bg-[#076476] hover:bg-[#065a6a] text-white font-bold text-lg rounded-md h-14 px-12 [font-family:'Manrope',Helvetica]"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a7f8e] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-4xl w-full">
        <div className="text-center mb-8">
          <img
            className="w-[150px] h-auto mx-auto mb-6"
            alt="Logo"
            src="/Transparent Logo.png"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
            Let's help your organization become AI-ready
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-4 [font-family:'Manrope',Helvetica] leading-relaxed">
            This workshop will help your company identify automation opportunities to create a more intelligent, performance-driven organization.
          </p>
          <p className="text-sm text-gray-500 [font-family:'Manrope',Helvetica]">
            Complete the form below, and our team will be in touch to help you make the most of your demo.
          </p>
        </div>

        {generalError && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-6 text-sm [font-family:'Manrope',Helvetica]">
            {generalError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 [font-family:'Manrope',Helvetica]">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                placeholder="John"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#076476] focus:border-transparent outline-none transition-all [font-family:'Manrope',Helvetica]"
              />
              {errors.first_name && (
                <p className="text-red-500 text-xs mt-1 [font-family:'Manrope',Helvetica]">{errors.first_name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 [font-family:'Manrope',Helvetica]">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                placeholder="Smith"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#076476] focus:border-transparent outline-none transition-all [font-family:'Manrope',Helvetica]"
              />
              {errors.last_name && (
                <p className="text-red-500 text-xs mt-1 [font-family:'Manrope',Helvetica]">{errors.last_name}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 [font-family:'Manrope',Helvetica]">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="business_email"
              value={formData.business_email}
              onChange={handleInputChange}
              placeholder="john@yourcompany.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#076476] focus:border-transparent outline-none transition-all [font-family:'Manrope',Helvetica]"
            />
            {errors.business_email && (
              <p className="text-red-500 text-xs mt-1 [font-family:'Manrope',Helvetica]">{errors.business_email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 [font-family:'Manrope',Helvetica]">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
              placeholder="Your Company Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#076476] focus:border-transparent outline-none transition-all [font-family:'Manrope',Helvetica]"
            />
            {errors.company_name && (
              <p className="text-red-500 text-xs mt-1 [font-family:'Manrope',Helvetica]">{errors.company_name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3 [font-family:'Manrope',Helvetica]">
              I'm most interested in… <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {interestOptions.map((option) => (
                <label key={option} className="flex items-start cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.primary_interest.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="w-5 h-5 text-[#076476] border-gray-300 rounded focus:ring-2 focus:ring-[#076476] mt-0.5 cursor-pointer"
                  />
                  <span className="ml-3 text-sm text-gray-700 [font-family:'Manrope',Helvetica] group-hover:text-gray-900">
                    {option}
                  </span>
                </label>
              ))}
            </div>
            {errors.primary_interest && (
              <p className="text-red-500 text-xs mt-2 [font-family:'Manrope',Helvetica]">{errors.primary_interest}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 [font-family:'Manrope',Helvetica]">
              What's going on in your business right now?
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Example: We're missing SLA targets on support tickets and it's killing customer satisfaction."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#076476] focus:border-transparent outline-none transition-all resize-none [font-family:'Manrope',Helvetica]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 [font-family:'Manrope',Helvetica]">
              How did you hear about Performacentric?
            </label>
            <input
              type="text"
              name="heard_about_us"
              value={formData.heard_about_us}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#076476] focus:border-transparent outline-none transition-all [font-family:'Manrope',Helvetica]"
            />
          </div>

          <input
            type="text"
            name="website_url"
            value={formData.website_url}
            onChange={handleInputChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#076476] hover:bg-[#065a6a] text-white font-bold text-lg rounded-md h-14 disabled:opacity-50 disabled:cursor-not-allowed [font-family:'Manrope',Helvetica] transition-all"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
