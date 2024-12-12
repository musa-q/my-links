import React from 'react';

const MonogramAvatar = ({ name = "MQ" }) => {
  return (
    <div className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-blue-700 bg-blue-900 flex items-center justify-center">
      <span className="text-4xl font-serif font-bold text-blue-200 select-none">
        {name.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
};

export default MonogramAvatar;