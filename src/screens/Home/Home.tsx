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

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight [font-family:'Manrope',Helvetica]">
              Make smarter decisions, faster.
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed [font-family:'Manrope',Helvetica]">
              Performacentric connects your people, processes, and data with AI-powered automation and real-time intelligence.
            </p>
            <Button
              onClick={() => navigate('/request-a-demo')}
              className="bg-[#076476] hover:bg-[#065a6a] text-white font-bold text-sm md:text-base rounded-[5px] shadow-[0px_4px_4px_#00000040] h-12 md:h-14 px-8 md:px-12 [font-family:'Manrope',Helvetica]"
            >
              See a Demo
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 [font-family:'Manrope',Helvetica]">
              Transform Every Part of Your Business
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto [font-family:'Manrope',Helvetica]">
              Deploy intelligent agents that analyze, predict, and automate across your entire operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#076476] rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 [font-family:'Manrope',Helvetica]">
                Improve Business Profitability
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed [font-family:'Manrope',Helvetica]">
                AI-driven pricing, resource optimization, and margin analysis to maximize every revenue opportunity.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#076476] rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 [font-family:'Manrope',Helvetica]">
                Improve Business Visibility & Data
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed [font-family:'Manrope',Helvetica]">
                Real-time dashboards and predictive analytics that surface insights from across your systems.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#076476] rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 [font-family:'Manrope',Helvetica]">
                Improve Employee Performance
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed [font-family:'Manrope',Helvetica]">
                Performance tracking, coaching recommendations, and automated workflow optimization.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#076476] rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 [font-family:'Manrope',Helvetica]">
                Improve Efficiency
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed [font-family:'Manrope',Helvetica]">
                Identify bottlenecks, automate repetitive tasks, and streamline operations across departments.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#076476] rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 [font-family:'Manrope',Helvetica]">
                Improve Customer Satisfaction
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed [font-family:'Manrope',Hepatica]">
                Predictive insights and automated responses that enhance every customer interaction.
              </p>
            </div>

            <div className="bg-[#f5f5f5] p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#076476] rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 [font-family:'Manrope',Helvetica]">
                Improve Supplier Performance
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed [font-family:'Manrope',Helvetica]">
                Monitor quality, track delivery performance, and optimize your supply chain relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 [font-family:'Manrope',Helvetica]">
              Industries We Serve
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto [font-family:'Manrope',Helvetica]">
              Tailored AI solutions for your specific industry challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all cursor-pointer group border-2 border-transparent hover:border-[#076476]">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#076476] transition-colors">
                <svg className="w-8 h-8 text-[#076476] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 [font-family:'Manrope',Helvetica]">
                Banking
              </h3>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all cursor-pointer group border-2 border-transparent hover:border-[#076476]">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#076476] transition-colors">
                <svg className="w-8 h-8 text-[#076476] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 [font-family:'Manrope',Helvetica]">
                Business Services
              </h3>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all cursor-pointer group border-2 border-transparent hover:border-[#076476]">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#076476] transition-colors">
                <svg className="w-8 h-8 text-[#076476] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 [font-family:'Manrope',Helvetica]">
                Distribution & Wholesale
              </h3>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all cursor-pointer group border-2 border-transparent hover:border-[#076476]">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#076476] transition-colors">
                <svg className="w-8 h-8 text-[#076476] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 [font-family:'Manrope',Helvetica]">
                Manufacturing
              </h3>
            </div>

            <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-all cursor-pointer group border-2 border-transparent hover:border-[#076476]">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#076476] transition-colors">
                <svg className="w-8 h-8 text-[#076476] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 [font-family:'Manrope',Helvetica]">
                Retail
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
            Ready to Transform Your Business?
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-8 max-w-2xl mx-auto [font-family:'Manrope',Helvetica]">
            See how Performacentric can help you make smarter decisions, faster.
          </p>
          <Button
            onClick={() => navigate('/request-a-demo')}
            className="bg-[#076476] hover:bg-[#065a6a] text-white font-bold text-sm md:text-base rounded-[5px] shadow-[0px_4px_4px_#00000040] h-12 md:h-14 px-8 md:px-12 [font-family:'Manrope',Helvetica]"
          >
            See a Demo
          </Button>
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
                src="/Transparent Logo.png"
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
            <a href="https://performacentric.com/privacy" className="hover:text-[#076476] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#076476] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
