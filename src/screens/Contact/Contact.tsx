import React, { useState } from 'react';
import { Navigation } from '../../components/shared/Navigation';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
}

const whatWeDoItems = [
  'Improve Business Profitability',
  'Improve Business Visibility & Data Visualization',
  'Improve Employee Performance',
  'Improve Efficiency',
  'Improve Customer Satisfaction',
  'Improve Supplier Performance',
];

const industriesItems = [
  'Banking',
  'Business Services',
  'Distribution & Wholesale',
  'Manufacturing',
  'Retail',
];

const resourcesItems = [
  'Blog',
  'Datasheets',
  'Demo Videos',
  'Whitepapers',
  'Workshops',
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'first_name':
        return !value ? 'First name is required' : undefined;
      case 'last_name':
        return !value ? 'Last name is required' : undefined;
      case 'email':
        if (!value) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Invalid email format' : undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      first_name: validateField('first_name', formData.first_name),
      last_name: validateField('last_name', formData.last_name),
      email: validateField('email', formData.email),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-submission`;

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
        setFormData({ first_name: '', last_name: '', email: '' });
      } else {
        alert(`Error: ${result.error || 'Failed to submit contact form'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold [font-family:'Manrope',Helvetica]">
            Contact Performacentric
          </h1>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left [font-family:'Manrope',Helvetica]">
                Reach Out to Performacentric and Put Performance at the Center of Your Business
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-8 text-center lg:text-left leading-relaxed [font-family:'Manrope',Helvetica]">
                We're looking forward to speaking with you, and to showing you how using our Continuous Innovation framework, we help small and mid-market companies improve profitability and boost business performance.
              </p>
              <div className="text-center lg:text-left">
                <a
                  href="tel:855-479-4366"
                  className="text-4xl md:text-5xl font-bold text-gray-800 hover:text-[#076476] transition-colors [font-family:'Manrope',Helvetica]"
                >
                  855-479-4366
                </a>
              </div>
            </div>

            <div className="bg-[#f5f5f5] p-6 md:p-8 lg:p-10 rounded-lg">
              <p className="text-sm text-gray-600 mb-6 text-center [font-family:'Manrope',Helvetica]">
                For general inquiries, please fill out the form below, and we will follow up within 1 business day.
              </p>

              {showSuccess ? (
                <div className="bg-white p-8 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-[#076476] mb-4 [font-family:'Manrope',Helvetica]">
                    Thank you for contacting us!
                  </h3>
                  <p className="text-gray-600 mb-6 [font-family:'Manrope',Helvetica]">
                    We'll get back to you within 1 business day.
                  </p>
                  <Button
                    onClick={() => setShowSuccess(false)}
                    className="bg-[#076476] hover:bg-[#065a6a] text-white font-bold text-sm rounded-md h-12 px-8 [font-family:'Manrope',Helvetica]"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#076476] focus:border-transparent outline-none transition-all [font-family:'Manrope',Helvetica]"
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-xs mt-1 [font-family:'Manrope',Helvetica]">{errors.first_name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#076476] focus:border-transparent outline-none transition-all [font-family:'Manrope',Helvetica]"
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-xs mt-1 [font-family:'Manrope',Helvetica]">{errors.last_name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-[#076476] focus:border-transparent outline-none transition-all [font-family:'Manrope',Helvetica]"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 [font-family:'Manrope',Helvetica]">{errors.email}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#076476] hover:bg-[#065a6a] text-white font-bold text-base rounded-md h-14 disabled:opacity-50 disabled:cursor-not-allowed [font-family:'Manrope',Helvetica] transition-all"
                    >
                      {isSubmitting ? 'Submitting...' : 'Contact'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 px-4 bg-white mt-auto">
        <Separator className="mb-12" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="flex flex-col items-center md:items-start gap-6">
              <img
                className="w-[200px] h-[120px] object-contain"
                alt="Logo"
                src="/Transparent Logo.png"
              />
              <Button
                onClick={() => window.location.href = '/request-a-demo'}
                className="bg-[#076476] hover:bg-[#065a6a] text-white font-bold text-sm rounded-[5px] shadow-[0px_4px_4px_#00000040] h-12 px-8 [font-family:'Manrope',Helvetica]"
              >
                See a Demo
              </Button>
            </div>

            <div className="relative">
              <Separator
                orientation="vertical"
                className="absolute left-0 top-0 bottom-0 hidden md:block"
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pl-12">
                <nav className="flex flex-col">
                  <h3 className="[font-family:'Manrope',Helvetica] font-bold text-[#555555] text-base text-center md:text-left mb-6">
                    What We Do
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {whatWeDoItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="[font-family:'Manrope',Helvetica] font-normal text-[#555555] text-xs text-center md:text-left hover:text-[#076476] transition-colors block"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <nav className="flex flex-col">
                  <h3 className="[font-family:'Manrope',Helvetica] font-bold text-[#555555] text-base text-center md:text-left mb-6">
                    Industries
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {industriesItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="[font-family:'Manrope',Helvetica] font-normal text-[#555555] text-xs text-center md:text-left hover:text-[#076476] transition-colors block"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <nav className="flex flex-col">
                  <h3 className="[font-family:'Manrope',Helvetica] font-bold text-[#555555] text-base text-center md:text-left mb-6">
                    Resources
                  </h3>
                  <ul className="flex flex-col gap-4">
                    {resourcesItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="[font-family:'Manrope',Helvetica] font-normal text-[#555555] text-xs text-center md:text-left hover:text-[#076476] transition-colors block"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#555555] [font-family:'Manrope',Helvetica]">
          <p>Copyright © 2026 Performacentric, Incorporated<br className="md:hidden" /> All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#076476] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#076476] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
