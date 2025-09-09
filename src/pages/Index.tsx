import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TagFilter from "@/components/TagFilter";
import ProjectCard from "@/components/ProjectCard";

import { useProjects, Project } from "@/hooks/useProjects";
import { Loader2 } from "lucide-react";

const Index = () => {
  const { projects, loading, error, getAllTags, getFilteredProjects, getFeaturedProjects } = useProjects();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleClearAllTags = () => {
    setSelectedTags([]);
  };

  const handleProjectClick = (project: Project) => {
    // TODO: Navigate to project detail page
    console.log("Project clicked:", project);
  };

  const filteredProjects = getFilteredProjects(selectedTags);
  const featuredProjects = getFeaturedProjects();
  const availableTags = getAllTags();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive mb-2">Error Loading Portfolio</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            Paul Galvan
          </h1>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
             Welcome to my portfolio! I’m a mechanical engineer driven to create innovative systems that merge technical precision with creative design. Here, you’ll find projects that highlight my passion for robotics, engineering, and collaborative problem-solving.
             </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore My Work
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section id="featured" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Best Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of my most impactful and innovative projects that showcase 
                my skills and passion for technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tag Filter Section */}
      <TagFilter
        availableTags={availableTags}
        selectedTags={selectedTags}
        onTagToggle={handleTagToggle}
        onClearAll={handleClearAllTags}
      />

      {/* All Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">All Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {selectedTags.length > 0 
                ? `Showing ${filteredProjects.length} projects filtered by: ${selectedTags.join(", ")}`
                : `Explore all ${projects.length} projects in my portfolio`
              }
            </p>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or clearing all tags to see more projects.
              </p>
              <Button variant="outline" onClick={handleClearAllTags}>
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={handleProjectClick}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg leading-relaxed">
                  I'm a rising senior in Mechanical Engineering with a Human Factors minor. I enjoy collaborating with others and pushing the limits of what's possible.
                </p>
                <p className="text-lg leading-relaxed">
                  I like to play with LEGOs, explore new technologies, and work on projects that combine creativity with technical excellence
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="Placeholder for my picture"
                  className="rounded-lg border-2 border-dashed border-muted-foreground w-64 h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
