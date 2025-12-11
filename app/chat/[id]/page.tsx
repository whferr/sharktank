'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useRouter, useParams } from 'next/navigation';
import { useConversation } from '@elevenlabs/react';
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
    description: 'Billionaire entrepreneur, owner of Dallas Mavericks'
  },
  {
    id: 2,
    name: 'Barbara Corcoran',
    title: 'Real Estate Queen',
    specialty: 'Real Estate & Consumer Products',
    image: '/sharks/barbara.png',
    personality: 'Empathetic, people-focused, great with consumer brands',
    description: 'Built a $5B real estate empire from scratch'
  },
  {
    id: 3,
    name: 'Kevin O\'Leary',
    title: 'Mr. Wonderful',
    specialty: 'Finance & Licensing',
    image: '/sharks/mr-wonderful.png',
    personality: 'Numbers-driven, brutal honesty, loves royalty deals',
    description: 'Financial expert focused on profitability'
  },
  {
    id: 4,
    name: 'Lori Greiner',
    title: 'Queen of QVC',
    specialty: 'Retail & Product Innovation',
    image: '/sharks/laurie.png',
    personality: 'Product expert, retail genius, warm and encouraging',
    description: 'Created over 800 products, 120+ patents'
  },
  {
    id: 5,
    name: 'Robert Herjavec',
    title: 'Cybersecurity Expert',
    specialty: 'Technology & Software',
    image: '/sharks/robert.png',
    personality: 'Supportive, tech-focused, immigrant success story',
    description: 'Built a cybersecurity empire, tech investor'
  }
];

export default function ChatPage() {
  const router = useRouter();
  const params = useParams();
  const sharkId = parseInt(params.id as string);
  
  const selectedShark = sharks.find(s => s.id === sharkId);
  const [loading, setLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [pitchMode, setPitchMode] = useState<'idle' | 'voice' | 'video'>('idle');

  // ElevenLabs Conversation Hook
  const conversation = useConversation({
    onConnect: () => {
      console.log('Connected to ElevenLabs agent');
      setIsConnecting(false);
    },
    onDisconnect: () => {
      console.log('Disconnected from ElevenLabs agent');
    },
    onMessage: (message) => {
      console.log('Received message:', message);
    },
    onError: (error) => {
      console.error('Conversation error:', error);
      const errorMessage = typeof error === 'string' ? error : (error as Error).message || 'Something went wrong';
      alert(`Error: ${errorMessage}`);
      setIsConnecting(false);
    },
    onModeChange: (mode) => {
      console.log('Mode changed to:', mode);
    },
  });

  useEffect(() => {
    setLoading(false);
  }, [selectedShark]);

  if (loading || !selectedShark) {
    return <div className="min-h-screen bg-white" />;
  }

  const handleBackToSelection = async () => {
    if (conversation.status === 'connected') {
      await conversation.endSession();
    }
    setPitchMode('idle');
    router.push('/sharks');
  };

  const handleStartVoicePitch = async () => {
    setIsConnecting(true);
    setPitchMode('voice');
    
    // Request microphone permission first
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (error) {
      console.error('Microphone permission denied:', error);
      alert('Please allow microphone access to start the conversation.');
      setIsConnecting(false);
      setPitchMode('idle');
      return;
    }

    try {
      // Start the conversation with the ElevenLabs agent
      const sessionConfig = {
        agentId: 'agent_8801kc79f6x7fkba7s9yd6ga14ng',
        connectionType: 'websocket' as const,
      };
      
      console.log('Starting session with config:', sessionConfig);
      await conversation.startSession(sessionConfig);
      console.log('Conversation started successfully');
    } catch (error: any) {
      console.error('Failed to start conversation:', error);
      alert(`Failed to start conversation: ${error.message || 'Unknown error'}. Please try again.`);
      setIsConnecting(false);
      setPitchMode('idle');
    }
  };

  const handleStartVideoPitch = () => {
    setPitchMode('video');
  };

  const handleEndPitch = async () => {
    if (pitchMode === 'voice') {
      try {
        await conversation.endSession();
        console.log('Conversation ended');
      } catch (error) {
        console.error('Error ending conversation:', error);
      }
    }
    setPitchMode('idle');
  };

  // Video pitch mode - full screen iframe
  if (pitchMode === 'video') {
    return (
      <div className="fixed inset-0 bg-black flex flex-col">
        {/* Back button */}
        <button
          onClick={handleEndPitch}
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
            src="https://lab.anam.ai/frame/M9jkYA65cfHFDTVOC5Wdb"
            className="w-full h-full"
            allow="microphone"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        {/* Back button */}
        <button
          onClick={handleBackToSelection}
          className="absolute top-8 left-8 text-gray-400 hover:text-black transition-colors font-inter text-sm"
        >
          ← Back
        </button>

        {/* User button */}
        <div className="absolute top-8 right-8">
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center space-y-12">
          {/* Shark Avatar */}
          {selectedShark.image && (
            <div className="relative">
              <div className={cn(
                "w-64 h-64 rounded-full overflow-hidden ring-2 transition-all duration-500",
                conversation.status === 'connected' ? 'ring-black' : 'ring-gray-200'
              )}>
                <Image
                  src={selectedShark.image}
                  alt={selectedShark.name}
                  width={256}
                  height={256}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-500",
                    conversation.status === 'connected' ? 'grayscale-0' : 'grayscale'
                  )}
                />
              </div>
              {conversation.status === 'connected' && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-xs font-inter">
                  Listening...
                </div>
              )}
            </div>
          )}

          {/* Shark Name */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-2" style={{ fontFamily: '"Cal Sans", sans-serif' }}>
              {selectedShark.name}
            </h1>
            <p className="text-gray-500 font-inter font-light">
              {selectedShark.title}
            </p>
          </div>

          {/* Pitch Buttons */}
          {pitchMode === 'idle' ? (
            <div className="flex gap-4">
              <button
                onClick={handleStartVoicePitch}
                disabled={isConnecting}
                className={cn(
                  "inline-flex items-center justify-center",
                  "font-medium text-base px-12 py-5 rounded-full",
                  "transition-all duration-300",
                  "font-inter shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                  "min-w-[200px]",
                  "bg-black text-white hover:bg-gray-800"
                )}
              >
                {isConnecting ? 'Connecting...' : 'Start Voice Pitch'}
              </button>
              <button
                onClick={handleStartVideoPitch}
                className={cn(
                  "inline-flex items-center justify-center",
                  "font-medium text-base px-12 py-5 rounded-full",
                  "transition-all duration-300",
                  "font-inter shadow-lg",
                  "min-w-[200px]",
                  "bg-black text-white hover:bg-gray-800"
                )}
              >
                Start Video Pitch
              </button>
            </div>
          ) : (
            <button
              onClick={handleEndPitch}
              className={cn(
                "inline-flex items-center justify-center",
                "font-medium text-base px-12 py-5 rounded-full",
                "transition-all duration-300",
                "font-inter shadow-lg",
                "min-w-[200px]",
                "bg-red-500 text-white hover:bg-red-600"
              )}
            >
              End Pitch
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

