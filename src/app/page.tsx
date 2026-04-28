'use client';
import { Suspense, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { useProjects, Project } from "@/hooks/useProjects";
import { Loader2, ChevronRight } from "lucide-react";
import Experience from "@/components/Experience";
import FeaturedCarousel from "@/components/FeaturedCarousel";



// ─── Main page ────────────────────────────────────────────────────────────────

function HomePage() {
  const { projects, loading, error } = useProjects();
  const searchParams = useSearchParams();
  const projectsRef = useRef<HTMLElement>(null);

  // Scroll to projects section when ?scrollTo=projects
  useEffect(() => {
    if (searchParams.get("scrollTo") === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  // Only show featured projects on homepage
  const featuredProjects = projects.filter(p => p.is_featured).sort((a, b) => a.display_order - b.display_order);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-sm text-muted-foreground">
          Could not load projects - {error}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="pg-home">
        <Navigation />

        <section className="pg-hero">
          <div className="pg-hero__inner">

            <div className="pg-hero__left">
              <Link href="/personal-about" className="pg-hero__photo-link" aria-label="About Paul Galvan">
                <div className="pg-hero__photo-wrap">
                  <img
                    src="/Headshot_Paul_Galvan.jpeg"
                    alt="Paul Galvan"
                    className="pg-hero__photo"
                  />
                </div>
              </Link>

              <div className="pg-hero__text">
                <p className="pg-hero__eyebrow">Mechanical Engineering · Robotics &amp; Hardware · Tufts '26</p>
                <h1 className="pg-hero__name">Paul<br />Galvan</h1>
                <p className="pg-hero__bio">
                  ME senior at Tufts building at the intersection of robotics,
                  manufacturing, and human-centered design. Previously at
                  P&amp;G Gillette (saved ~$700K/yr), published robotics
                  research, and learned engineering internationally.
                  Seeking full-time hardware &amp; robotics roles starting
                  Summer 2026.
                </p>
                <div className="pg-hero__availability">
                  <span className="pg-hero__avail-dot" aria-hidden="true" />
                  Available · Full-time from Summer 2026
                </div>

              </div>
            </div>

            <div className="pg-hero__right">
              <FeaturedCarousel />
            </div>

          </div>
        </section>

        <section ref={projectsRef} id="projects" className="pg-projects pt-12">
          <div className="pg-projects__inner">

            <div className="pg-projects__header">
              <h2 className="pg-projects__heading">Featured Work</h2>
              <Link href="/projects" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-1.5">
                All Work
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Grid */}
            {featuredProjects.length === 0 ? (
              <div className="pg-projects__empty">
                <p>No featured projects found.</p>
              </div>
            ) : (
              <>
                <div className="pg-grid">
                  {featuredProjects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </div>
                
                <div className="mt-20 text-center">
                  <Link 
                    href="/projects" 
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-muted/50 hover:bg-muted transition-colors text-sm font-semibold"
                  >
                    All Work
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </>
            )}

          </div>
        </section>

        <Experience />

        <section className="pg-contact">
          <div className="pg-contact__inner">
            <p className="pg-contact__label">Contact</p>
            <h2 className="pg-contact__heading">Looking for hardware & robotics roles starting Summer 2026</h2>
            <div className="pg-contact__actions">
              <a
                id="contact-email-cta"
                href="mailto:paul.galvan@tufts.edu"
                className="pg-hero__btn pg-hero__btn--primary"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/paul-galvan/"
                target="_blank"
                rel="noopener noreferrer"
                className="pg-hero__btn pg-hero__btn--outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* ── Styles ────────────────────────────────────────────────────── */}
      <style>{`
        /* ── Page shell ── */
        .exp-page {
          min-height: 100vh;
          background: hsl(var(--background));
        }
        /* ── Header ── */
        .exp-header {
          padding: 120px 24px 64px;
          border-bottom: 1px solid hsl(var(--border));
        }
        .exp-header__inner {
          max-width: 760px;
          margin: 0 auto;
        }
        .exp-header__eyebrow {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0 0 16px;
        }
        .exp-header__title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          color: hsl(var(--foreground));
          margin: 0 0 20px;
        }
        .exp-header__sub {
          font-size: 1.05rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
          max-width: 540px;
          margin: 0;
        }
        /* ── Main ── */
        .exp-main {
          padding: 80px 24px 120px;
        }
        .exp-main__inner {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        /* ── Section ── */
        .exp-section__label {
          margin-bottom: 24px;
        }
        .exp-section__heading {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0 0 6px;
        }
        .exp-section__desc {
          font-size: 0.875rem;
          color: hsl(var(--muted-foreground) / 0.7);
          margin: 0;
          font-style: italic;
        }
        /* ── Timeline track ── */
        .exp-timeline {
          position: relative;
          padding-left: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .exp-timeline__line {
          position: absolute;
          left: 7px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: hsl(var(--border));
          border-radius: 2px;
        }
        /* ── Timeline entry ── */
        .tl-entry {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 0;
        }
        /* Dot */
        .tl-dot {
          position: absolute;
          left: -28px;
          top: 20px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2.5px solid hsl(var(--background));
          box-shadow: 0 0 0 2px hsl(var(--border));
          flex-shrink: 0;
          z-index: 1;
        }
        .tl-card {
          width: 100%;
          border: 1px solid hsl(var(--border) / 0.3);
          border-radius: 4px;
          background: hsl(var(--card));
          overflow: hidden;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }
        .tl-card:hover {
          border-color: hsl(var(--border) / 0.8);
          background: hsl(var(--muted) / 0.05);
        }
        .tl-card__header {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 22px;
          gap: 16px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .tl-card__left {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }
        .tl-card__monogram {
          width: 52px;
          height: 52px;
          border-radius: 6px;
          border: 1px solid hsl(var(--border) / 0.5);
          background: hsl(var(--muted) / 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }
        .tl-card__logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(1);
          opacity: 0.8;
          padding: 2px;
          transition: filter 0.2s, opacity 0.2s;
        }
        .tl-card:hover .tl-card__logo-img {
          filter: grayscale(0);
          opacity: 1;
        }
        .tl-card__meta {
          min-width: 0;
        }
        .tl-card__org {
          font-size: 0.95rem;
          font-weight: 600;
          color: hsl(var(--foreground));
          margin: 0 0 2px;
          line-height: 1.3;
        }
        .tl-card__role {
          font-size: 0.85rem;
          color: hsl(var(--muted-foreground));
          margin: 0 0 3px;
        }
        .tl-card__dates {
          font-size: 0.75rem;
          color: hsl(var(--muted-foreground) / 0.7);
          margin: 0;
          letter-spacing: 0.01em;
        }
        /* Chevron */
        .tl-card__chevron {
          color: hsl(var(--muted-foreground));
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), color 0.2s ease;
        }
        .tl-card__header:hover .tl-card__chevron {
          color: hsl(var(--foreground));
        }
        /* Accordion body */
        .tl-card__body-inner {
          padding: 0 22px 22px;
          border-top: 1px solid hsl(var(--border));
          padding-top: 18px;
        }
        /* Bullets */
        .tl-card__bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .tl-card__bullet {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          line-height: 1.65;
          color: hsl(var(--muted-foreground));
        }
        .tl-card__bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 7px;
        }
        /* Images */
        .tl-card__images {
          display: flex;
          gap: 10px;
          margin-top: 18px;
          flex-wrap: wrap;
        }
        .tl-card__image {
          width: calc(50% - 5px);
          border-radius: 8px;
          object-fit: cover;
          aspect-ratio: 16/10;
          border: 1px solid hsl(var(--border));
        }
        /* ── Responsive ── */
        @media (max-width: 600px) {
          .exp-header { padding: 96px 20px 48px; }
          .exp-main { padding: 60px 20px 96px; }
          .tl-card__header { padding: 16px 16px; }
          .tl-card__body-inner { padding: 0 16px 16px; padding-top: 14px; }
          .tl-card__image { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tl-entry, .tl-card, .tl-card__chevron {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        /* ── Layout shell ── */
        .pg-home {
          min-height: 100vh;
          background: hsl(var(--background));
        }
        
        .pg-hero {
          padding: 120px 24px 60px;
          display: flex;
          align-items: center;
        }
        .pg-hero__inner {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 60px;
        }
        .pg-hero__left {
          width: 45%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }
        .pg-hero__right {
          width: 55%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        
        .pg-hero__photo-link {
          display: inline-block;
          margin-bottom: 12px;
        }
        .pg-hero__photo-wrap {
          width: 200px;
          height: 240px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid hsl(var(--border));
          transition: opacity 0.2s ease;
        }
        .pg-hero__photo-link:hover .pg-hero__photo-wrap {
          opacity: 0.9;
        }
        .pg-hero__photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 20%;
          display: block;
        }
        .pg-hero__text { min-width: 0; }
        .pg-hero__eyebrow {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0 0 18px;
        }
        .pg-hero__name {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.04em;
          color: hsl(var(--foreground));
          margin: 0 0 20px;
        }
        .pg-hero__bio {
          font-size: 1.05rem;
          line-height: 1.7;
          color: hsl(var(--muted-foreground));
          max-width: 480px;
          margin: 0 0 20px;
        }
        /* Availability badge */
        .pg-hero__availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          color: hsl(142 60% 38%);
          background: hsl(142 60% 38% / 0.1);
          border: 1px solid hsl(142 60% 38% / 0.25);
          border-radius: 100px;
          padding: 5px 14px 5px 10px;
          margin-bottom: 28px;
          letter-spacing: 0.01em;
        }
        .pg-hero__avail-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: hsl(142 60% 38%);
          flex-shrink: 0;
        }
        .pg-hero__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }
        .pg-hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          border: none;
          background: none;
        }
        .pg-hero__btn--primary {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        .pg-hero__btn--primary:hover {
          background: hsl(var(--primary) / 0.88);
        }
        .pg-hero__btn--outline {
          border: 1.5px solid hsl(var(--border));
          color: hsl(var(--foreground));
          background: transparent;
        }
        .pg-hero__btn--outline:hover {
          border-color: hsl(var(--primary));
          color: hsl(var(--primary));
          background: hsl(var(--primary) / 0.05);
        }
        .pg-hero__btn--ghost {
          color: hsl(var(--muted-foreground));
          padding-left: 0;
          padding-right: 0;
        }
        .pg-hero__btn--ghost:hover {
          color: hsl(var(--foreground));
        }
        /* ── Contact Strip ── */
        .pg-contact {
          padding: 80px 24px 80px;
          border-top: 1px solid hsl(var(--border));
          text-align: center;
        }
        .pg-contact__inner {
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .pg-contact__label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }
        .pg-contact__heading {
          font-size: clamp(1.5rem, 3.5vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: hsl(var(--foreground));
          margin: 0;
        }
        .pg-projects {
          padding: 0 24px 96px;
        }
        .pg-projects__inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .pg-projects__header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1px solid hsl(var(--border));
        }
        .pg-projects__heading {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }
        .pg-projects__clear {
          font-size: 0.8rem;
          color: hsl(var(--muted-foreground));
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s;
        }
        .pg-projects__clear:hover {
          color: hsl(var(--foreground));
        }
        /* ── Tag pills ── */
        .pg-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 48px;
        }
        .tag-pill {
          font-size: 0.78rem;
          font-weight: 500;
          padding: 5px 12px;
          border-radius: 4px;
          border: 1px solid hsl(var(--border));
          background: transparent;
          color: hsl(var(--muted-foreground));
          cursor: pointer;
          transition: color 0.15s, border-color 0.15s;
        }
        .tag-pill:hover {
          border-color: hsl(var(--foreground) / 0.4);
          color: hsl(var(--foreground));
        }
        .tag-pill--active {
          border-color: hsl(var(--primary));
          background: hsl(var(--primary) / 0.06);
          color: hsl(var(--primary));
        }
        /* ── Grid ── */
        .pg-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: stretch;
        }
        /* Empty state */
        .pg-projects__empty {
          padding: 80px 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          color: hsl(var(--muted-foreground));
          font-size: 0.95rem;
        }
        
        /* ── Responsive Hero & Grid ── */
        @media (max-width: 1024px) {
          .pg-hero {
            padding: 100px 24px 60px;
            min-height: auto;
          }
          .pg-hero__inner {
            flex-direction: column;
            gap: 48px;
          }
          .pg-hero__left {
            width: 100%;
            align-items: center;
            text-align: center;
          }
          .pg-hero__right {
            width: 100%;
          }
          .pg-hero__bio {
            margin: 0 auto 32px;
          }
          .pg-hero__actions {
            justify-content: center;
          }
          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 600px) {
          .pg-hero {
            padding: 96px 20px 48px;
          }
          .pg-grid {
            grid-template-columns: 1fr;
          }
          .pg-grid > :first-child {
            grid-column: span 1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .pg-hero__btn,
          .pg-hero__photo-wrap,
          .tag-pill {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}

// ─── Export with Suspense (required for useSearchParams in Next.js App Router) ──

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
        </div>
      }
    >
      <HomePage />
    </Suspense>
  );
}