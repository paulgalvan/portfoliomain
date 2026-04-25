'use client';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import NextImage from "next/image";
import { Project } from "@/hooks/useProjects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  isStatic?: boolean;
}

const ProjectCard = ({ project, index = 0, isStatic = false }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);

  const images = project.images || [];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClick = () => {
    if (isStatic) return;
    router.push(`/projects/${project.id}`);
  };

  const hasMedia = (project.images && project.images.length > 0) || project.gif_url;

  return (
    <article
      ref={cardRef}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="pg-card group"
      style={{ "--card-index": index } as React.CSSProperties}
    >
      {/* Image block */}
      <div className="pg-card__image-wrap">

        {/* Hover gif / static image */}
        {hasMedia ? (
          <>
            {images.length > 0 ? (
              <div className="relative w-full h-full">
                {images.map((img, i) => {
                  const isVideo = img.toLowerCase().endsWith('.mov') || img.toLowerCase().endsWith('.mp4');
                  
                  return isVideo ? (
                    <video
                      key={img}
                      src={img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={`pg-card__img absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${i === currentIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none -z-10"}`}
                    />
                  ) : (
                    <NextImage
                      key={img}
                      src={img}
                      alt={`${project.title} image ${i + 1}`}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized={img.toLowerCase().endsWith('.gif')}
                      className={`pg-card__img transition-opacity duration-500 ${i === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    />
                  );
                })}
                
                {/* Carousel Controls for Static Multi-image cards */}
                {isStatic && images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                      aria-label="Previous image"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>
                    <button 
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-background/60 backdrop-blur-sm border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                      aria-label="Next image"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1">
                      {images.map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`} 
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : project.gif_url ? (
              <img
                src={project.gif_url}
                alt={project.title}
                className={`pg-card__img pg-card__img--static ${hovered && project.gif_url ? "pg-card__img--hidden" : ""}`}
              />
            ) : null}

            {!isStatic && project.gif_url && (
              <img
                src={project.gif_url}
                alt={`${project.title} in action`}
                className={`pg-card__img pg-card__img--gif ${hovered ? "pg-card__img--visible" : ""}`}
              />
            )}
          </>
        ) : (
          <div className="pg-card__placeholder">
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Text block */}
      <div className="pg-card__body">
        <h3 className="pg-card__title">{project.title}</h3>
        {project.quick_description && <p className="pg-card__desc">{project.quick_description}</p>}
        
        {project.notion_url && (
          <div className="mt-3 flex" onClick={(e) => e.stopPropagation()}>
            <a 
              href={project.notion_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
            >
              Documentation
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        )}

        {!isStatic && (
          <div className="pg-card__cta" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        )}
      </div>

      <style>{`
        .pg-card {
          position: relative;
          cursor: ${isStatic ? "default" : "pointer"};
          display: flex;
          flex-direction: column;
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border) / 0.3);
          border-radius: 4px;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          animation: pgCardIn 0.5s ease calc(var(--card-index, 0) * 60ms) forwards;
          transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1), box-shadow 0.3s cubic-bezier(0.2, 0, 0, 1);
        }

        @keyframes pgCardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .pg-card:hover {
          transform: translateY(-2px);
          border-color: hsl(var(--border) / 0.8);
          background: hsl(var(--muted) / 0.05);
        }

        .pg-card__image-wrap {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: hsl(var(--muted) / 0.3);
        }

        .pg-card__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center center;
          padding: 8px;
          transition: transform 0.4s ease, opacity 0.3s ease;
        }

        .pg-card__img--hidden { opacity: 0; }
        .pg-card__img--gif    { opacity: 0; }
        .pg-card__img--flip   { opacity: 0; }
        .pg-card__img--visible { opacity: 1; }

        .pg-card__placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: hsl(var(--muted));
        }
        .pg-card__placeholder span {
          font-size: 3rem;
          font-weight: 700;
          color: hsl(var(--muted-foreground) / 0.25);
          font-family: Georgia, serif;
        }

        .pg-card__body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .pg-card__title {
          font-size: 1.125rem;
          font-weight: 700;
          line-height: 1.2;
          color: hsl(var(--foreground));
          margin: 0;
        }

        .pg-card__desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: hsl(var(--muted-foreground) / 0.8);
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pg-card__cta {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: auto;
          padding-top: 8px;
          color: hsl(var(--foreground) / 0.4);
          transition: transform 0.2s ease, color 0.2s ease;
        }
        
        .pg-card:hover .pg-card__cta {
          transform: translateX(4px);
          color: hsl(var(--primary));
        }

        @media (prefers-reduced-motion: reduce) {
          .pg-card { transition: none; animation: none; opacity: 1; transform: none; }
          .pg-card__img { transition: none; }
          .pg-card__cta { transition: none; }
        }
      `}</style>
    </article>
  );
};

export default ProjectCard;
