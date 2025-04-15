
import React from "react";

const FallbackBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute top-0 left-0 w-full h-full">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-100/50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              filter: "blur(50px)",
              opacity: 0.3 + Math.random() * 0.3,
              animation: `pulse ${5 + Math.random() * 5}s infinite alternate ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FallbackBackground;
