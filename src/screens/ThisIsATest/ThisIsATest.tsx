import React, { useEffect } from 'react';

export const ThisIsATest: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.textContent = "window.addEventListener('message',function(e){if(e.data.type==='redirect'&&e.data.url){window.location.href=e.data.url;}});";
    const target = document.head || document.body || document.documentElement;
    target.appendChild(script);

    return () => {
      target.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#076476] flex items-center justify-center p-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl max-w-[1000px] w-full p-8 md:p-12">
        <div className="text-center mb-8">
          <img
            className="h-16 md:h-20 object-contain mx-auto mb-6"
            alt="Logo"
            src="/Transparent Logo.png"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4 [font-family:'Manrope',Helvetica]">
            Let's schedule your demo.
          </h1>
          <p className="text-base md:text-lg text-[#555555] mb-2 [font-family:'Manrope',Helvetica]">
            We'll begin by learning more about your use case, and building a custom demo personalized to you.
          </p>
          <p className="text-sm text-[#777777] [font-family:'Manrope',Helvetica]">
            Complete the form below, and our team will be in touch to help you make the most of your demo.
          </p>
        </div>

        <iframe
          src="https://form.getformly.com/f/shMnz7"
          scrolling="yes"
          style={{ border: 0, maxWidth: '1000px', width: '100%', height: '1350px', overflow: 'hidden' }}
          title="Request Demo Form"
        />
      </div>
    </div>
  );
};
