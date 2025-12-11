'use client';

import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function BadasPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col">
      {/* Back button */}
      <button
        onClick={handleBack}
        className="absolute top-8 left-8 z-50 text-white hover:text-gray-300 transition-colors font-inter text-sm"
      >
        ← Back
      </button>

      {/* User button */}
      <div className="absolute top-8 right-8 z-50">
        <UserButton afterSignOutUrl="/" />
      </div>

      {/* Full screen iframe */}
      <div className="flex-1 flex items-center justify-center">
        <iframe
          src="https://lab.anam.ai/frame/2N1b7r2UJ4VyWuAAZiDWR"
          className="w-full h-full"
          allow="microphone"
        />
      </div>
    </div>
  );
}
