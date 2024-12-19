import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-screen max-w-md mx-auto bg-black">
      <div className="h-full w-full aspect-[9/16] mx-auto relative">
        {children}
      </div>
    </div>
  );
}