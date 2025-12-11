'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

// Shark Tank investors
const sharks = [
  {
    id: 1,
    name: 'Mark Cuban',
    title: 'Tech Mogul',
    specialty: 'Technology & Sports',
    image: '/sharks/mark.png',
    personality: 'Direct, tech-savvy, loves innovation',
    description: 'Billionaire entrepreneur, owner of Dallas Mavericks',
    enabled: true
  },
  {
    id: 2,
    name: 'Barbara Corcoran',
    title: 'Real Estate Queen',
    specialty: 'Real Estate & Consumer Products',
    image: '/sharks/barbara.png',
    personality: 'Empathetic, people-focused, great with consumer brands',
    description: 'Built a $5B real estate empire from scratch',
    enabled: false
  },
  {
    id: 3,
    name: 'Kevin O\'Leary',
    title: 'Mr. Wonderful',
    specialty: 'Finance & Licensing',
    image: '/sharks/mr-wonderful.png',
    personality: 'Numbers-driven, brutal honesty, loves royalty deals',
    description: 'Financial expert focused on profitability',
    enabled: false
  },
  {
    id: 4,
    name: 'Lori Greiner',
    title: 'Queen of QVC',
    specialty: 'Retail & Product Innovation',
    image: '/sharks/laurie.png',
    personality: 'Product expert, retail genius, warm and encouraging',
    description: 'Created over 800 products, 120+ patents',
    enabled: false
  },
  {
    id: 5,
    name: 'Robert Herjavec',
    title: 'Cybersecurity Expert',
    specialty: 'Technology & Software',
    image: '/sharks/robert.png',
    personality: 'Supportive, tech-focused, immigrant success story',
    description: 'Built a cybersecurity empire, tech investor',
    enabled: false
  }
];

export default function SharksPage() {
  const router = useRouter();
  const [hoveredShark, setHoveredShark] = useState<number | null>(null);

  const handleSharkSelect = (sharkId: number, enabled: boolean) => {
    if (!enabled) return;
    router.push(`/chat/${sharkId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Image 
                src="/logo.svg" 
                alt="Shark Tank Logo" 
                width={40} 
                height={40}
                className="opacity-90"
              />
              <div>
                <h1 className="text-3xl font-bold text-black tracking-tight" style={{ fontFamily: '"Cal Sans", sans-serif' }}>
                  Choose Your Shark
                </h1>
                <p className="text-gray-500 text-sm font-inter font-light mt-1">
                  Select an investor to pitch your idea
                </p>
              </div>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>

      {/* Sharks Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {sharks.map((shark) => (
            <div
              key={shark.id}
              onClick={() => handleSharkSelect(shark.id, shark.enabled)}
              onMouseEnter={() => setHoveredShark(shark.id)}
              onMouseLeave={() => setHoveredShark(null)}
              className={cn(
                "group relative transition-all duration-300",
                shark.enabled ? "cursor-pointer hover:translate-y-[-8px]" : "cursor-not-allowed opacity-60"
              )}
            >
              {/* Tooltip for disabled sharks */}
              {!shark.enabled && hoveredShark === shark.id && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-xs font-inter whitespace-nowrap z-20 shadow-lg">
                  Already in a Shark Tank Pitch
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                    <div className="border-4 border-transparent border-t-black"></div>
                  </div>
                </div>
              )}

              <div className={cn(
                "flex flex-col items-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 h-full",
                shark.enabled && "hover:shadow-xl hover:border-gray-300"
              )}>
                {/* Shark Image */}
                {shark.image && (
                  <div className={cn(
                    "w-28 h-28 rounded-full overflow-hidden bg-gray-50 flex-shrink-0 ring-2 ring-gray-100 transition-all duration-300",
                    shark.enabled && "group-hover:ring-4 group-hover:ring-black/10"
                  )}>
                    <Image
                      src={shark.image}
                      alt={shark.name}
                      width={112}
                      height={112}
                      className={cn(
                        "w-full h-full object-cover transition-all duration-500",
                        shark.enabled ? "grayscale group-hover:grayscale-0 group-hover:scale-105" : "grayscale"
                      )}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 space-y-3 text-center">
                  {/* Name & Title */}
                  <div>
                    <h3 className="text-xl font-bold text-black font-inter mb-1 tracking-tight">
                      {shark.name}
                    </h3>
                    <p className="text-sm font-inter text-gray-600 font-medium">
                      {shark.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-500 font-inter leading-relaxed">
                    {shark.description}
                  </p>

                  {/* Specialty */}
                  <div className="text-xs text-gray-400 font-inter font-light">
                    {shark.specialty}
                  </div>
                </div>

                {/* CTA */}
                <div className={cn(
                  "flex items-center gap-2 text-black pt-2 transition-all duration-300 w-full justify-center",
                  shark.enabled && "group-hover:gap-3"
                )}>
                  <span className="text-sm font-semibold font-inter">Start Pitching</span>
                  <ChevronRight className={cn(
                    "w-4 h-4 transition-transform duration-300",
                    shark.enabled && "group-hover:translate-x-1"
                  )} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-400 font-inter font-light">
            Each shark has unique expertise and investment preferences
          </p>
        </div>
      </div>
    </div>
  );
}


