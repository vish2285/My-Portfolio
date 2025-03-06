import React from 'react';
import "./custom.css"

const StarAnimation = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-white rounded-full absolute animate-star star"
            style={{
              animationDuration: `${Math.random() * 4 + 2}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
              '--x': `${Math.random() * 300 - 150}px`,
              '--y': `${Math.random() * 300 - 150}px`,
            }}
          ></div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center h-full text-white z-10">
        <p className="text-3xl font-bold animate-fade-in-out">I Build Experiences for Users.</p>
        <p className="text-2xl font-bold animate-fade-in-out">like this</p>
        <div className="mt-4 text-lg animate-bounce">⬇</div>
      </div>
    </div>
  );
};

export default StarAnimation;
