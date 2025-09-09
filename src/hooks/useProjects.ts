import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Project {
  id: string;
  title: string;
  description: string;
  quick_description: string;
  takeaways?: string;
  duration?: string;
  images?: string[];
  gif_url?: string;
  tags: string[];
  is_featured: boolean;
  display_order: number;
  project_url?: string;
  github_url?: string;
  created_at: string;
  updated_at: string;
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

      const { data, error: supabaseError } = await supabase
        .from("projects")
        .select("*")
        .order("display_order", { ascending: true });

      if (supabaseError) {
        throw supabaseError;
      }

      setProjects(data || []);
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
      project.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  };

  // Filter projects by tags
  const getFilteredProjects = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      return projects;
    }
    
    return projects.filter(project =>
      selectedTags.every(tag => project.tags.includes(tag))
    );
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