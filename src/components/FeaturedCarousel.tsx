'use client';
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";

export default function FeaturedCarousel() {
  const { projects, loading } = useProjects();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const featuredProjects = projects
    .filter((p) => p.is_featured)
    .sort((a, b) => a.display_order - b.display_order);

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === featuredProjects.length - 1 ? 0 : current + 1));
  }, [featuredProjects.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? featuredProjects.length - 1 : current - 1));
  }, [featuredProjects.length]);


  // Mobile swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) nextSlide(); // Swipe left
    if (distance < -50) prevSlide(); // Swipe right
    
    setTouchStart(null);
  };

  if (loading) return (
    <div className="w-full flex-1 min-h-[350px] rounded-xl border border-border bg-card animate-pulse flex items-center justify-center">
      <p className="text-sm text-muted-foreground">Loading highlights...</p>
    </div>
  );

  if (featuredProjects.length === 0) return null;

  return (
    <div
      className="group relative w-full flex-1 min-h-[350px] rounded-xl overflow-hidden border border-border"
      style={{ background: "hsl(var(--card))" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {featuredProjects.map((project, i) => (
        <div
          key={project.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {project.gif_url ? (
            <img
              src={project.gif_url}
              alt={project.title}
              className="w-full h-full object-contain"
              loading={i === activeIndex ? "eager" : "lazy"}
            />
          ) : (
            <Image
              src={project.images?.[0] || "/placeholder.png"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
              priority={i === activeIndex}
            />
          )}

          <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none"
               style={{ background: "linear-gradient(to top, hsl(var(--card)) 0%, transparent 100%)" }}>
            <p className="text-[0.65rem] uppercase tracking-widest font-bold mb-1 opacity-70">
              {project.tags[0] || "Featured"}
            </p>
            <p className="text-base font-bold">
              {project.title}
            </p>
          </div>
        </div>
      ))}


      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/40 hover:bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
        aria-label="Previous highlight"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-background/40 hover:bg-background/80 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
        aria-label="Next highlight"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-6 right-6 z-30 flex gap-1.5">
        {featuredProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === activeIndex ? "w-6 bg-foreground" : "w-1.5 bg-foreground/20"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}