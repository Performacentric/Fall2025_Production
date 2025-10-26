import React from 'react';
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

export const Banking: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center px-4 [font-family:'Manrope',Helvetica]">
          Performacentric Banking
        </h1>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-12 mb-16">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[350px] h-[250px] lg:h-[300px] relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Improve Profitability"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold [font-family:'Manrope',Helvetica]">
                    Improve Profitability
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
                Improve Profitability
              </h2>

              <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed [font-family:'Manrope',Helvetica]">
                Performacentric works with credit unions and community banks to improve profitability by introducing AI-driven automation that optimizes every layer of the banking value chain - from customer acquisition and service, superior risk management, and operational efficiency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                    AI Readiness & Customer Intelligence
                  </h3>
                  <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                    <p>• Customer 360 AI-Agent consolidates data from CRM, core systems, and digital channels to create real-time customer profiles.</p>
                    <p>• Empower sales and service personnel with cross-sell and up-sell recommendations for credit cards, loans, investment products based on life stage, behavior, and financial health.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                    Predictive Sales & Marketing
                  </h3>
                  <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                    <p>• Analyze branch, call center, and online interactions to predict churn and proactively retain high-value customers with personalized marketing outreach campaigns.</p>
                    <p>• Improve conversion rates by targeting the most profitable segments with the right product and offers.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                    Profitability & Portfolio Optimization
                  </h3>
                  <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                    <p>• Analyze contribution margins by product line (e.g., mortgages, checking accounts).</p>
                    <p>• Identify underperforming segments and automatically recommend pricing, fee structure, or divestiture strategies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                Proactive and Anticipatory Service
              </h3>
              <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                <p>• Detect behavioral or transactional patterns that signal future needs, such as upcoming loan renewals, unusual charges, or lifecycle events.</p>
                <p>• Your AI-agent prompts timely outreach, human, or automated with the right guidance to offer.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                Seamless Omnichannel Experience
              </h3>
              <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                <p>• Omnichannel Case Management ensures every customer receives the same high-quality service whether interacting via mobile app, branch, or call center.</p>
                <p>• AI interactions and cases are visible to every channel in real-time, eliminating the frustration of repeating information.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                Faster, Smarter Problem Resolution
              </h3>
              <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                <p>• AI Service Process Automation escalates complex handling loan approvals, and service requests using natural language understanding (NLU) and RPA automation.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 lg:gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
                Improve Customer Satisfaction
              </h2>

              <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed [font-family:'Manrope',Helvetica]">
                In banking, customer experience is a key competitive advantage. Performacentric helps credit unions and community banks deliver personalized, proactive service at every touchpoint by using AI to anticipate needs, resolve issues faster, and create seamless experiences across all channels.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[350px] h-[250px] lg:h-[300px] relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Improve Customer Satisfaction"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold text-center px-4 [font-family:'Manrope',Helvetica]">
                    Improve Customer<br />Satisfaction
                  </h3>
                </div>
              </div>
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
