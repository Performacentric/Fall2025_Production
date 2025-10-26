import React, { useState } from 'react';
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

export const ImproveCustomerSatisfaction: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight [font-family:'Manrope',Helvetica]">
            Continuous Innovation for Happier Customers
          </h1>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
              Improve Customer<br />Satisfaction
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed [font-family:'Manrope',Helvetica]">
              Performacentric helps small and mid-market companies improve customer satisfaction by deploying AI-driven agents and data-connected workflows that make every customer interaction faster, smarter, and more personalized. The approach focuses on transforming the customer experience across every touchpoint- from marketing and sales to service and support- using automation, intelligence, and data integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
                Predictive & Anticipatory<br />Service
              </h3>
              <div className="space-y-4">
                <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                  Deliver personalized recommendations and solutions.
                </p>
                <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                  Predict product reorders or service renewals.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
                Omnichannel Case<br />Management
              </h3>
              <div className="space-y-4">
                <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                  Seamlessly follow the customer across channels without repetition.
                </p>
                <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                  AI-driven routing ensures the right agent, human or AI-, responds instantly.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
                Continuous Innovation
              </h3>
              <div className="space-y-4">
                <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                  Closed-loop feedback integrates back into service, marketing, and product teams.
                </p>
                <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                  Customer experience strategies evolve automatically as needs change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 px-4 bg-[#076476]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 [font-family:'Manrope',Helvetica]">
                Customer Satisfaction Workshop
              </h2>
              <p className="text-sm md:text-base mb-6 [font-family:'Manrope',Helvetica]">
                Discover how Performacentric can help introduce Continuous Innovation into your organization.
              </p>
              <p className="text-sm md:text-base mb-4 [font-family:'Manrope',Helvetica]">
                You'll learn about:
              </p>
              <ul className="space-y-2 text-sm md:text-base [font-family:'Manrope',Helvetica]">
                <li>• Predictive & Anticipatory Service</li>
                <li>• Omnichannel Case Management</li>
                <li>• Data-Driven Experience Monitoring</li>
                <li>• Continuous Customer Experience Improvement</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center [font-family:'Manrope',Helvetica]">
                Register Now
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#076476] text-sm [font-family:'Manrope',Helvetica]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#076476] text-sm [font-family:'Manrope',Helvetica]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#076476] text-sm [font-family:'Manrope',Helvetica]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#076476] hover:bg-[#065a6a] text-white font-bold text-sm rounded-md h-12 [font-family:'Manrope',Helvetica]"
                >
                  Register
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 px-4 bg-[#f5f5f5]">
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
