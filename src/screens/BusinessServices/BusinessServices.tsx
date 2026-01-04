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

export const BusinessServices: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center px-4 [font-family:'Manrope',Helvetica]">
          Performacentric Business Services
        </h1>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center [font-family:'Manrope',Helvetica]">
            Improve Profitability
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-12 mb-16">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[350px] h-[250px] lg:h-[300px] relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed [font-family:'Manrope',Helvetica]">
                Performacentric helps business services organizations improve profitability by deploying AI-driven agents, analytics, and process automation across every profit-lever of their operation - from pricing and utilization to team retention and resource allocation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                    AI-Powered Client Intelligence
                  </h3>
                  <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                    <p>• Analyze historical engagement and project data to identify the most profitable client segments and services.</p>
                    <p>• Recommend which clients should receive capacity expansion opportunities, or strategic investment.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                    Dynamic Pricing and Profitability Modeling
                  </h3>
                  <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                    <p>• Automatically optimize rates for service complexity, and client behavior to recommend optimal pricing for each project (e.g., retainer, performance-based, subscription).</p>
                    <p>• Simulate how pricing changes affect utilization rates, margin, and retention.</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                    Cross-Sell/Up-Sell Propensity Modeling
                  </h3>
                  <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                    <p>• Predict when existing clients are most likely to purchase additional services.</p>
                    <p>• Automatically trigger campaigns or account manager alerts via integrated marketing automation tools.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_350px] gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                Smart Workflow Automation
              </h3>
              <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                <p>• Identify repetitive, low-value administrative tasks (e.g., time sheet reminders, invoice reconciliation) and automates them across systems.</p>
                <p>• Reduce manual re-entry, delays, and human error.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
                AI Resource Optimization
              </h3>
              <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                <p>• Balance workloads and skill sets across active projects to maximize utilization.</p>
                <p>• Identify under- or over- assigned resources, forecast capacity over time, and recommend hiring or subcontracting only when necessary.</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[350px] h-[250px] lg:h-full relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Predictive Scheduling"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold text-center px-4 [font-family:'Manrope',Helvetica]">
                    Predictive Scheduling
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 text-center [font-family:'Manrope',Helvetica]">
              Predictive Scheduling
            </h3>
            <div className="space-y-3 text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
              <p>• Use historical delivery data and upcoming project pipelines to predict capacity needs and prevent bottlenecks before they occur.</p>
              <p>• Align staffing with demand, reducing idle time and overtime costs.</p>
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
