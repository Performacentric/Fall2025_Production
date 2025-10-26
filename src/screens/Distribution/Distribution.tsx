import React from 'react';
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

export const Distribution: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/4481534/pexels-photo-4481534.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight [font-family:'Manrope',Helvetica]">
            Performacentric Distribution & Transportation
          </h1>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/7640432/pexels-photo-7640432.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Business meeting"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 [font-family:'Manrope',Helvetica]">
                Improve Profitability
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed [font-family:'Manrope',Helvetica]">
                Performacentric helps distribution and transportation companies improve profitability by using agentic
                AI systems that optimize operational efficiency, pricing strategy, customer value management, and
                asset utilization across the entire value chain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 [font-family:'Manrope',Helvetica]">
                Revenue Growth through Smart Customer Targeting
              </h3>
              <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                AI Sales Agents identify the most profitable customers and lanes based on margin and volume growth potential.
              </p>
              <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                Cross-Sell & Upsell Agents recommend complementary logistics or value-added services to existing customers (e.g., warehousing, expedited delivery).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 [font-family:'Manrope',Helvetica]">
                Asset and Route Optimization
              </h3>
              <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                Predict which vehicles or routes predict when vehicles or routes use equipment require servicing to prevent costly breakdowns.
              </p>
              <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                AI-optimized routing accounts for real-time traffic, weather, and fuel costs to plan the most profitable delivery sequences.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 [font-family:'Manrope',Helvetica]">
                Financial Visibility and Continuous Profitability Management
              </h3>
              <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                Integrate cost, operational, and revenue data into a unified profit intelligence dashboard.
              </p>
              <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                Continuous Innovation dashboards align financial and operational KPIs to ensure every initiative drives measurable profit gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 [font-family:'Manrope',Helvetica]">
                  Process Automation Across the Supply Chain
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 [font-family:'Manrope',Helvetica]">
                  Automate repetitive administrative tasks such as order entry, shipment tracking, billing, and proof-of-delivery reconciliation.
                </p>
                <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                  Intelligent Exception Handling detects process bottlenecks—like shipping delays or delayed status updates—and automatically resolves or escalates them.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 [font-family:'Manrope',Helvetica]">
                  Warehouse and Inventory Optimization
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 [font-family:'Manrope',Helvetica]">
                  AI Inventory Agents forecast demand by product, customer, and region, ensuring optimal stock levels.
                </p>
                <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                  Smart Warehouse Agents and Dashboards identify slow-moving items, congestion points, and labor inefficiencies.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 [font-family:'Manrope',Helvetica]">
                  Fleet and Asset Performance Optimization
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3 [font-family:'Manrope',Helvetica]">
                  Identify early signs of vehicle wear or service anomalies to schedule maintenance before breakdowns occur.
                </p>
                <p className="text-xs md:text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                  Track underutilized assets and redeploy them to where demand is highest.
                </p>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <img
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Warehouse operations"
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
                className="h-12 object-contain"
                alt="Logo"
                src="/Transparent Logo.png"
              />
              <Button className="bg-[#076476] hover:bg-[#065a6a] text-white font-bold text-sm rounded-[5px] shadow-[0px_4px_4px_#00000040] h-12 px-8 [font-family:'Manrope',Helvetica]">
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
          <p>
            Copyright © 2025 Performacentric, Incorporated
            <br className="md:hidden" /> All Rights Reserved
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#076476] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#076476] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
