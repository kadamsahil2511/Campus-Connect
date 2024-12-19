import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

export function Input({ icon, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg 
                  text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white"
      />
      <div className="absolute left-3 top-2.5 text-gray-400">
        {icon}
      </div>
    </div>
  );
}