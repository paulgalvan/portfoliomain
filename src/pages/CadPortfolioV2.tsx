import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useProjects, Project } from "@/hooks/useProjects";
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

const CadPortfolioV2: React.FC = () => {
  const { projects, loading, error } = useProjects();
  const [cadProject, setCadProject] = useState<Project | null>(null);
  const [isEditable, setIsEditable] = useState(false);
  const [layouts, setLayouts] = useState<any>(null);
  const [fontSize, setFontSize] = useState("text-lg");
  const [fontFamily, setFontFamily] = useState("font-sans");

  useEffect(() => {
    if (projects.length > 0) {
      const foundProject = projects.find((p) => p.id === "Lego-Simple-Robotics");
      if (foundProject) {
        setCadProject(foundProject);
        if (foundProject.layout) {
          setLayouts(foundProject.layout);
        }
      }
    }
  }, [projects]);

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
      case "overview": // Special handling for overview
        return (
          <div className="relative w-full h-full">
            {isEditable && (
              <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
              </div>
            )}
            <div className="p-4">
              <h2 className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-2xl font-bold mb-2">{item.title}</h2>
              <p className={`${fontSize} ${fontFamily}`}>{item.text}</p>
            </div>
          </div>
        );
      case "project_item": // Special handling for project items within the collection
        return (
          <div className="relative w-full h-full group">
            {isEditable && (
              <div className="drag-handle absolute top-2 right-2 p-2 bg-gray-800 rounded-full cursor-move z-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6l-4-4-4 4M18 18l-4 4-4-4M6 18l-4-4 4-4M6 6l-4 4 4 4"/></svg>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              {item.image && <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg mb-2 transition-opacity duration-300 ease-in-out group-hover:opacity-0" />} 
              {item.gif && <img src={item.gif} alt={item.title} className="w-full h-auto rounded-lg mb-2 absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />} 
              <p className={`text-gray-700 ${fontSize}`}>{item.description}</p>
            </div>
          </div>
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
            Error Loading CAD Portfolio
          </h1>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (!cadProject) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold mb-4">CAD Portfolio V2 Not Found</h1>
            <p className="text-muted-foreground">
              The CAD Portfolio project could not be loaded.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Fallback for projects without a layout defined (similar to ProjectDetail)
  if (!layouts) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow pt-20">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{cadProject.title}</h1>
            <p className="text-muted-foreground mb-8">{cadProject.quick_description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cadProject.content?.map((item: any, index: number) => {
                switch (item.type) {
                  case 'image':
                    return <img key={index} src={item.value} alt="" className={`h-auto rounded-lg mx-auto ${item.size || 'max-w-xl'}`} />;
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
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      );
                    }
                    return <video key={index} src={item.value} controls className="w-full h-auto rounded-lg" />;
                  case 'overview':
                    return (
                      <div key={index}>
                        <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-lg">{item.text}</p>
                      </div>
                    );
                  case 'project_item':
                    return (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        {item.image && <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg mb-2" />} 
                        <p className={`text-gray-700 ${fontSize}`}>{item.description}</p>
                      </div>
                    );
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
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-4xl font-bold">LEGO Simple Robotics</h1>
              <p className="text-muted-foreground text-lg">
                {cadProject.quick_description}
              </p>
              {cadProject.tags && cadProject.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cadProject.tags.map((tag: string) => (
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
            {cadProject.content?.map((item: any) => (
              <div key={item.id} className="bg-card rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-xl">
                {renderContent(item, item.id)}
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CadPortfolioV2;