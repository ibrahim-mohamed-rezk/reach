import React, { useEffect, useRef, useState } from "react";

interface TickerItem {
  id: string | number;
  text: string;
}

interface ContinuousFlowingTickerProps {
  items?: TickerItem[];
  speed?: number; // Animation duration in seconds
  separator?: React.ReactNode;
  textColor?: string;
}

export default function MovingLineComponent({
  items = [
    { id: 1, text: "Breaking News" },
    { id: 2, text: "Market Updates" },
    { id: 3, text: "Technology Trends" },
    { id: 4, text: "Weather Forecast" },
    { id: 5, text: "Sports Results" },
    { id: 6, text: "Entertainment Headlines" },
  ],
  speed = 20,
  textColor = "text-white",
  separator = (
    <div className="w-[clamp(5px,0.72916vw,20px)] h-[clamp(5px,0.72916vw,20px)] origin-top-left rotate-[12.95deg] bg-orange-500 rounded-full flex-shrink-0" />
  ),
}: ContinuousFlowingTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [clones, setClones] = useState<number>(3); // Number of clones needed for smooth animation
  const [animationActive, setAnimationActive] = useState<boolean>(false);

  // Create the array with duplicated items
  const tickerItems: TickerItem[] = React.useMemo(() => {
    return Array(clones).fill(items).flat();
  }, [items, clones]);

  useEffect(() => {
    // Make sure the DOM is fully rendered
    const timeout = setTimeout(() => {
      if (containerRef.current && tickerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const tickerWidth = tickerRef.current.scrollWidth / clones;

        // Determine if we need more clones to fill the container completely
        const neededClones = Math.ceil((containerWidth * 2) / tickerWidth) + 1;
        if (neededClones > clones) {
          setClones(neededClones);
        }

        setAnimationActive(true);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [clones]);

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden" ref={containerRef}>
      <div
        ref={tickerRef}
        className="inline-flex whitespace-nowrap gap-4 md:gap-8 lg:gap-20"
        style={{
          animation: animationActive
            ? `continuousScroll ${speed}s linear infinite`
            : "none",
          willChange: "transform",
        }}
      >
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="w-fit flex justify-start items-center gap-4 md:gap-8 lg:gap-20"
          >
            {separator}
            <div
              className={`${textColor} text-[clamp(5px,1.5625vw,50px)] font-normal font-['Roboto'] uppercase flex-shrink-0`}
            >
              {item.text}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes continuousScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${100 / clones}%);
          }
        }
      `}</style>
    </div>
  );
}
