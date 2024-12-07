import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ backgroundImage: 'url(/background-v1.jpeg)' }}
      className='bg-cover bg-center bg-no-repeat text-gray-700 opacity-80'
    >
      <div className='flex min-h-screen flex-col items-center justify-center py-2'>
        {children}
      </div>
    </div>
  );
}
