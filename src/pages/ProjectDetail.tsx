import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useProjects } from "@/hooks/useProjects";
import { Loader2 } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { projects, loading, error } = useProjects();

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
          <h1 className="text-2xl font-bold text-destructive mb-2">Error Loading Project</h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground">The project you are looking for does not exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-muted-foreground text-lg mb-6">{project.quick_description}</p>

          {project.images && project.images.length > 0 && (
            <img src={project.images[0]} alt={project.title} className="w-full h-auto rounded-lg shadow-lg mb-8" />
          )}

          <div className="prose dark:prose-invert max-w-none">
            <p>{project.description}</p>
            {project.takeaways && (
              <p><strong>Takeaways:</strong> {project.takeaways}</p>
            )}
            {project.duration && (
              <p><strong>Duration:</strong> {project.duration}</p>
            )}
            {project.tags && project.tags.length > 0 && (
              <p><strong>Tags:</strong> {project.tags.join(", ")}</p>
            )}
            {project.project_url && (
              <p><a href={project.project_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">View Project</a></p>
            )}
            {project.github_url && (
              <p><a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub Repository</a></p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
