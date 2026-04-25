import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import projectsData from "@/data/projects.json";

export interface Project {
  id: string;
  title: string;
  description?: string;
  quick_description: string;
  takeaways?: string;
  duration?: string;
  images?: string[];
  gif_url?: string;
  hero_media?: string;
  tags: string[];
  is_featured: boolean;
  display_order: number;
  project_url?: string;
  github_url?: string;
  created_at?: string;
  updated_at?: string;
  content?: any[];
  layout?: any;
  notion_url?: string;
  notion_iframe_url?: string;
  processedContent?: any[];
  processedContentPath?: string;
  overview?: { title?: string; text?: string };
  development?: { title?: string; items?: any[] };
  final_result?: { title?: string; items?: any[] };
  reflection?: { text?: string; items?: any[] };
}

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load directly from the bundled JSON - no artificial delay needed
      const processedProjects = projectsData.map(project => {
        // Prioritize existing 'images' array, otherwise look in 'content'
        const existingImages = project.images && project.images.length > 0 ? project.images : [];
        const firstImageFromContent = existingImages.length === 0 ? project.content?.find(item => item.type === 'image') : undefined;

        return {
          ...project,
          images: existingImages.length > 0 ? existingImages : (firstImageFromContent ? [firstImageFromContent.value] : []),
        };
      });

      setProjects(processedProjects || []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch projects";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Get all unique tags from projects
  const getAllTags = () => {
    const tagSet = new Set<string>();
    projects.forEach(project => {
      if (project.tags) {
        project.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  };

  // Filter projects by tags
  const getFilteredProjects = (selectedTags: string[]) => {
    let filtered = projects;

    if (selectedTags.length > 0) {
      filtered = projects.filter(project =>
        selectedTags.every(tag => project.tags.includes(tag))
      );
    }

    return filtered.sort((a, b) => {
      if (a.is_featured && !b.is_featured) return -1;
      if (!a.is_featured && b.is_featured) return 1;
      return a.display_order - b.display_order;
    });
  };

  // Get featured projects
  const getFeaturedProjects = () => {
    return projects.filter(project => project.is_featured);
  };

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
    getAllTags,
    getFilteredProjects,
    getFeaturedProjects,
  };
};