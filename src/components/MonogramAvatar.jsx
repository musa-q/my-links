import React from 'react';

const MonogramAvatar = ({ name = "MQ" }) => {
  return (
    <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full mx-auto mb-6 transform transition-transform duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-full animate-pulse"></div>
      <div className="absolute inset-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center">
        <span className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent select-none">
          {name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div className="absolute inset-0 rounded-full shadow-xl shadow-blue-500/30"></div>
    </div>
  );
};

export default MonogramAvatar;