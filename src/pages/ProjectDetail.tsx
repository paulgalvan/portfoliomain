import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useProjects } from "@/hooks/useProjects";
import { Loader2, Edit, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ResponsiveGridLayout = WidthProvider(Responsive);

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { projects, loading, error } = useProjects();
  const [project, setProject] = useState<any>(null);
  const [isEditable, setIsEditable] = useState(false);
  const [layouts, setLayouts] = useState<any>(null);
  const [fontSize, setFontSize] = useState("text-lg");
  const [fontFamily, setFontFamily] = useState("font-sans");

  

  useEffect(() => {
    if (projects.length > 0) {
      const foundProject = projects.find((p) => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
        if (foundProject.layout) {
          setLayouts(foundProject.layout);
        }
      }
    }
  }, [projects, projectId]);

  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const onLayoutChange = (_: any, newLayouts: any) => {
    if (isEditable) {
      setLayouts(newLayouts);
    }
  };

  const renderContent = (item: any, index: number) => {
    switch (item.type) {
      case "image":
        return (
          <div className="relative w-full h-full">
            {isEditable && (
              <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
              </div>
            )}
            <img
              src={item.value}
              alt={`content ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        );
      case "text":
        return (
          <div className="relative w-full h-full">
            {isEditable && (
              <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
              </div>
            )}
            <div
              className={`p-4 overflow-y-auto h-full ${fontSize} ${fontFamily}`}
              dangerouslySetInnerHTML={{ __html: item.value }}
            />
          </div>
        );
      case "video":
        const videoId = getYouTubeVideoId(item.value);
        if (videoId) {
          return (
            <div className="relative w-full h-full">
              {isEditable && (
                <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
                </div>
              )}
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          );
        }
        return (
          <video
            src={item.value}
            controls
            className="w-full h-full rounded-lg"
          />
        );
      default:
        return null;
    }
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
          <h1 className="text-2xl font-bold text-destructive mb-2">
            Error Loading Project
          </h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground">
              The project you are looking for does not exist.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <p className="text-muted-foreground text-lg">
                {project.quick_description}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="inline-block bg-primary/10 text-primary px-3 py-1 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={isEditable ? "default" : "outline"}
                size="icon"
                onClick={() => setIsEditable(!isEditable)}
              >
                {isEditable ? (
                  <Save className="h-4 w-4" />
                ) : (
                  <Edit className="h-4 w-4" />
                )}
              </Button>
              {isEditable && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Export JSON</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Export Layout</DialogTitle>
                    </DialogHeader>
                    <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
                      <code className="text-white">
                        {JSON.stringify(layouts, null, 2)}
                      </code>
                    </pre>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>

          

          <ResponsiveGridLayout
            className={`layout ${isEditable ? "bg-muted/40 border border-dashed" : ""}`}
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={100}
            onLayoutChange={onLayoutChange}
            isDraggable={isEditable}
            isResizable={isEditable}
            draggableHandle=".drag-handle"
          >
            <div key="hero_media" className="bg-card rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl">
              {isEditable && (
                <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
                </div>
              )}
              <img src={project.hero_media} alt={project.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div key="overview" className="bg-card rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl">
              {isEditable && (
                <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
                </div>
              )}
              <div className="p-4">
                <h2 className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-2xl font-bold mb-2">{project.overview.title}</h2>
                <p className={`${fontSize} ${fontFamily}`}>{project.overview.text}</p>
              </div>
            </div>
            <div key="development" className="bg-card rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl">
              {isEditable && (
                <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
                </div>
              )}
              <div className="p-4">
                <h2 className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-2xl font-bold mb-2">{project.development.title}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.development.items.map((item: any, index: number) => (
                    <div key={index}>
                      {item.type === 'image' && <img src={item.value} alt="" className="w-full h-auto rounded-lg" />}
                      {item.type === 'text' && <p className={`${fontSize} ${fontFamily}`}>{item.value}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div key="final_result" className="bg-card rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl">
              {isEditable && (
                <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
                </div>
              )}
              <div className="p-4">
                <h2 className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-2xl font-bold mb-2">{project.final_result.title}</h2>
                {project.final_result.items.map((item: any, index: number) => (
                  <div key={index}>
                    {item.type === 'image' && <img src={item.value} alt="" className="w-full h-auto rounded-lg" />}
                    {item.type === 'text' && <p className={`${fontSize} ${fontFamily}`}>{item.value}</p>}
                    {item.type === 'list' && (
                      <ul className="list-disc list-inside">
                        {item.value.map((li: string, i: number) => (
                          <li key={i} className={`${fontSize} ${fontFamily}`}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div key="reflection" className="bg-card rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl">
              {isEditable && (
                <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
                </div>
              )}
              <div className="p-4">
                <h2 className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-2xl font-bold mb-2">{project.reflection.title}</h2>
                <p className={`${fontSize} ${fontFamily}`}>{project.reflection.text}</p>
              </div>
            </div>
          </ResponsiveGridLayout>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;