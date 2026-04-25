"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/LCRA-ezgif.com-optimize.gif",
    label: "Robotics",
    title: "Low-Cost Robotic Arm",
  },
  {
    src: "/actuaid.gif",  // <--- HERE IS THE CULPRIT
    label: "Soft Robotics",
    title: "ActuAid",
  },
  {
    src: "/mamalona.gif",
    label: "Controls",
    title: "PID Controlled Car",
  },
  {
    src: "/elles.gif",
    label: "Robotics",
    title: "Project Elles",
  },
  {
    src: "/handlego.gif",
    label: "Robotics",
    title: "The Hand",
  }
];

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { root: container, threshold: 0.6 }
    );

    container.querySelectorAll("[data-index]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full">
      {/* Scroll container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            data-index={i}
            className="relative h-screen w-full snap-start snap-always overflow-hidden"
          >
            {/* Background media */}
            <div className="absolute inset-0">
              {slide.src.endsWith(".gif") || slide.src.endsWith(".mp4") ? (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
            </div>

            {/* Text */}
            <div className="absolute bottom-16 left-8 md:left-16 z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-2 font-mono">
                {slide.label}
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-none">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Dot nav */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              containerRef.current
                ?.querySelectorAll("[data-index]")
                [i]?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint - fades out after first scroll */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 transition-opacity duration-500 pointer-events-none ${
          activeIndex > 0 ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-white/50 text-xs tracking-widest uppercase font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}