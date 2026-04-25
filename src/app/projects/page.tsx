'use client';
import { useState, useEffect } from "react";
import { useProjects, Project } from "@/hooks/useProjects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowLeft, Loader2 } from "lucide-react";

// PCB Projects (Hardcoded Gallery Section)
  const pcbProjects: Project[] = [
    {
      id: "pcb-1",
      title: "Voltage Regulator Board",
      quick_description: "Custom PCB to convert 12V to 5V and 3V.",
      images: ["/images/PNG image (2).png", "/images/regulator.png"],
      tags: ["PCB Design", "KiCad"],
      display_order: 1
    } as Project,
    {
      id: "pcb-2",
      title: "H-bridge",
      quick_description: "Custom PCB of an H-bridge circuit used to control motor direction and speed.",
      images: ["/images/mcontroller.png", "/images/controller.png"],
      tags: ["PCB Design", "Altium"],
      display_order: 2
    } as Project,
    {
      id: "pcb-3",
      title: "Surface Mount Device Practice Board",
      quick_description: "A practice PCB designed to help me get comfortable with surface mount soldering techniques.",
      images: ["/images/IMG_1999.jpeg", "/images/pcbs/pcb-3-video.mov"],
      tags: ["PCB Design", "Eagle"],
      display_order: 3
    } as Project
  ];

  // Extras (CAD Models)
  const extrasProjects: Project[] = [
    {
      id: "cad-lego-brick",
      title: "LEGO Brick",
      images: ["/images/me10cad/legobrick.png"],
      tags: ["CAD"],
      display_order: 2
    } as Project,
    {
      id: "cad-mounting-bracket",
      title: "Mounting Bracket",
      images: ["/images/me10cad/model.png"],
      tags: ["CAD"],
      display_order: 7
    } as Project,
    {
      id: "cad-citrus-press",
      title: "Citrus Press Assembly",
      images: ["/images/me10cad/citrus.png"],
      tags: ["CAD"],
      display_order: 3
    } as Project,
    {
      id: "cad-coffee-mug",
      title: "Coffee Mug",
      images: ["/images/me10cad/mug.png"],
      tags: ["CAD"],
      display_order: 4
    } as Project,
    {
      id: "cad-pumpkin",
      title: "Pumpkin",
      images: ["/images/me10cad/pumpkin.png"],
      tags: ["CAD"],
      display_order: 5
    } as Project,
    {
      id: "cad-vase",
      title: "Vase",
      images: ["/images/me10cad/vase.png"],
      tags: ["CAD"],
      display_order: 6
    } as Project,
    {
      id: "extra-lego-pid",
      title: "LEGO pid",
      images: ["/GIF/legopid.gif"],
      tags: ["Robotics"],
      display_order: 1
    } as Project,
    {
      id: "extra-soft-robotic-ring",
      title: "Soft Robotic Ring Oscillator",
      images: ["/images/soft-robotic-ring.mov"],
      tags: ["Robotics", "Soft Robotics"],
      display_order: 2
    } as Project,
    {
      id: "extra-olf",
      title: "Outreach Learning Fellow Activities",
      images: [
        "/images/olf1.JPG",
        "/images/olf2.JPG",
        "/images/olf3.JPG",
        "/images/olf4.JPG",
        "/images/olf5.JPG",
        "/images/olf6.jpeg"
      ],
      tags: ["Outreach"],
      display_order: 3
    } as Project,
    {
      id: "extra-p1-double-jump",
      title: "Robotics- Intro to Gears",
      images: [
        "/images/robotics/p1-frontgear.gif",
        "/images/robotics/p1-screenshot.png"
      ],
      tags: ["Robotics"],
      notion_url: "https://flax-haze-954.notion.site/Project-1-Double-Jump-3b13d704e8bb4b06807e5e6168552828?source=copy_link",
      display_order: 10
    } as Project,
    {
      id: "extra-p2-linkages",
      title: "Linkages",
      images: [
        "/images/robotics/p2-linkages.gif",
        "/images/robotics/p2-screenshot.png"
      ],
      tags: ["Robotics"],
      notion_url: "https://flax-haze-954.notion.site/Project-2-Linkages-473de1ad5a38492faa8785ff03c918db?source=copy_link",
      display_order: 11
    } as Project,
    {
      id: "extra-p3-star-road",
      title: "PID line follower color sensor",
      images: [
        "/images/robotics/p3-linefollower.gif",
        "/images/robotics/p3-1.jpg",
        "/images/robotics/p3-2.jpeg",
      ],
      tags: ["Robotics"],
      notion_url: "https://flax-haze-954.notion.site/Project-3-Star-Road-d9cc3e6496434ff4a57f93f07580a6c4?source=copy_link",
      display_order: 12
    } as Project,
    {
      id: "extra-p4-rainbow-road",
      title: "PID Line Follower Camera",
      images: [
        "/images/robotics/p4-1.jpg",
        "/images/robotics/p4-untitled.png",
        "/images/robotics/p4-2.gif",
        "/images/robotics/p4-3.gif",
        "/images/robotics/p4-4.gif"
      ],
      tags: ["Robotics"],
      notion_url: "https://flax-haze-954.notion.site/Project-4-Rainbow-Road-96d6bd2d2fd84a54869bcfd7d6c28117?source=copy_link",
      display_order: 13
    } as Project
  ];

  export default function ProjectsArchive() {
const [shuffledExtras, setShuffledExtras] = useState<Project[]>(extrasProjects);

  useEffect(() => {
    setShuffledExtras([...extrasProjects].sort(() => Math.random() - 0.5));
  }, []);

  
  const { projects, loading } = useProjects();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
      </div>
    );
  }

  // Define categories and their corresponding tags
  const CATEGORIES = [
    {
      name: "Robotics & Controls",
      description: "Systems integration, motion planning, and electromechanical builds.",
      tags: ["Robotics", "Microcontroller", "Raspberry Pi", "Collaboration", "LEGO"]
    },
    {
      name: "Design & Manufacturing",
      description: "Mechanical design, CAD modeling, and physical fabrication.",
      tags: ["CAD", "Design", "Manufacturing"]
    },
    {
      name: "Software & Human Factors",
      description: "Web development, UX research, and user-centered health tech.",
      tags: ["UX Design", "React", "Full Stack", "Health Tech", "Human Factors", "Web Interface", "Coding", "Ubuntu"]
    }
  ];

  // Group projects into categories
  const categorized = CATEGORIES.map(category => {
    return {
      ...category,
      items: projects.filter(project => 
        project.tags?.some(tag => category.tags.includes(tag))
      ).sort((a, b) => a.display_order - b.display_order)
    };
  });

  // Projects that didn't fit into a specific category
  const uncategorized = projects.filter(p => 
    !categorized.some(cat => cat.items.some(item => item.id === p.id))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-24 max-w-6xl">
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Project Archive</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A directory of my engineering work, research, and technical explorations, organized by core technical discipline.
          </p>
        </div>

        <div className="space-y-24">
          {categorized.map(category => (
            <section key={category.name} className="space-y-8">
              <div className="border-b border-border/60 pb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">{category.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{category.description}</p>
              </div>
              
              {category.items.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.items.map((project, i) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      index={i} 
                    />
                  ))}
                </div>
              ) : (
                <div className="p-12 border border-dashed border-border rounded-lg text-sm text-muted-foreground italic text-center">
                  No projects in this category yet.
                </div>
              )}
            </section>
          ))}

          {/* New PCB Section */}
          <section id="pcbs" className="space-y-8">
            <div className="border-b border-border/60 pb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Printed Circuit Boards</h2>
              <p className="text-muted-foreground leading-relaxed">Custom board designs, schematics, and hardware prototyping. (Hover to view schematics)</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pcbProjects.map((project, i) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={i} 
                  isStatic={true}
                />
              ))}
            </div>
          </section>

          {uncategorized.length > 0 && (
            <section className="space-y-8">
              <div className="border-b border-border/60 pb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Other Explorations</h2>
                <p className="text-muted-foreground">Miscellaneous technical work and hobby projects.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {uncategorized.map((project, i) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={i} 
                  />
                ))}
              </div>
            </section>
          )}

          {/* Extras Section */}
          <section id="extras" className="space-y-8">
            <div className="border-b border-border/60 pb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Extras</h2>
              <p className="text-muted-foreground leading-relaxed">Additional explorations and temporary projects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shuffledExtras.map((project, i) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={i} 
                  isStatic={true}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
