import React from 'react';
import HeaderComponent from './components/Header';
import Image from 'next/image';

const ChristmasHomePage = () => {
  return (
    <div className="bg-gradient-to-b from-red-900 to-green-900 text-white min-h-screen">
      {/* Header */}
      <HeaderComponent />

      {/* Hero Section */}
      <section className="container mx-auto p-8 text-center">
        <h1 className="text-6xl font-extrabold mb-6 text-red-400 animate-spin">
          Merry Christmas! 🎄
        </h1>
        <p className="text-green-300 text-xl mb-8">
          Wishing you joy, peace, and happiness this festive season
        </p>
        <div className="text-3xl mb-4">
          🎅 🎁 ⛄
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg shadow-lg transform hover:scale-105 transition-transform">
          Spread Holiday Cheer
        </button>
      </section>

      {/* Holiday Message Section */}
      <section className="bg-white/10 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-300">Holiday Greetings</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center">
              <p className="text-xl text-green-300 mb-4">
                Dear Friends and Family,
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                May your Christmas be filled with the true miracles and meaning of this beautiful season. 
                I hope you feel all the joy and happiness this season has to offer. 
                Wishing you a very Merry Christmas and a blessed New Year!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Christmas Countdown */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-300">Christmas Spirit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm">
              <h3 className="text-xl font-bold text-green-300 mb-3">Share Joy</h3>
              <p className="text-gray-200">Spread happiness and cheer to everyone around you</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm">
              <h3 className="text-xl font-bold text-green-300 mb-3">Give Love</h3>
              <p className="text-gray-200">Show your love and appreciation to those who matter</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg text-center backdrop-blur-sm">
              <h3 className="text-xl font-bold text-green-300 mb-3">Create Memories</h3>
              <p className="text-gray-200">Make this Christmas unforgettable with precious moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Activities */}
      <section className="bg-white/10 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-red-300">Holiday Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Decorate the Tree 🎄",
              "Sing Carols 🎵",
              "Exchange Gifts 🎁",
              "Bake Cookies 🍪",
              "Build Snowman ⛄",
              "Hot Chocolate ☕",
              "Christmas Movies 🎬",
              "Family Dinner 🍽️"
            ].map((activity, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-lg text-center hover:bg-white/20 transition-colors">
                <p className="font-bold text-green-300">{activity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm py-6 text-center">
        <p className="text-green-300">
          Wishing you a Magical Christmas 2024! ✨
        </p>
        <p className="text-gray-300 text-sm mt-2">
          © {new Date().getFullYear()} Season's Greetings
        </p>
      </footer>
    </div>
  );
};

export default ChristmasHomePage;