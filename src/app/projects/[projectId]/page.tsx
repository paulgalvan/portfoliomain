'use client';
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useProjects } from "@/hooks/useProjects";
import DynamicContentRenderer from "@/components/DynamicContentRenderer";
import { Loader2, ArrowLeft, ArrowUpRight, ChevronDown, ArrowRight } from "lucide-react";

function MediaBlock({ src, alt }: { src: string; alt: string }) {
  if (!src) return null;
  if (src.includes("drive.google.com")) {
    return (
      <div className="cs-media-iframe-wrapper">
        <iframe 
          src={src} 
          className="cs-media-iframe"
          allow="autoplay" 
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  if (/\.(mp4|webm|ogg|mov)$/i.test(src))
    return <video src={src} controls playsInline className="cs-media" />;
  return <img src={src} alt={alt} className="cs-media" loading="eager" />;
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`cs-reveal ${visible ? "cs-reveal--visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

const processEmbeds = (html: string) => {
  if (!html) return "";
  return html.replace(
    /<a[^>]*href="(https:\/\/app\.speckle\.systems[^"]+)"[^>]*>.*?<\/a>/gi,
    `<div class="cs-iframe-wrapper"><iframe src="$1" allow="fullscreen" frameborder="0"></iframe></div>`
  );
};

function DocsAccordion({ tabs, summary, notionUrl, notionIframeUrl }: {
  tabs: {label: string, html: string, thumbnail: string | null}[],
  summary?: string,
  notionUrl?: string,
  notionIframeUrl?: string,
}) {
  const [open, setOpen] = useState(false);
  const [selectedDocIndex, setSelectedDocIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!open) setSelectedDocIndex(null);
  }, [open]);

  // Only bail out if there's truly nothing to show
  if ((!tabs || tabs.length === 0) && !notionIframeUrl && !notionUrl) return null;

  let rawHtml = tabs[0]?.html || "";
  rawHtml = rawHtml.replace(/<p>\s*<a[^>]*>My Building Process<\/a>\s*<\/p>/gi, "");
  rawHtml = rawHtml.replace(/<a[^>]*>My Building Process<\/a>/gi, "");
  rawHtml = rawHtml.replace(/<p>My Building Process<\/p>/gi, "");

  let htmlPart1 = rawHtml;
  let htmlPart2 = "";
  let isSplit = false;

  const splitRegex = /(<h[1-6][^>]*>(Risks|My Progress)<\/h[1-6]>)/i;
  const match = rawHtml.match(splitRegex);

  if (match && match.index !== undefined) {
    htmlPart1 = rawHtml.substring(0, match.index);
    htmlPart2 = rawHtml.substring(match.index);
    isSplit = true;
  }

  return (
    <div className="cs-accordion">
      <button className={`cs-accordion__trigger ${open ? "cs-accordion__trigger--open" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="cs-accordion__label">Full documentation</span>
        <span className="cs-accordion__meta">
          {notionUrl && (
            <a href={notionUrl} target="_blank" rel="noopener noreferrer" className="cs-accordion__notion-link" onClick={(e) => e.stopPropagation()}>
              {notionUrl.includes("github.com") ? "View on GitHub" : 
               notionUrl.includes("google.com/presentation") ? "View Slides" : 
               notionUrl.includes("ceeoinnovations.org") || notionUrl.includes("tufts.edu") ? "Full Blog Post" : "Full Documentation"} <ArrowUpRight size={12} />
            </a>
          )}
          <ChevronDown size={18} className={`cs-accordion__chevron ${open ? "cs-accordion__chevron--open" : ""}`} />
        </span>
      </button>

      {open && (
        <div className="cs-accordion__body">
          
          {selectedDocIndex === null && (
            <div className="cs-docs-menu">
              {tabs.length > 0 && (
                <div className="cs-prose prose dark:prose-invert">
                  <DynamicContentRenderer htmlContent={processEmbeds(htmlPart1)} />
                </div>
              )}

              {tabs.length > 1 && (
                <div className={`cs-docs-grid-container ${isSplit ? "cs-docs-grid-container--inline" : ""}`}>
                  {!isSplit && <h3 className="cs-docs-grid-title">Sub-pages</h3>}
                  <div className="cs-docs-grid">
                    {tabs.slice(1).map((tab, idx) => (
                      <button
                        key={idx}
                        className="cs-docs-card"
                        onClick={() => setSelectedDocIndex(idx + 1)}
                      >
                        {/* New Thumbnail Logic */}
                        {tab.thumbnail && (
                          <div className="cs-docs-card__media">
                            <img src={tab.thumbnail} alt={tab.label} loading="lazy" />
                          </div>
                        )}
                        <div className="cs-docs-card__body">
                          <span className="cs-docs-card__title">{tab.label}</span>
                          <ArrowRight size={16} className="cs-docs-card__icon" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isSplit && (
                <div className="cs-prose prose dark:prose-invert">
                  <DynamicContentRenderer htmlContent={processEmbeds(htmlPart2)} />
                </div>
              )}
            </div>
          )}

          {selectedDocIndex !== null && selectedDocIndex > 0 && (
            <div className="cs-docs-detail">
              <div className="cs-docs-detail__header">
                <button 
                  className="cs-docs-back-btn" 
                  onClick={() => setSelectedDocIndex(null)}
                >
                  <ArrowLeft size={14} /> Back to Overview
                </button>
                <span className="cs-docs-detail__title">{tabs[selectedDocIndex].label}</span>
              </div>
              
              <div className="cs-prose prose dark:prose-invert">
                <DynamicContentRenderer htmlContent={processEmbeds(tabs[selectedDocIndex].html || "")} />
              </div>
            </div>
          )}

          {/* ── Notion iframe embed (shown when Notion iframe URL is set) ── */}
          {notionIframeUrl && selectedDocIndex === null && (
              <iframe
                src={notionIframeUrl}
                width="100%"
                height="680"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                className="cs-notion-embed__frame"
                title="Notion documentation"
              />
          )}

        </div>
      )}
    </div>
  );
}

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params.projectId as string;
  const { projects, loading, error } = useProjects();
  const [project, setProject] = useState<any>(null);
  
  const [tabbedContent, setTabbedContent] = useState<{label: string, html: string, thumbnail: string | null}[]>([]);
  const [htmlLoading, setHtmlLoading] = useState(false);

  useEffect(() => {
    if (loading || !projects.length) return;
    const found = projects.find((p) => p.id === projectId);
    setProject(found || null);

    // If the project has a Notion iframe embed, skip loading the old processedContent HTML
    // We still load processedContent for thumbnails/links even if notion_iframe_url is set
    // if (found?.notion_iframe_url) return;

    if (found?.processedContent && found.processedContent.length > 0) {
      setHtmlLoading(true);
      Promise.all(
        found.processedContent.map(async (tab: any) => {
          try {
            const r = await fetch(`/${tab.path}`);
            if (!r.ok) throw new Error();
            const html = await r.text();
            return { label: tab.label, html, thumbnail: tab.thumbnail || null };
          } catch {
            return { label: tab.label, html: "<p>Content currently unavailable.</p>", thumbnail: tab.thumbnail || null };
          }
        })
      )
      .then(setTabbedContent)
      .finally(() => setHtmlLoading(false));
    } 
    else if (found?.processedContentPath) {
      setHtmlLoading(true);
      fetch(`/${found.processedContentPath}`)
        .then((r) => r.text())
        .then((html) => setTabbedContent([{ label: "Documentation", html, thumbnail: null }]))
        .finally(() => setHtmlLoading(false));
    }
  }, [projects, loading, projectId]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>;
  if (error) return <div className="min-h-screen flex items-center justify-center px-6"><p className="text-sm text-muted-foreground">Could not load project - {error}</p></div>;
  if (!project) return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="cs-not-found"><h1>Project not found</h1><Link href="/" className="cs-back"><ArrowLeft size={16} /> Back to work</Link></div>
      <Footer />
    </div>
  );

  const hasSummary = project.overview || project.development || project.final_result || project.reflection;
  const hasCollectionItems = project.content?.some((c: any) => c.type === "project_item");

  return (
    <>
      <div className="cs-page">
        <Navigation />

        <header className="cs-hero">
          <div className="cs-hero__inner">
            <Link href="/" className="cs-back"><ArrowLeft size={15} /> All work</Link>
            <div className="cs-hero__meta">
              {project.tags?.map((tag: string) => <span key={tag} className="cs-tag">{tag}</span>)}
            </div>
            <h1 className="cs-hero__title">{project.title}</h1>
            <p className="cs-hero__desc">{project.quick_description}</p>
            <div className="cs-hero__links">
              {project.project_url && (
                <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="cs-link">
                  {project.project_url.endsWith(".pdf") || project.project_url.includes("project=eggdecorator") ? "View Instructions" : "Live project"} <ArrowUpRight size={14} />
                </a>
              )}
              {project.github_url && <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="cs-link">GitHub <ArrowUpRight size={14} /></a>}
              {project.notion_url && (
                <a href={project.notion_url} target="_blank" rel="noopener noreferrer" className="cs-link">
                  {project.notion_url.includes("github.com") ? "GitHub" : 
                   project.notion_url.includes("google.com/presentation") ? "Slides" :
                   project.notion_url.includes("ceeoinnovations.org") || project.notion_url.includes("tufts.edu") ? "Full Blog Post" : "Documentation"} <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
          {(project.hero_media || project.gif_url || project.images?.[0]) && (
            <div className="cs-hero__media">
              <div className="cs-hero__media-inner">
                <MediaBlock src={project.hero_media || project.gif_url || project.images?.[0]} alt={project.title} />
              </div>
            </div>
          )}
        </header>

        <main className="cs-body">

          {project.overview && (
            <RevealSection>
              <section className="cs-section">
                <span className="cs-section__label">Overview</span>
                <p className="cs-section__text">{project.overview.text}</p>
              </section>
            </RevealSection>
          )}

          {project.development && (
            <RevealSection>
              <section className="cs-section">
                <span className="cs-section__label">Process</span>
                <div className="cs-dev-grid">
                  {project.development.items?.map((item: any, i: number) => {
                    if (item.type === "image" || item.type === "gif") return <div key={i} className="cs-dev-grid__media"><MediaBlock src={item.value} alt={`Process ${i + 1}`} /></div>;
                    if (item.type === "text") return <div key={i} className="cs-dev-grid__text"><p>{item.value}</p></div>;
                    return null;
                  })}
                </div>
              </section>
            </RevealSection>
          )}

          {hasCollectionItems && (
            <RevealSection>
              <section className="cs-section">
                <span className="cs-section__label">{project.content.find((c: any) => c.type === "overview")?.title || "Projects"}</span>
                <div className="cs-items-grid">
                  {project.content.filter((c: any) => c.type === "project_item").map((item: any, i: number) => (
                    <RevealSection key={item.id || i}>
                      <div className="cs-item-card">
                        <div className="cs-item-card__media">
                          <img src={item.image} alt={item.title} className="cs-item-card__img cs-item-card__img--static" />
                          {item.gif && <img src={item.gif} alt={item.title} className="cs-item-card__img cs-item-card__img--hover" />}
                        </div>
                        <div className="cs-item-card__body"><h3>{item.title}</h3><p>{item.description}</p></div>
                      </div>
                    </RevealSection>
                  ))}
                </div>
              </section>
            </RevealSection>
          )}

          {project.final_result && (
            <RevealSection>
              <section className="cs-section">
                <span className="cs-section__label">Result</span>
                <div className="cs-result">
                  {project.final_result.items?.map((item: any, i: number) => {
                    if (item.type === "image" || item.type === "gif") return <div key={i} className="cs-result__media"><MediaBlock src={item.value} alt={`Result ${i + 1}`} /></div>;
                    if (item.type === "image_grid") {
                      return (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
                          {item.value.map((src: string, j: number) => (
                            <div key={j} className="cs-result__media" style={{ margin: 0 }}>
                              <MediaBlock src={src} alt={`Result Grid ${j + 1}`} />
                            </div>
                          ))}
                        </div>
                      );
                    }
                    if (item.type === "text") return <p key={i} className="cs-result__text">{item.value}</p>;
                    if (item.type === "list") return <ul key={i} className="cs-result__list">{item.value.map((li: string, j: number) => <li key={j}>{li}</li>)}</ul>;
                    return null;
                  })}
                </div>
              </section>
            </RevealSection>
          )}

          {project.reflection && (
            <RevealSection>
              <section className="cs-section">
                <span className="cs-section__label">Reflection</span>
                <div className="cs-result w-full">
                  <blockquote className="cs-blockquote">{project.reflection.text}</blockquote>
                  {project.reflection.items && project.reflection.items.map((item: any, i: number) => {
                    if (item.type === "image" || item.type === "gif") {
                      return <div key={i} className="cs-result__media mt-6"><MediaBlock src={item.value} alt={`Reflection Media ${i + 1}`} /></div>;
                    }
                    return null;
                  })}
                </div>
              </section>
            </RevealSection>
          )}

          {/* ── Full Documentation Section (Dropdown or External Link) ── */}
          {(project.notion_iframe_url || (tabbedContent && tabbedContent.length > 0) || htmlLoading) ? (
            <RevealSection>
              <section className="cs-section cs-section--full">
                {htmlLoading ? (
                  <div className="cs-prose-loading"><Loader2 className="w-4 h-4 animate-spin text-muted-foreground" /></div>
                ) : (
                  <DocsAccordion
                    tabs={tabbedContent}
                    summary={project.overview?.text}
                    notionUrl={project.notion_url}
                    notionIframeUrl={project.notion_iframe_url}
                  />
                )}
              </section>
            </RevealSection>
          ) : project.notion_url ? (
            <RevealSection>
              <section className="cs-section">
                <span className="cs-section__label">Documentation</span>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <a 
                    href={project.notion_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cs-link cs-link--large"
                  >
                    {project.notion_url.includes("github.com") ? "View Repository on GitHub" : "Read Blog"}
                    <ArrowUpRight size={18} className="ml-1" />
                  </a>
                </div>
              </section>
            </RevealSection>
          ) : null}

          {!hasSummary && !hasCollectionItems && !project.notion_iframe_url && tabbedContent.length === 0 && !htmlLoading && (
            <RevealSection>
              <section className="cs-section cs-section--fallback">
                {project.notion_url
                  ? <a href={project.notion_url} target="_blank" rel="noopener noreferrer" className="cs-link cs-link--large">Read full case study <ArrowUpRight size={16} /></a>
                  : <p className="cs-section__text" style={{ color: "hsl(var(--muted-foreground))" }}>No additional content available.</p>
                }
              </section>
            </RevealSection>
          )}

        </main>

        <div className="cs-footer-nav">
          <Link href="/" className="cs-back cs-back--footer"><ArrowLeft size={15} /> Back to all work</Link>
        </div>
        <Footer />
      </div>

      <style>{`
        .cs-page{min-height:100vh;background:hsl(var(--background))}
        .cs-reveal{opacity:0;transform:translateY(28px);transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1)}
        .cs-reveal--visible{opacity:1;transform:translateY(0)}
        @media(prefers-reduced-motion:reduce){.cs-reveal{transition:none;opacity:1;transform:none}}
        .cs-back{display:inline-flex;align-items:center;gap:6px;font-size:.8rem;font-weight:500;color:hsl(var(--muted-foreground));text-decoration:none;letter-spacing:.02em;transition:color .2s;margin-bottom:32px}
        .cs-back:hover{color:hsl(var(--foreground))}
        .cs-back--footer{margin-bottom:0}
        .cs-hero{padding:100px 24px 0;max-width:1100px;margin:0 auto}
        .cs-hero__inner{max-width:800px}
        .cs-hero__meta{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px}
        .cs-tag{font-size:.72rem;font-weight:500;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;border-radius:100px;border:1px solid hsl(var(--border));color:hsl(var(--muted-foreground))}
        .cs-hero__title{font-size:clamp(2rem,6vw,3.5rem);font-weight:700;line-height:1.15;letter-spacing:-.02em;color:hsl(var(--foreground));margin:0 0 16px}
        .cs-hero__desc{font-size:1.1rem;line-height:1.65;color:hsl(var(--muted-foreground));margin:0 0 28px;max-width:560px}
        .cs-hero__links{display:flex;gap:20px;flex-wrap:wrap}
        .cs-link{display:inline-flex;align-items:center;gap:4px;font-size:.85rem;font-weight:500;color:hsl(var(--primary));text-decoration:none;border-bottom:1px solid hsl(var(--primary)/.3);padding-bottom:1px;transition:border-color .2s}
        .cs-link:hover{border-color:hsl(var(--primary))}
        .cs-link--large{font-size:1rem}
        .cs-hero__media{margin:48px 0 0;overflow:hidden;border-radius:12px;max-height:520px;background:hsl(var(--muted)/.3);border:1px solid hsl(var(--border))}
        .cs-hero__media-inner{width:100%;height:100%;aspect-ratio:16/9;overflow:hidden}
        .cs-media{width:100%;height:100%;object-fit:contain;display:block;transition:transform .5s ease}
        .cs-media-iframe-wrapper{position:relative;width:100%;aspect-ratio:16/9;border-radius:10px;overflow:hidden;background:hsl(var(--muted)/.3);border:1px solid hsl(var(--border))}
        .cs-media-iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0}
        .cs-body{max-width:1100px;margin:0 auto;padding:80px 24px 48px;display:flex;flex-direction:column;gap:80px}
        .cs-section{display:grid;grid-template-columns:160px 1fr;gap:0 48px;align-items:start}
        .cs-section--full{display:block}
        .cs-section--fallback{display:flex;justify-content:center;padding:48px 0}
        .cs-section__label{font-size:.72rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:hsl(var(--muted-foreground));padding-top:4px;position:sticky;top:80px}
        .cs-section__text{font-size:1.05rem;line-height:1.75;color:hsl(var(--foreground));margin:0}
        .cs-dev-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}
        .cs-dev-grid__media img,.cs-dev-grid__media video{width:100%;border-radius:10px;object-fit:contain}
        .cs-dev-grid__text p{font-size:.95rem;line-height:1.75;color:hsl(var(--foreground));margin:0}
        .cs-result{display:flex;flex-direction:column;gap:20px}
        .cs-result__media img,.cs-result__media video{width:100%;border-radius:10px;max-height:400px;object-fit:contain}
        .cs-result__text{font-size:1rem;line-height:1.75;color:hsl(var(--foreground));margin:0}
        .cs-result__list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:12px}
        .cs-result__list li{font-size:.95rem;line-height:1.6;color:hsl(var(--foreground));padding-left:20px;position:relative}
        .cs-result__list li::before{content:'-';position:absolute;left:0;color:hsl(var(--primary));font-weight:600}
        .cs-blockquote{font-size:1.1rem;line-height:1.75;color:hsl(var(--foreground));border-left:3px solid hsl(var(--primary));padding-left:24px;margin:0;font-style:italic}
        .cs-items-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-top:32px}
        .cs-item-card{border:1px solid hsl(var(--border));border-radius:12px;overflow:hidden;background:hsl(var(--card));transition:box-shadow .3s ease,transform .3s ease}
        .cs-item-card:hover{box-shadow:0 12px 32px -8px hsl(var(--foreground)/.1);transform:translateY(-3px)}
        .cs-item-card__media{position:relative;aspect-ratio:4/3;overflow:hidden;background:hsl(var(--muted))}
        .cs-item-card__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .3s ease}
        .cs-item-card__img--hover{opacity:0}
        .cs-item-card:hover .cs-item-card__img--static{opacity:0}
        .cs-item-card:hover .cs-item-card__img--hover{opacity:1}
        .cs-item-card__body{padding:16px 18px 18px}
        .cs-item-card__body h3{font-size:.95rem;font-weight:600;color:hsl(var(--foreground));margin:0 0 6px}
        .cs-item-card__body p{font-size:.82rem;line-height:1.6;color:hsl(var(--muted-foreground));margin:0}

        /* ── Accordion ── */
        .cs-accordion{border:1px solid hsl(var(--border));border-radius:12px;overflow:hidden;background:hsl(var(--card))}
        .cs-accordion__trigger{width:100%;display:flex;align-items:center;justify-content:space-between;padding:20px 24px;background:hsl(var(--card));border:none;cursor:pointer;transition:background .2s;text-align:left}
        .cs-accordion__trigger:hover{background:hsl(var(--muted)/.5)}
        .cs-accordion__trigger--open{border-bottom:1px solid hsl(var(--border))}
        .cs-accordion__label{font-size:.85rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:hsl(var(--foreground))}
        .cs-accordion__meta{display:flex;align-items:center;gap:16px}
        .cs-accordion__notion-link{display:inline-flex;align-items:center;gap:4px;font-size:.78rem;font-weight:500;color:hsl(var(--primary));text-decoration:none;border-bottom:1px solid hsl(var(--primary)/.3);padding-bottom:1px;transition:border-color .2s}
        .cs-accordion__notion-link:hover{border-color:hsl(var(--primary))}
        .cs-accordion__chevron{color:hsl(var(--muted-foreground));transition:transform .3s ease;flex-shrink:0}
        .cs-accordion__chevron--open{transform:rotate(180deg)}
        .cs-accordion__body{overflow:hidden}
        
        /* ── NEW Cards Grid UI (Image + Text) ── */
        .cs-docs-menu{padding:0 0 32px}
        
        .cs-docs-grid-container{
          max-width:800px;
          margin:48px auto 0;
          padding:32px 24px 0;
          border-top:1px solid hsl(var(--border))
        }
        
        .cs-docs-grid-container--inline{
          margin:16px auto;
          border-top:none;
          padding:0 24px;
        }

        .cs-docs-grid-title{font-size:.85rem;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:hsl(var(--muted-foreground));margin:0 0 20px}
        
        /* The CSS Grid */
        .cs-docs-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));gap:24px}
        
        /* The Card */
        .cs-docs-card{display:flex;flex-direction:column;padding:0;background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:12px;cursor:pointer;transition:all .2s ease;text-align:left;overflow:hidden;}
        .cs-docs-card:hover{border-color:hsl(var(--foreground)/.4);transform:translateY(-3px);box-shadow:0 8px 24px -8px rgba(0,0,0,0.08)}
        
        /* Card Thumbnail Area */
        .cs-docs-card__media{width:100%;aspect-ratio:16/9;background:hsl(var(--muted));overflow:hidden;border-bottom:1px solid hsl(var(--border))}
        .cs-docs-card__media img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}
        .cs-docs-card:hover .cs-docs-card__media img{transform:scale(1.05)}
        
        /* Card Text Area */
        .cs-docs-card__body{display:flex;align-items:center;justify-content:space-between;width:100%;padding:16px 20px;}
        .cs-docs-card__title{font-size:.95rem;font-weight:600;color:hsl(var(--foreground))}
        .cs-docs-card__icon{color:hsl(var(--muted-foreground));transition:transform .2s ease}
        .cs-docs-card:hover .cs-docs-card__icon{color:hsl(var(--foreground));transform:translateX(4px)}

        /* ── Detail View UI (Centered) ── */
        .cs-docs-detail{padding:24px}
        .cs-docs-detail__header{
          display:flex;
          align-items:center;
          gap:16px;
          margin:0 auto 16px auto;
          padding-bottom:16px;
          border-bottom:1px solid hsl(var(--border)/.5);
          max-width:800px;
        }
        .cs-docs-back-btn{display:inline-flex;align-items:center;gap:6px;font-size:.85rem;font-weight:500;color:hsl(var(--muted-foreground));background:hsl(var(--muted)/.3);border:1px solid transparent;padding:6px 12px;border-radius:6px;cursor:pointer;transition:all .2s}
        .cs-docs-back-btn:hover{color:hsl(var(--foreground));background:hsl(var(--muted)/.6);border-color:hsl(var(--border))}
        .cs-docs-detail__title{font-size:.95rem;font-weight:600;color:hsl(var(--foreground))}

        /* ── Prose Styles & Iframes ── */
        .cs-prose-loading{padding:40px 0;display:flex;justify-content:center}
        
        .cs-prose{
          font-size:.95rem;
          line-height:1.8;
          padding:32px 24px 8px;
          max-width:800px;
          margin:0 auto;
        }
        
        .cs-iframe-wrapper {
          width: 100%;
          aspect-ratio: 16 / 9;
          margin: 32px 0;
          border-radius: 12px;
          overflow: hidden;
          background: hsl(var(--muted) / 0.5);
          border: 1px solid hsl(var(--border));
        }
        .cs-iframe-wrapper iframe {
          width: 100%;
          height: 100%;
        }

        .cs-prose img{width:100%;border-radius:8px;margin:24px 0}
        .cs-prose h1,.cs-prose h2{font-weight:600;letter-spacing:-.02em;margin-top:48px;margin-bottom:16px}
        .cs-prose h2{font-size:1.3rem}
        .cs-prose h3{font-size:1.1rem;margin-top:32px}
        .cs-prose pre{border-radius:8px;font-size:.82rem}
        .cs-prose details{margin:16px 0}
        .cs-prose summary{cursor:pointer;font-weight:500;padding:8px 0}
        .cs-footer-nav{max-width:1100px;margin:0 auto;padding:0 24px 64px}
        .cs-not-found{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding-top:80px}
        .cs-not-found h1{font-size:1.5rem;font-weight:600}
        
        @media(max-width:768px){
          .cs-hero{padding-top:88px}
          .cs-section{grid-template-columns:1fr;gap:12px}
          .cs-section__label{position:static}
          .cs-dev-grid{grid-template-columns:1fr}
          .cs-items-grid{grid-template-columns:1fr}
          .cs-hero__media{margin:32px 0 0}
          .cs-hero__media-inner{aspect-ratio:4/3}
          .cs-body{padding:48px 20px 32px;gap:56px}
          .cs-docs-grid{grid-template-columns:1fr}
          .cs-docs-detail{padding:20px}
          .cs-notion-embed__frame{height:480px}
        }
        /* ── Notion embed ── */
        .cs-notion-embed{
          margin:32px 0 0;
          border-top:1px solid hsl(var(--border));
          padding-top:24px;
        }
        .cs-notion-embed__header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 24px 16px;
          max-width:800px;
          margin:0 auto;
        }
        .cs-notion-embed__label{
          font-size:.78rem;
          font-weight:600;
          letter-spacing:.08em;
          text-transform:uppercase;
          color:hsl(var(--muted-foreground));
        }
        .cs-notion-embed__frame{
          display:block;
          width:100%;
          height:680px;
          border:none;
          border-radius:0 0 12px 12px;
        }
      `}</style>
    </>
  );
}