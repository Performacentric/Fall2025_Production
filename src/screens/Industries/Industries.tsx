import React from 'react';
import { Navigation } from '../../components/shared/Navigation';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Banking',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/banking',
  },
  {
    title: 'Business Services',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/business-services',
  },
  {
    title: 'Distribution & Transportation',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/distribution',
  },
  {
    title: 'Manufacturing',
    image: 'https://images.pexels.com/photos/5635031/pexels-photo-5635031.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/manufacturing',
  },
  {
    title: 'Retail',
    image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '/retail',
  },
];

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

export const Industries: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="w-full py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cards.slice(0, 3).map((card, index) => (
              <Link
                key={index}
                to={card.link}
                className="group relative h-[280px] md:h-[320px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-8 [font-family:'Manrope',Helvetica]">
                    {card.title}
                  </h3>
                  <div className="bg-white text-[#076476] font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors [font-family:'Manrope',Helvetica] text-sm">
                    Learn More
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-4xl mx-auto">
            {cards.slice(3).map((card, index) => (
              <Link
                key={index + 3}
                to={card.link}
                className="group relative h-[280px] md:h-[320px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors"></div>
                </div>

                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-8 [font-family:'Manrope',Helvetica]">
                    {card.title}
                  </h3>
                  <div className="bg-white text-[#076476] font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors [font-family:'Manrope',Helvetica] text-sm">
                    Learn More
                  </div>
                </div>
              </Link>
            ))}
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
            Copyright © 2026 Performacentric, Incorporated
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
