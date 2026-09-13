"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

export default function Carousel({
  slides,
  intervalMs = 3000,
  className = "",
}: {
  slides: Slide[];
  intervalMs?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, intervalMs]);

  function goTo(i: number) {
    setIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((cur) => (cur + 1) % slides.length);
    }, intervalMs);
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 32rem, 100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5 sm:bottom-4">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-cream" : "w-1.5 bg-cream/50 hover:bg-cream/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
