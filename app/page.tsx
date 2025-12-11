'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SignInButton, useAuth, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigateToSharkSelection = () => {
    router.push('/sharks');
  };

  // Don't render auth-dependent content until mounted and Clerk is loaded
  const showContent = mounted && isLoaded;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header with User Button */}
        <div className="absolute top-8 right-8">
          {showContent && isSignedIn && (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>

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
          
          <div className="mt-8">
            {!showContent ? (
              <button
                disabled
                className={cn(
                  "inline-flex items-center gap-3 bg-black text-white",
                  "font-medium text-base px-10 py-4 rounded-full",
                  "opacity-50 cursor-wait",
                  "font-inter"
                )}
              >
                Enter the fish tank
                <ArrowRight className="w-8 h-6" />
              </button>
            ) : isSignedIn ? (
              <button
                onClick={navigateToSharkSelection}
                className={cn(
                  "inline-flex items-center gap-3 bg-black text-white",
                  "font-medium text-base px-10 py-4 rounded-full",
                  "transition-all duration-300",
                  "hover:bg-gray-900 hover:gap-4",
                  "font-inter"
                )}
              >
                Enter the fish tank
                <ArrowRight className="w-8 h-6" />
              </button>
            ) : (
              <SignInButton mode="modal">
                <button
                  className={cn(
                    "inline-flex items-center gap-3 bg-black text-white",
                    "font-medium text-base px-10 py-4 rounded-full",
                    "transition-all duration-300",
                    "hover:bg-gray-900 hover:gap-4",
                    "font-inter"
                  )}
                >
                  Enter the fish tank
                  <ArrowRight className="w-8 h-6" />
                </button>
              </SignInButton>
            )}
          </div>
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
      </div>
    </div>
  );
}
