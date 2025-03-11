import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setInnerPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    document.addEventListener("mousemove", moveCursor);

    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        className="fixed w-12 h-12 border-2 border-white rounded-full pointer-events-none mix-blend-difference transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
        }}
      />
      {/* Inner Circle */}
      <div
        className="fixed w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${innerPosition.x - 8}px, ${innerPosition.y - 8}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;