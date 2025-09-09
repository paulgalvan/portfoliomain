-- Create projects table for portfolio
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  quick_description TEXT NOT NULL, -- for hover effect
  takeaways TEXT,
  duration TEXT,
  images TEXT[], -- array of image URLs
  gif_url TEXT, -- background gif for hover
  tags TEXT[] NOT NULL DEFAULT '{}',
  is_featured BOOLEAN DEFAULT false, -- for "best project" section
  display_order INTEGER DEFAULT 0,
  project_url TEXT, -- link to live project/demo
  github_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (no authentication required)
CREATE POLICY "Projects are publicly viewable" 
ON public.projects 
FOR SELECT 
USING (true);

-- Create policy for inserting projects (you can manage via Supabase dashboard)
CREATE POLICY "Enable insert for service role" 
ON public.projects 
FOR INSERT 
WITH CHECK (true);

-- Create policy for updating projects
CREATE POLICY "Enable update for service role" 
ON public.projects 
FOR UPDATE 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_projects_updated_at
    BEFORE UPDATE ON public.projects
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample projects to get started
INSERT INTO public.projects (title, description, quick_description, takeaways, duration, tags, is_featured, display_order, gif_url) VALUES
('LEGO Sorting System', 'An automated LEGO brick sorting system using computer vision and robotics', 'AI-powered LEGO brick sorting automation', 'Learned computer vision, robotics integration, and machine learning optimization', '3 months', ARRAY['lego', 'ai', 'robotics', 'python'], true, 1, 'https://example.com/lego-sorting.gif'),
('Portfolio Website', 'Modern portfolio website with dynamic project filtering and CMS integration', 'Interactive portfolio with smart filtering', 'Mastered React, Supabase, and modern web development practices', '2 weeks', ARRAY['react', 'typescript', 'supabase', 'web'], false, 2, 'https://example.com/portfolio.gif'),
('Data Visualization Dashboard', 'Interactive dashboard for analyzing complex datasets with real-time updates', 'Real-time data analytics platform', 'Advanced data visualization and real-time processing techniques', '6 weeks', ARRAY['data', 'visualization', 'dashboard', 'analytics'], true, 3, 'https://example.com/dashboard.gif');