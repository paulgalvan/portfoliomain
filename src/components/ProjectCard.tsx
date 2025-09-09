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
      className="project-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/projects/${project.id}`)} // Navigate to project detail page
    >
      <CardContent className="p-0 relative overflow-hidden flex flex-col">
        {/* Background Image/GIF */}
        <div className="relative h-48">
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
              className="w-full h-full object-scale-down"
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

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.quick_description}
            </p>
          </div>
          
          {/* Tags preview - only show first 3 */}
          <div className="flex flex-wrap gap-1 mt-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge 
                variant="secondary"
              >
                +{project.tags.length - 3}
              </Badge>
            )}
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
      </CardContent>
    </Card>
  );
};

export default ProjectCard;