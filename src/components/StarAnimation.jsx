import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Globe from "react-globe.gl";

const StarAnimation = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    const globe = globeRef.current;
    if (globe) {
      globe.controls().enableZoom = false;
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="pt-24">
      <h1 className="text-2xl font-bold leading-tight md:text-4xl text-white z-10">
    I Build Experience For User, Like This
      </h1>
      </div>

      {/* 3D Spinning and Pulsing Globe */}
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="relative drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"
      >
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          backgroundColor="rgba(0,0,0,0)"
          arcsData={Array.from({ length: 20 }, () => ({
            startLat: Math.random() * 180 - 90,
            startLng: Math.random() * 360 - 180,
            endLat: Math.random() * 180 - 90,
            endLng: Math.random() * 360 - 180,
          }))}
          arcColor={() => "rgba(0, 255, 255, 0.8)"}
          arcDashLength={() => Math.random()}
          arcDashGap={() => Math.random()}
          arcDashAnimateTime={() => Math.random() * 5000 + 3000}
        />
      </motion.div>

      {/* Pulsing Light Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-cyan-500 rounded-full opacity-50"
          style={{ width: `${100 + i * 50}px`, height: `${100 + i * 50}px` }}
          animate={{ scale: [1, 2, 1], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default StarAnimation;