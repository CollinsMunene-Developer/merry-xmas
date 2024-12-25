import { profile } from '@/public/images/images';
import Image from 'next/image';
import React from 'react';

const HeaderComponent = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image className='rounded-full border-green-600 border-2'  src={profile}  alt='profile' width={60} height={60}  />
        <div className="text-2xl font-bold">
          Collins Munene
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/inbox" className="hover:text-gray-400">Inbox</a>
          <a href="/Profile" className="hover:text-gray-400">Profile</a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
