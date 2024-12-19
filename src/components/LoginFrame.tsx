import React, { useState } from 'react';
import { Fingerprint, User, Lock } from 'lucide-react';

interface LoginFrameProps {
  onLogin: () => void;
}

export function LoginFrame({ onLogin }: LoginFrameProps) {
  const [usePassword, setUsePassword] = useState(false);

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-gray-900">
      <h2 className="text-2xl font-bold mb-8 text-white">Welcome Back</h2>

      {!usePassword ? (
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
            <Fingerprint className="w-16 h-16 text-white" />
          </div>
          <p className="text-gray-300 mb-4">Touch the fingerprint sensor</p>
          <button
            onClick={() => setUsePassword(true)}
            className="text-gray-300 text-sm hover:text-white"
          >
            Use password instead
          </button>
        </div>
      ) : (
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg 
                          text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                placeholder="Enter your username"
              />
              <User className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg 
                          text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
                placeholder="Enter your password"
              />
              <Lock className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <button
            onClick={() => setUsePassword(false)}
            className="text-gray-300 text-sm mb-4 block hover:text-white"
          >
            Use fingerprint instead
          </button>
        </div>
      )}

      <button
        onClick={onLogin}
        className="w-full max-w-sm py-3 bg-white text-black rounded-lg font-semibold mt-6 
                  hover:bg-gray-100 transition-colors"
      >
        Login
      </button>
    </div>
  );
}