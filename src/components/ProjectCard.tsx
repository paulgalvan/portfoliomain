import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface Project {
  id: string;
  title: string;
  description: string;
  quick_description: string;
  images?: string[];
  gif_url?: string;
  tags: string[];
  is_featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  // onClick: (project: Project) => void; // Removed onClick prop
}

const ProjectCard = ({ project }: ProjectCardProps) => { // Removed onClick from destructuring
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate(); // Get navigate function

  return (
    <Card 
      className="project-card h-80 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/projects/${project.id}`)} // Navigate to project detail page
    >
      <CardContent className="p-0 h-full relative overflow-hidden">
        {/* Background Image/GIF */}
        <div className="absolute inset-0">
          {isHovered && project.gif_url ? (
            <img
              src={project.gif_url}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          ) : project.images && project.images.length > 0 && !imageError ? (
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-contain"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/30">
                {project.title.charAt(0)}
              </div>
            </div>
          )}
        </div>

        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          isHovered ? "opacity-90" : "opacity-0"
        }`} />

        {/* Content */}
        <div className={`absolute inset-0 p-6 flex flex-col justify-end text-white transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="space-y-3">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm leading-relaxed opacity-90">
              {project.quick_description}
            </p>
            
            {/* Tags preview - only show first 3 */}
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="text-xs bg-white/20 text-white border-white/20 hover:bg-white/30"
                >
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge 
                  variant="secondary" 
                  className="text-xs bg-white/20 text-white border-white/20"
                >
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Featured badge */}
        {project.is_featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-accent text-accent-foreground font-medium">
              ⭐ Featured
            </Badge>
          </div>
        )}

        {/* Hover indicator */}
        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}>
          <div className="text-white text-sm font-medium bg-primary/80 px-3 py-1 rounded-full">
            Click to view details →
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;