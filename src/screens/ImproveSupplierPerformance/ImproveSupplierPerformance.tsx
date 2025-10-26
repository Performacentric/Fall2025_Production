import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation } from '../../components/shared/Navigation';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';

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

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

export const ImproveSupplierPerformance: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setShowSuccess(true);
    setIsSubmitting(false);
    setFormData({ firstName: '', lastName: '', email: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center px-4 [font-family:'Manrope',Helvetica]">
          Continuous Innovation for Better Performing Suppliers
        </h1>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
            Improve Supplier<br />Performance
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed [font-family:'Manrope',Helvetica]">
            Performacentric helps small and mid-market companies improve supplier performance by using its ecosystem of agentic AI solutions to enhance visibility, accountability, and collaboration across the supply chain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
                Real-Time Supplier<br />Visibility
              </h3>
              <div className="space-y-4 text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                <p>Track on-time delivery, quality rates, cost variance, and fill rates automatically.</p>
                <p>Use predictive analytics to forecast which suppliers are at risk of underperformance.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
                AI-Driven Supplier Scoring<br />and Benchmarking
              </h3>
              <div className="space-y-4 text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                <p>Benchmark suppliers across dimensions such as cost, reliability, quality, and responsiveness.</p>
                <p>Generate automated improvement plans or recommendations.</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
                Predictive Supply Chain<br />Optimization
              </h3>
              <div className="space-y-4 text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                <p>Predict how supplier performance impacts production schedules and customer fulfillment.</p>
                <p>Model "what-if" scenarios for cost, lead time, or demand variability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 px-4" style={{ backgroundColor: '#076476' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 [font-family:'Manrope',Helvetica]">
                Supplier Performance Workshop
              </h2>
              <p className="mb-4 text-sm md:text-base [font-family:'Manrope',Helvetica]">
                Discover how Performacentric can help introduce Continuous Innovation into your organization.
              </p>
              <p className="mb-2 text-sm md:text-base [font-family:'Manrope',Helvetica]">You'll learn about:</p>
              <ul className="space-y-2 text-sm [font-family:'Manrope',Helvetica]">
                <li>• AI-Driven Supplier Scoring and Benchmarking</li>
                <li>• Intelligent Exception Management</li>
                <li>• Predictive Supply Chain Optimization</li>
                <li>• Strategic Supplier Relationship Management</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800 [font-family:'Manrope',Helvetica]">
                Register Now
              </h3>

              {showSuccess ? (
                <div className="text-center py-8">
                  <p className="text-green-600 font-semibold mb-4">Thank you for registering!</p>
                  <p className="text-gray-600 text-sm mb-6">We'll be in touch soon.</p>
                  <Button
                    onClick={() => setShowSuccess(false)}
                    className="bg-[#076476] hover:bg-[#065561] text-white"
                  >
                    Register Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#076476] text-sm [font-family:'Manrope',Helvetica]"
                  />

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#076476] text-sm [font-family:'Manrope',Helvetica]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#076476] text-sm [font-family:'Manrope',Helvetica]"
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#076476] hover:bg-[#065561] text-white py-3 text-base font-semibold disabled:opacity-50 [font-family:'Manrope',Helvetica]"
                  >
                    {isSubmitting ? 'Registering...' : 'Register'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 px-4 bg-white">
        <Separator className="mb-12" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="flex flex-col items-center md:items-start gap-6">
              <img
                className="w-[200px] h-[120px] object-contain"
                alt="Logo"
                src="/logo-1.png"
              />
              <Button
                onClick={() => navigate('/request-a-demo')}
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
          <p>Copyright © 2025 Performacentric, Incorporated<br className="md:hidden" /> All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#076476] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#076476] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
