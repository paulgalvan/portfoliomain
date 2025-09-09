import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useProjects } from "@/hooks/useProjects";
import { Loader2 } from "lucide-react";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { projects, loading, error } = useProjects();

  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11) ? match[2] : null;
  };

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
          <p className="text-muted-foreground mb-8">{project.quick_description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.content?.map((item, index) => {
              switch (item.type) {
                case 'image':
                  return <img key={index} src={item.value} alt="" className="w-full h-auto rounded-lg max-w-xl mx-auto" />;
                case 'text':
                  return <p key={index} className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: item.value }} />;
                case 'video':
                  const videoId = getYouTubeVideoId(item.value);
                  if (videoId) {
                    return (
                      <iframe
                        key={index}
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    );
                  }
                  return <video key={index} src={item.value} controls className="w-full h-auto rounded-lg" />;
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
