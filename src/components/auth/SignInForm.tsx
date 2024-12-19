import React, { useState } from 'react';
import { Mail, Lock, Fingerprint } from 'lucide-react';
import { Input } from '../shared/Input';

interface SignInFormProps {
  onSignIn: (data: { email: string; password: string }) => void;
  onSwitch: () => void;
}

export function SignInForm({ onSignIn, onSwitch }: SignInFormProps) {
  const [usePassword, setUsePassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn(formData);
  };

  if (!usePassword) {
    return (
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>

      <Input
        icon={<Mail />}
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
      />

      <Input
        icon={<Lock />}
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
      />

      <button
        type="button"
        onClick={() => setUsePassword(false)}
        className="text-gray-300 text-sm block hover:text-white"
      >
        Use fingerprint instead
      </button>

      <button
        type="submit"
        className="w-full py-3 bg-white text-black rounded-lg font-semibold 
                  hover:bg-gray-100 transition-colors"
      >
        Sign In
      </button>

      <p className="text-center text-gray-400 text-sm">
        Don't have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-white hover:underline"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
}