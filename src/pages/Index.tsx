import { useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="container mx-auto flex items-center justify-center">
          {/* Image Container */}
          <Link to="/personal-about">
            <div className="w-64 h-64 mr-8">
              <div 
                className="w-full h-full rounded-lg overflow-hidden border-2 border-primary"
                style={{ transform: `translateY(-20px)` }} // You can adjust the vertical position here
              >
                <img
                  src="/Headshot_Paul_Galvan.jpeg"
                  alt="Paul Galvan"
                  className="w-full h-full object-cover" style={{ objectPosition: '50% 20%' }} // You can adjust the second percentage value to move the image up or down
                />
              </div>
            </div>
          </Link>

          {/* Text Container */}
          <div className="text-left">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Paul Galvan
            </h1>
            <div className="max-w-3xl space-y-6">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
               Welcome to my portfolio! I’m a Mechanical Engineering student who loves turning ideas into
                real projects. My work highlights my interest in robotics, design, and collaboration. Click 
                my photo if you’d like to know more about me!
               </p>
              <div className="flex space-x-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore My Work
                </Button>
                <Link to="/personal-about">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    About Me
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section id="featured" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">My Favorite Projects</h2>
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
                />
              ))}
            </div>
          </div>
        </section>
      )}

      

      {/* All Projects Section */}
      <section id="projects" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">All Projectss</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on the tags below to filter projects by technology and skills.
            </p>
          </div>

          <TagFilter
            availableTags={availableTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            onClearAll={handleClearAllTags}
          />

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
                />
              ))}
            </div>
          )}
        </div>
      </section>

      

      

      

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
