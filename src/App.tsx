import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { OnboardingFrame } from './components/OnboardingFrame';
import { SignUpForm } from './components/auth/SignUpForm';
import { SignInForm } from './components/auth/SignInForm';
import { DashboardFrame } from './components/dashboard/DashboardFrame';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const [currentFrame, setCurrentFrame] = useState<'onboarding' | 'signUp' | 'signIn' | 'dashboard'>('onboarding');
  const { signUp, signIn, user } = useAuth();

  const handleStart = () => {
    setCurrentFrame('signUp');
  };

  const handleSignUp = async (data: { name: string; email: string; password: string }) => {
    await signUp(data);
    setCurrentFrame('dashboard');
  };

  const handleSignIn = async (data: { email: string; password: string }) => {
    await signIn(data);
    setCurrentFrame('dashboard');
  };

  return (
    <Layout>
      {currentFrame === 'onboarding' && (
        <OnboardingFrame onStart={handleStart} />
      )}
      {currentFrame === 'signUp' && (
        <div className="h-full flex flex-col items-center justify-center p-6 bg-gray-900">
          <SignUpForm 
            onSignUp={handleSignUp}
            onSwitch={() => setCurrentFrame('signIn')}
          />
        </div>
      )}
      {currentFrame === 'signIn' && (
        <div className="h-full flex flex-col items-center justify-center p-6 bg-gray-900">
          <SignInForm
            onSignIn={handleSignIn}
            onSwitch={() => setCurrentFrame('signUp')}
          />
        </div>
      )}
      {currentFrame === 'dashboard' && <DashboardFrame user={user} />}
    </Layout>
  );
}