'use client';

import { useState, useMemo } from 'react';
import { Check } from 'lucide-react';

const tabData = [
  {
    id: 'history',
    title: 'Our History',
    image: '/images/about/history-bg.png',
    content: {
      title: 'Rich 40-Year History',
      description: 'Since our establishment, we have built a legacy of excellence in the construction and industrial sectors. Our journey spans over four decades of delivering exceptional projects across Saudi Arabia, from petrochemical facilities to major infrastructure developments. We have grown from a small workshop to become one of the region\'s most trusted names in fabrication, machining, and valve repair services.'
    }
  },
  {
    id: 'quality',
    title: 'Our Quality',
    image: '/images/about/quality-bg.png',
    content: {
      title: 'Highest Standards',
      description: 'Quality is at the heart of everything we do. We maintain rigorous quality control processes and hold multiple international certifications including ISO 9001, ASME, and API standards. Our state-of-the-art facilities are equipped with advanced testing and inspection equipment, ensuring every project meets or exceeds industry standards. We employ highly skilled technicians and engineers who are committed to delivering flawless results.'
    }
  },
  {
    id: 'experience',
    title: 'Experience',
    image: '/images/about/experience-bg.png',
    content: {
      title: 'Over 40 Years',
      description: 'Our extensive experience covers a wide range of industrial sectors including oil & gas, petrochemicals, power generation, and infrastructure. We have successfully completed over 500 major projects for leading clients such as Saudi Aramco, SABIC, and other prominent organizations. This wealth of experience enables us to handle complex challenges with confidence and deliver innovative solutions that drive project success.'
    }
  }
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('history');

  const activeContent = useMemo(() =>
    tabData.find(tab => tab.id === activeTab),
    [activeTab]
  );

  return (
    <section className="pt-6 md:pt-8 lg:pt-10">
      <div className="grid md:grid-cols-2 gap-0 min-h-[400px] sm:min-h-[480px] md:min-h-[520px]">
        {/* Left Side - Tabs with Background Image */}
        <div className="relative min-h-[400px] sm:min-h-[480px] md:min-h-0 overflow-hidden">
          {/* Background Images with Cross-Fade */}
          {tabData.map((tab) => (
            <div
              key={tab.id}
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{
                backgroundImage: `url(${tab.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: activeTab === tab.id ? 1 : 0
              }}
            />
          ))}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Tabs */}
          <div className="relative z-10 flex flex-col justify-center h-full py-6 sm:py-8 space-y-1 sm:space-y-2" style={{ marginLeft: 'auto', width: 'fit-content', maxWidth: '100%' }}>
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="group flex items-center gap-3 md:gap-4 py-3 sm:py-4 md:py-6 pl-4 sm:pl-6 md:pl-10 pr-4 sm:pr-6 md:pr-10 text-left transition-all duration-300 touch-manipulation"
                style={{
                  backgroundColor: activeTab === tab.id ? 'rgba(245, 166, 35, 0.3)' : 'transparent',
                  minHeight: '60px'
                }}
              >
                {/* Check Icon Circle */}
                <div
                  className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                  style={{
                    borderColor: activeTab === tab.id ? '#f5f5f5' : '#f5a623'
                  }}
                >
                  <Check
                    className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300"
                    style={{ color: activeTab === tab.id ? '#f5f5f5' : '#f5a623' }}
                    strokeWidth={2.5}
                  />
                </div>

                {/* Tab Content */}
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-sm sm:text-base md:text-lg font-semibold tracking-wide transition-colors duration-300 leading-tight"
                    style={{
                      color: activeTab === tab.id ? '#f5f5f5' : '#f5a623'
                    }}
                  >
                    {tab.title}
                  </span>
                  <span
                    className="text-xs sm:text-xs md:text-sm font-normal transition-colors duration-300"
                    style={{
                      color: activeTab === tab.id ? '#f5f5f5' : '#f5a623'
                    }}
                  >
                    {tab.content.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div
          className="flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 min-h-[280px] sm:min-h-[320px] md:min-h-[200px]"
          style={{ backgroundColor: '#ffffff' }}
        >
          <p className="text-neutral-700 text-sm sm:text-base md:text-lg leading-relaxed">
            {activeContent.content.description}
          </p>
        </div>
      </div>
    </section>
  );
}
