'use client';
import { useState } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type ExperienceEntry = {
  id: string;
  org: string;
  role: string;
  dates: string;
  location: string;
  type: "education" | "internship" | "research" | "campus" | "leadership";
  bullets: React.ReactNode[];
  logo?: string; // path to logo image
  accentColor: string; // tailwind-style hex for the timeline dot
  images?: string[]; // optional photos
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const experiences: ExperienceEntry[] = [
  // ── Education ──
  {
    id: "tufts-ms",
    org: "Tufts University",
    role: "M.S. in Mechanical Engineering",
    dates: "Committed for Fall 2026",
    location: "Medford, MA",
    logo: "/logos/tufts.png", 
    type: "education",
    accentColor: "#3182CE",
    bullets: [
      "Committed to pursue a Master's degree, focusing on advanced coursework in robotics, manufacturing, and hardware-software integration."
    ],
  },
  {
    id: "tufts-bs",
    org: "Tufts University",
    role: "B.S. in Mechanical Engineering",
    dates: "Sep 2022 – May 2026",
    location: "Medford, MA",
    logo: "/logos/tufts.png", 
    type: "education",
    accentColor: "#41B6E6",
    bullets: [
      "Minor in Human Factors Engineering.",
      "Actively involved in the NOLOP Makerspace and CEEO while building foundational engineering skills."
    ],
  },
  {
    id: "hku",
    org: "University of Hong Kong (HKU)",
    role: "Study Abroad",
    dates: "Spring 2025",
    location: "Hong Kong",
    logo: "/logos/hku.png", 
    type: "education",
    accentColor: "#00A3A1",
    bullets: [
      "Studied Systems and Controls through an international lens, adapting to new academic frameworks and collaborating with a diverse, global cohort.",
      "Expanded multicultural engineering perspectives during an intensive semester abroad."
    ],
  },
  {
    id: "pavia",
    org: "University of Pavia",
    role: "Study Abroad",
    dates: "Summer 2024",
    location: "Pavia, Italy",
    logo: "/logos/pavia.svg", 
    type: "education",
    accentColor: "#800000",
    bullets: [
      "Completed accelerated coursework in Data Structures and Introductory Italian.",
      "Managed remote curriculum development for BxCoding simultaneously while adapting to a new cultural and academic environment."
    ],
  },

  // ── Internships ──
  {
    id: "gillette",
    org: "Gillette (Procter & Gamble)",
    role: "Process Engineering Intern",
    dates: "May 2025 – Aug 2025",
    location: "Andover, MA",
    logo: "/logos/gillette-logo.png",
    type: "internship",
    accentColor: "#0066CC",
    bullets: [
      "Optimized operations with automation and standardization, lowering scrap/error rates, saving ~$700K annually.",
      "Elevated department output by 33% through performance optimization and data-driven machine recalibration.",
      "Implemented preventative failure solutions while ensuring comprehensive documentation for smooth project transition.",
    ],
  },
  {
    id: "bxcoding",
    org: "BxCoding",
    role: "Curriculum Developer & Instructor",
    dates: "Mar 2024 – Sep 2024",
    location: "Remote",
    logo: "/logos/bxcoding.png",
    type: "internship",
    accentColor: "#2563EB",
    bullets: [
      <>
        Developed comprehensive STEM curriculum for a summer camp at {" "}
        <a 
          href="https://bxcoding.org/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'underline', color: '#2563EB', fontWeight: 500 }}
        >
          BxCoding
        </a>
        , teaching Arduino, C++, and sensor integration to ~50 students.
      </>,
      "Managed remote program execution while studying abroad in Italy, ensuring high-quality technical education and student engagement.",
    ],
  },
  {
    id: "ceeo",
    org: "Center for Engineering Education & Outreach, Tufts",
    role: "LEGO Education Product Testing Intern",
    dates: "Jun 2023 – Aug 2023",
    location: "Medford, MA",
    logo: "/logos/ceeologo.png",
    type: "internship",
    accentColor: "#E3000B",
    bullets: [
      "Built a humanoid robot with integrated Bluetooth (BLE) code, enabling communication across 7 micro-controllers.",
      "Integrated AI/ML perception (MediaPipe) with robotic control for multi-motor system calibration.",
      "Constructed a 6-DOF robot arm with 12 motors and 2 hubs, controlled with BLE and LEGO software.",
    ],
  },

  // ── Research ──
  {
    id: "idea-lab",
    org: "IDEA Lab, Tufts University",
    role: "R&D Intern",
    dates: "Oct 2024 – Present",
    location: "Medford, MA",
    logo: "/logos/idealab.jpeg",
    type: "research",
    accentColor: "#4F46E5",
    bullets: [
      "Designed a biocompatible wrap with ultrasonic sensors, converting music into physical touch for rehabilitation.",
      "Applied signal processing for hardware-software integration, enabling real-time feedback in prototype systems.",
      "Collaborated in daily 2-hour research meetings with a team of 7, driving product development and timely execution.",
    ],
  },
  {
    id: "bouchard",
    org: "Bouchard Research Lab, Tufts University",
    role: "R&D Intern → R&D Researcher",
    dates: "Sep 2023 – Aug 2024",
    location: "Medford, MA",
    type: "research",
    accentColor: "#7C3AED",
    bullets: [
      "Published open-source documentation to GitHub including bill of materials, design process, and assembly instructions.",
      "Developed simple-to-understand robotic control algorithms with system-level integration of inverse kinematics in Python.",
      "Presented research at 3 conferences to 120 attendees, securing interest from 2 schools and engaging 60+ K-12 students.",
      "Designed a low-cost robotic arm for under $60 to make engineering education accessible to low-income students.",
      "Decreased manufacturing time by 58% by consolidating fabrication into a single component.",
    ],
  },

  // ── Campus ──
  {
    id: "nolop",
    org: "NOLOP Makerspace, Tufts University",
    role: "Assistant Fabrication Engineer",
    dates: "Jan 2024 – Present",
    location: "Medford, MA",
    logo: "/logos/noloplogo.png",
    type: "campus",
    accentColor: "#059669",
    bullets: [
      "Mentored 15 students per week by leading 20+ engineering workshops, equipping 300+ students with manufacturing and design skills.",
      "Diagnosed and resolved fabrication equipment, optimizing machine shop practices to prevent malfunctions and ensure safety.",
    ],
  },
  {
    id: "ceeo-olf",
    org: "Center for Engineering Education & Outreach (CEEO)",
    role: "Online Learning Fellow & Educator",
    dates: "Sep 2023 – Dec 2024",
    location: "Somerville, MA & Remote",
    logo: "/logos/ceeologo.png", 
    type: "campus", 
    accentColor: "#E3000B",
    bullets: [
      <>
        Taught foundational robotics and engineering concepts to Navajo Nation students remotely using LEGO SPIKE Prime hardware as an {" "}
        <a 
          href="https://sites.tufts.edu/ceeoolf/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'underline', color: '#E3000B', fontWeight: 500 }}
        >
          Online Learning Fellow
        </a>
        .
      </>,
      <>
        Developed weekly lesson plans and led in-person STEM activities for PK-8 students at the {" "}
        <a 
          href="https://somerville.k12.ma.us/schools/winter-hill-community-innovation-school-pk-8" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'underline', color: '#E3000B', fontWeight: 500 }}
        >
          Winter Hill Community Innovation School
        </a>
        .
      </>
    ],
  },

  // ── Leadership ──
  {
    id: "white-house",
    org: "White House Easter Egg Hunt, Biden Administration",
    role: "Project Lead",
    dates: "Mar 2023 – Apr 2023",
    location: "Washington, DC",
    logo: "/logos/whitehouse.png",
    type: "leadership",
    accentColor: "#B45309",
    bullets: [
      <>
        Selected from 1,700 students to represent LEGO Education at the {" "}
        <a 
          href="https://sites.tufts.edu/ceeoblog/2023/06/27/joyful-learning-at-the-white-house-easter-egg-roll/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'underline', color: '#B45309', fontWeight: 500 }}
        >
          White House Easter Egg Hunt
        </a>
        , designing and showcasing custom LEGO robots for hands-on activities with over 35,000 attendees.
      </>,
      "Engineered 20 custom LEGO robots equipped with sensors to activate a motor system, educating over 20,000 students.",
      <>
        Published open-source {" "}
        <a 
          href="https://www.ceeoinnovations.org/?project=eggdecorator" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'underline', color: '#B45309', fontWeight: 500 }}
        >
          building instructions
        </a>
        {" "} for the custom egg-decorating robots.
      </>
    ],
  },
  {
    id: "mexican-culture-club",
    org: "Mexican Culture Club",
    role: "Founder & President",
    dates: "Jan 2023 – Present",
    location: "Medford, MA",
    logo: "/logos/mcc.jpg",
    type: "leadership",
    accentColor: "#DC2626",
    bullets: [
      "Established a club to educate 140+ students in the Greater Boston area about Mexican traditions and culture.",
      "Initiated outreach with the Mexican consulate to foster communication across 13+ New England schools.",
    ],
  },
];

const sectionMeta: Record<string, { label: string; description: string }> = {
  education: {
    label: "Education",
    description: "Degrees and coursework.",
  },
  internship: {
    label: "Internships",
    description: "Industry roles.",
  },
  research: {
    label: "Research",
    description: "Lab and independent projects.",
  },
  campus: {
    label: "Campus Roles",
    description: "Teaching, making, and community at Tufts.",
  },
  leadership: {
    label: "Leadership",
    description: "Organizations I started or led.",
  },
};

const sectionOrder = ["education", "internship", "research", "campus", "leadership"] as const;

// ─── Timeline Entry ───────────────────────────────────────────────────────────

function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="tl-entry">
      {/* Timeline dot */}
      <div className="tl-dot" style={{ background: entry.accentColor }} />

      {/* Card */}
      <div className="tl-card">
        {/* Header - always visible */}
        <button
          className="tl-card__header"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <div className="tl-card__left">
            {/* Monogram / logo placeholder */}
            <div
              className="tl-card__monogram"
              style={{ background: entry.accentColor + "18", color: entry.accentColor, borderColor: entry.accentColor + "30" }}
            >
              {entry.logo ? (
                <img src={entry.logo} alt={entry.org} className="tl-card__logo-img" />
              ) : (
                <span>{entry.org.charAt(0)}</span>
              )}
            </div>
            <div className="tl-card__meta">
              <p className="tl-card__org">{entry.org}</p>
              <p className="tl-card__role">{entry.role}</p>
              <p className="tl-card__dates">{entry.dates} · {entry.location}</p>
            </div>
          </div>

          {/* Chevron */}
          <svg
            className="tl-card__chevron"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            width="18" height="18" viewBox="0 0 18 18" fill="none"
          >
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Accordion body */}
        <div
          className="tl-card__body"
          style={{
            maxHeight: open ? "600px" : "0",
            opacity: open ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease",
          }}
        >
          <div className="tl-card__body-inner">
            <ul className="tl-card__bullets">
              {entry.bullets.map((b, i) => (
                <li key={i} className="tl-card__bullet">
                  <span className="tl-card__bullet-dot" style={{ background: entry.accentColor }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {entry.images && entry.images.length > 0 && (
              <div className="tl-card__images">
                {entry.images.map((src, i) => (
                  <img key={i} src={src} alt="" className="tl-card__image" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Experience() {
  return (
    <>
      <div className="exp-page">

        {/* ── Page header ── */}
        <header className="exp-header">
          <div className="exp-header__inner">
            <p className="exp-header__eyebrow">Background</p>
            <h2 className="exp-header__title">Experience</h2>
            <p className="exp-header__sub">
              Internships, research, and roles that shaped how I build - across robotics, manufacturing, and education.
            </p>
          </div>
        </header>

        {/* ── Timeline ── */}
        <main className="exp-main">
          <div className="exp-main__inner">

            {sectionOrder.map((type) => {
              const entries = experiences.filter((e) => e.type === type);
              const meta = sectionMeta[type];
              return (
                <section key={type} className="exp-section">
                  {/* Section label */}
                  <div className="exp-section__label">
                    <h2 className="exp-section__heading">{meta.label}</h2>
                    <p className="exp-section__desc">{meta.description}</p>
                  </div>

                  {/* Timeline track */}
                  <div className="exp-timeline">
                    <div className="exp-timeline__line" />
                    {entries.map((entry, i) => (
                      <TimelineEntry key={entry.id} entry={entry} />
                    ))}
                  </div>
                </section>
              );
            })}

          </div>
        </main>

      </div>
    </>
  );
}