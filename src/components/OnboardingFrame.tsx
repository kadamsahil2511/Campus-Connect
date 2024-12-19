import React from 'react';
import { Fingerprint, BookOpen } from 'lucide-react';

interface OnboardingFrameProps {
  onStart: () => void;
}

export function OnboardingFrame({ onStart }: OnboardingFrameProps) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="flex items-center justify-center w-24 h-24 bg-gray-800 rounded-full mb-8 border border-gray-700">
        <BookOpen className="w-12 h-12 text-white" />
      </div>
      
      <h1 className="text-3xl font-bold mb-2">Campus Connect</h1>
      <p className="text-lg mb-12 text-center text-gray-300">
        Attend classes, connect with campus life
      </p>

      <div className="flex flex-col items-center">
        <Fingerprint className="w-16 h-16 mb-4 text-gray-300" />
        <p className="text-sm text-center mb-8 text-gray-400">
          Secure attendance with fingerprint authentication
        </p>
        <button
          onClick={onStart}
          className="px-8 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}