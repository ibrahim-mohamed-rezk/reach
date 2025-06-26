"use client";
import { useEffect, useState, useRef } from "react";
import FloatingImages from "./FloatingImages";
import { useTranslations } from "next-intl";

const Hero = () => {
  // Use refs for position and direction to avoid re-renders causing animation issues
  const positionRef = useRef({ left: 0, top: 0 });
  const directionRef = useRef({ x: 1, y: 1 });
  const [displayPosition, setDisplayPosition] = useState({ left: 0, top: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const t = useTranslations("about");

  useEffect(() => {
    // Set initial position within container bounds
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const elementWidth = Math.min(1807, containerRect.width * 0.42031);
      const elementHeight = Math.min(1700, containerRect.width * 0.36458);

      const initialLeft = Math.random() * (containerRect.width - elementWidth);
      const initialTop = Math.random() * (containerRect.height - elementHeight);

      positionRef.current = { left: initialLeft, top: initialTop };
      setDisplayPosition({ left: initialLeft, top: initialTop });
    }

    // Set random initial direction
    directionRef.current = {
      x: Math.random() > 0.5 ? 1 : -1,
      y: Math.random() > 0.5 ? 1 : -1,
    };

    // Animation function
    const animate = () => {
      if (!containerRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      // Element dimensions
      const elementWidth = Math.min(1807, containerWidth * 0.42031);
      const elementHeight = Math.min(1700, containerWidth * 0.36458);

      // Speed factor for animation
      const speed = 0.6;

      // Calculate new position
      let newLeft = positionRef.current.left + speed * directionRef.current.x;
      let newTop = positionRef.current.top + speed * directionRef.current.y;

      // Check boundary collision for horizontal movement
      if (newLeft >= containerWidth - elementWidth) {
        directionRef.current.x = -1; // Change direction to left
        newLeft = containerWidth - elementWidth; // Snap to boundary
      } else if (newLeft <= 0) {
        directionRef.current.x = 1; // Change direction to right
        newLeft = 0; // Snap to boundary
      }

      // Check boundary collision for vertical movement
      if (newTop >= containerHeight - elementHeight) {
        directionRef.current.y = -1; // Change direction to up
        newTop = containerHeight - elementHeight; // Snap to boundary
      } else if (newTop <= 0) {
        directionRef.current.y = 1; // Change direction to down
        newTop = 0; // Snap to boundary
      }

      // Update position ref
      positionRef.current = { left: newLeft, top: newTop };

      // Update display position to trigger re-render
      setDisplayPosition({ left: newLeft, top: newTop });

      // Continue animation loop
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center h-[clamp(300px,47.916667vw,2000px)] relative overflow-hidden heroContainer"
    >
      {/* animated orange shape */}
      <div className="w-full h-full top-0 left-0 absolute bg-white/0 overflow-hidden">
        <div
          className="w-[clamp(100px,42.031vw,1807px)] h-[clamp(90px,36.458vw,1700px)] absolute bg-gradient-to-l from-orange-500 to-orange-500/0"
          style={{
            left: `${displayPosition.left}px`,
            top: `${displayPosition.top}px`,
            transform: `translate(0, 0)`, // Forces hardware acceleration
            willChange: "left, top", // Optimization hint for browsers
          }}
        />
        <div className="w-full absolute left-0 top-0 h-full bg-black/30 backdrop-blur-[100px]" />
      </div>
      {/* fixed orange shape */}
      <div className="w-[clamp(100px,48.646vw,1934px)] h-[clamp(100px,48.646vw,1934px)] translate-x-[-50%]  right-0 md:left-1/2 top-1/2 md:top-[-7px] absolute opacity-50 bg-orange-500 rounded-full blur-[150px]" />
      {/* hero title */}
      <div className="w-full text-center relative justify-start text-white text-[clamp(10px,8vw,260px)] font-bold font-['Inter']">
        {t("heroTitle")}
      </div>
      <div className="w-full left-0 top-0 absolute">
        {/* Desktop view - original floating elements, hidden on mobile */}
        <FloatingImages />
      </div>
    </div>
  );
};

export default Hero;
