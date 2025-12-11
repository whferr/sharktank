'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigateToSharkSelection = () => {
    router.push('/sharks');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Hero Section */}
        <div className="text-center space-y-12 mb-24">
          <div className="flex justify-center mb-12">
            <Image 
              src="/logo.svg" 
              alt="Shark Tank Logo" 
              width={64} 
              height={64}
              className="opacity-90"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-black leading-none" style={{ fontFamily: '"Cal Sans", sans-serif' }}>
              Shark Tank AI
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto font-inter font-light">
              Get grilled by AI sharks before the real investors do.
            </p>
          </div>
          
          <button
            onClick={navigateToSharkSelection}
            className={cn(
              "inline-flex items-center gap-3 bg-black text-white",
              "font-medium text-base px-10 py-4 rounded-full",
              "transition-all duration-300",
              "hover:bg-gray-900 hover:gap-4",
              "font-inter mt-8"
            )}
          >
            Enter the fish tank
            <ArrowRight className="w-8 h-6" />
          </button>
        </div>

        {/* Sharks Image */}
        <div className="flex justify-center mt-20">
          <div className="relative w-full max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent z-10 pointer-events-none"></div>
            <Image 
              src="/sharks.png" 
              alt="Shark Tank Investors" 
              width={1200} 
              height={600}
              className="w-full h-auto grayscale opacity-80"
              priority
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-12 mt-16">
          <button className="text-gray-500 hover:text-black font-inter text-sm transition-colors">
            Use Cases
          </button>
          <button 
            onClick={navigateToSharkSelection}
            className="text-gray-500 hover:text-black font-inter text-sm transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
