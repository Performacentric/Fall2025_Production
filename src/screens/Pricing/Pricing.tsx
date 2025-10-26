import React from 'react';
import { Navigation } from '../../components/shared/Navigation';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { Gift, Rocket, Crown, Check } from 'lucide-react';

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

const pricingTiers = [
  {
    icon: Gift,
    name: 'Silver',
    description: 'Perfect for organizations just starting with AI',
    price: 749,
    features: [
      'Free AI Readiness Workshop',
      '1 AI Agent',
      'Performacentric University Access',
      'Customer Success Manager',
    ],
  },
  {
    icon: Rocket,
    name: 'Gold',
    description: 'Maximize profitability and efficiency',
    price: 1499,
    features: [
      'Free AI Readiness Workshop',
      '3 AI Agents',
      'Performacentric University Access',
      'Customer Success Manager',
    ],
  },
  {
    icon: Crown,
    name: 'Platinum',
    description: 'Continuous innovation with dedicated help',
    price: 3499,
    features: [
      'Free AI Readiness Workshop',
      'Unlimited AI Agents',
      'Enhanced Performacentric University Access',
      'Dedicated Customer Success Manager',
    ],
  },
];

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <section className="w-full py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-4 border-gray-300 rounded-2xl p-8 flex flex-col shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-6">
                    <Icon className="w-10 h-10 mb-4" strokeWidth={2} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 [font-family:'Manrope',Helvetica]">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-gray-600 [font-family:'Manrope',Helvetica]">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900 [font-family:'Manrope',Helvetica]">
                        ${tier.price}
                      </span>
                      <span className="text-gray-600 ml-1 [font-family:'Manrope',Helvetica]">
                        /month
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#076476] hover:bg-[#065561] text-white font-semibold py-6 mb-6 [font-family:'Manrope',Helvetica]">
                    Get Started
                  </Button>

                  <ul className="space-y-3 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm text-gray-700 [font-family:'Manrope',Helvetica]"
                      >
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="w-full py-12 px-4 bg-[#f5f5f5] mt-auto">
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
