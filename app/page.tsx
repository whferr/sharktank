'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, LogOut, Mic, Send, Sparkles, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Shark Tank investors with image positions
const sharks = [
  {
    id: 1,
    name: 'Mark Cuban',
    title: 'Tech Mogul',
    specialty: 'Technology & Sports',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-400',
    personality: 'Direct, tech-savvy, loves innovation',
    description: 'Billionaire entrepreneur, owner of Dallas Mavericks'
  },
  {
    id: 2,
    name: 'Barbara Corcoran',
    title: 'Real Estate Queen',
    specialty: 'Real Estate & Consumer Products',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-200',
    hoverBorder: 'hover:border-pink-400',
    personality: 'Empathetic, people-focused, great with consumer brands',
    description: 'Built a $5B real estate empire from scratch'
  },
  {
    id: 3,
    name: 'Kevin O\'Leary',
    title: 'Mr. Wonderful',
    specialty: 'Finance & Licensing',
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    borderColor: 'border-red-200',
    hoverBorder: 'hover:border-red-400',
    personality: 'Numbers-driven, brutal honesty, loves royalty deals',
    description: 'Financial expert focused on profitability'
  },
  {
    id: 4,
    name: 'Lori Greiner',
    title: 'Queen of QVC',
    specialty: 'Retail & Product Innovation',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-200',
    hoverBorder: 'hover:border-purple-400',
    personality: 'Product expert, retail genius, warm and encouraging',
    description: 'Created over 800 products, 120+ patents'
  },
  {
    id: 5,
    name: 'Daymond John',
    title: 'The People\'s Shark',
    specialty: 'Fashion & Branding',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    hoverBorder: 'hover:border-emerald-400',
    personality: 'Brand builder, streetwear expert, motivational',
    description: 'FUBU founder, branding and marketing genius'
  },
  {
    id: 6,
    name: 'Robert Herjavec',
    title: 'Cybersecurity Expert',
    specialty: 'Technology & Software',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-200',
    hoverBorder: 'hover:border-cyan-400',
    personality: 'Supportive, tech-focused, immigrant success story',
    description: 'Built a cybersecurity empire, tech investor'
  }
];

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedShark, setSelectedShark] = useState<typeof sharks[0] | null>(null);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'shark', content: string }>>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleSharkSelect = (shark: typeof sharks[0]) => {
    setSelectedShark(shark);
    setMessages([
      {
        role: 'shark',
        content: `Hi! I'm ${shark.name}. ${shark.personality}. Tell me about your business idea!`
      }
    ]);
  };

  const handleBackToSelection = () => {
    setSelectedShark(null);
    setMessages([]);
    setInputMessage('');
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { role: 'user', content: inputMessage }]);
      setInputMessage('');
      
      // Placeholder for AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'shark', 
          content: 'This is where the AI response will appear when integrated with Eleven Labs!' 
        }]);
      }, 1000);
    }
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          {/* Hero Section */}
          <div className="text-center space-y-8 mb-16">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl"></div>
                <Image 
                  src="/logo.svg" 
                  alt="Shark Tank Logo" 
                  width={80} 
                  height={80}
                  className="relative"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" style={{ fontFamily: '"Cal Sans", sans-serif' }}>
                Shark Tank AI
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-inter">
                Get grilled by AI sharks before the real investors do.
              </p>
            </div>
            
            <button
              onClick={handleLogin}
              className={cn(
                "inline-flex items-center gap-2 bg-black text-white",
                "font-semibold text-lg px-8 py-4 rounded-full",
                "transition-all duration-200",
                "hover:scale-105 hover:shadow-lg",
                "active:scale-95",
                "font-inter"
              )}
            >
              Enter the fish tank
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Sharks Image */}
          <div className="flex justify-center mt-16">
            <div className="relative w-full max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
              <Image 
                src="/sharks.png" 
                alt="Shark Tank Investors" 
                width={1200} 
                height={600}
                className="w-full h-auto rounded-2xl border border-gray-200 shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-8 mt-12">
            <button className="text-gray-600 hover:text-gray-900 font-medium font-inter transition-colors">
              Use Cases
            </button>
            <button 
              onClick={handleLogin}
              className="text-gray-600 hover:text-gray-900 font-medium font-inter transition-colors"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Shark Selection Screen
  if (!selectedShark) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image 
                  src="/logo.svg" 
                  alt="Shark Tank Logo" 
                  width={48} 
                  height={48}
                />
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: '"Cal Sans", sans-serif' }}>
                    Choose Your Shark
                  </h1>
                  <p className="text-gray-600 text-sm font-inter">
                    Select an investor to pitch your idea
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className={cn(
                  "inline-flex items-center gap-2",
                  "border border-gray-200 bg-white",
                  "hover:bg-gray-50",
                  "px-4 py-2 rounded-lg",
                  "transition-colors font-inter text-sm"
                )}
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </div>

        {/* Sharks Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sharks.map((shark) => (
              <div
                key={shark.id}
                onClick={() => handleSharkSelect(shark)}
                className={cn(
                  "group relative bg-white rounded-2xl overflow-hidden",
                  "cursor-pointer transition-all duration-300",
                  "border-2",
                  shark.borderColor,
                  shark.hoverBorder,
                  "hover:shadow-2xl hover:scale-[1.02]",
                  "active:scale-[0.98]"
                )}
              >
                {/* Gradient Header */}
                <div className={cn(
                  "h-2 bg-gradient-to-r transition-all duration-300",
                  shark.color
                )}></div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Avatar Circle */}
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center",
                    "text-3xl font-bold transition-all duration-300",
                    "group-hover:scale-110",
                    shark.bgColor
                  )}>
                    <span className={shark.textColor}>
                      {shark.name.charAt(0)}
                    </span>
                  </div>

                  {/* Name & Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 font-inter mb-1">
                      {shark.name}
                    </h3>
                    <p className={cn("text-sm font-semibold font-inter", shark.textColor)}>
                      {shark.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 font-inter leading-relaxed">
                    {shark.description}
                  </p>

                  {/* Specialty Badge */}
                  <div className={cn(
                    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
                    shark.bgColor,
                    shark.textColor
                  )}>
                    {shark.specialty}
                  </div>

                  {/* CTA Button */}
                  <button className={cn(
                    "w-full mt-4 inline-flex items-center justify-between",
                    "bg-gray-900 text-white",
                    "font-semibold py-3 px-5 rounded-xl",
                    "transition-all duration-200",
                    "group-hover:bg-gray-800 group-hover:shadow-lg",
                    "font-inter"
                  )}>
                    <span>Start Pitching</span>
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100",
                  "bg-gradient-to-br pointer-events-none transition-opacity duration-300",
                  shark.color,
                  "opacity-[0.03]"
                )}></div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 font-inter">
              💡 Each shark has unique expertise and investment preferences. Choose wisely!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Chat Screen
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className={cn(
        "bg-gradient-to-r border-b border-gray-200",
        "text-white p-6 shadow-sm",
        selectedShark.color
      )}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToSelection}
              className={cn(
                "bg-white/20 hover:bg-white/30 backdrop-blur-sm",
                "p-2 rounded-lg transition-colors font-inter"
              )}
            >
              ← Back
            </button>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
              {selectedShark.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold font-inter">{selectedShark.name}</h2>
              <p className="text-sm opacity-90 font-inter">{selectedShark.title}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-sm font-inter flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Voice Active
            </span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 max-w-6xl w-full mx-auto p-6 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={cn(
                "max-w-xl rounded-2xl p-4 shadow-sm border",
                message.role === 'user'
                  ? 'bg-black text-white border-gray-800'
                  : 'bg-gray-50 text-gray-900 border-gray-200'
              )}
            >
              <p className="text-sm font-semibold mb-1 opacity-75 font-inter">
                {message.role === 'user' ? 'You' : selectedShark.name}
              </p>
              <p className="font-inter">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex space-x-3">
            <button className={cn(
              "bg-gradient-to-r from-red-500 to-red-600",
              "hover:from-red-600 hover:to-red-700",
              "text-white p-4 rounded-xl transition-all shadow-sm",
              "hover:shadow-md active:scale-95",
              "font-inter inline-flex items-center gap-2"
            )}>
              <Mic className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your pitch or question..."
              className={cn(
                "flex-1 border border-gray-200 bg-white",
                "rounded-xl px-6 py-4",
                "focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2",
                "transition-all font-inter placeholder:text-gray-400"
              )}
            />
            <button
              onClick={handleSendMessage}
              className={cn(
                "bg-black hover:bg-gray-900 text-white",
                "px-8 py-4 rounded-xl font-semibold",
                "transition-all shadow-sm hover:shadow-md active:scale-95",
                "font-inter inline-flex items-center gap-2"
              )}
            >
              Send
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4 font-inter">
            💡 Tip: Be clear about your business model, target market, and what you're asking for!
          </p>
        </div>
      </div>
    </div>
  );
}
