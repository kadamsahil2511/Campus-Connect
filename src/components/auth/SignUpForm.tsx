import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import { Input } from '../shared/Input';

interface SignUpFormProps {
  onSignUp: (data: { name: string; email: string; password: string }) => void;
  onSwitch: () => void;
}

export function SignUpForm({ onSignUp, onSwitch }: SignUpFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignUp(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
      
      <Input
        icon={<User />}
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
      />

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
        type="submit"
        className="w-full py-3 bg-white text-black rounded-lg font-semibold 
                  hover:bg-gray-100 transition-colors"
      >
        Sign Up
      </button>

      <p className="text-center text-gray-400 text-sm">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitch}
          className="text-white hover:underline"
        >
          Sign In
        </button>
      </p>
    </form>
  );
}