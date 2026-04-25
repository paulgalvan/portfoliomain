'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img src="/favicon_io/android-chrome-512x512.png" alt="Paul Galvan" className="w-10 h-10" />
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/#projects"
              className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Featured
            </Link>

            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors ${pathname === "/projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              All Work
            </Link>

            <Link
              href="/resume"
              className={`text-sm font-medium transition-colors ${pathname === "/resume" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Resume
            </Link>

            <Link
              href="/personal-about"
              className={`text-sm font-medium transition-colors ${pathname === "/personal-about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1.5">
                  Connect
                  <ChevronDown className="w-3.5 h-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem asChild>
                  <a href="https://github.com/paulgalvan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="https://www.linkedin.com/in/paul-galvan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 cursor-pointer">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="mailto:paul.galvan@tufts.edu" className="flex items-center gap-2 cursor-pointer">
                    <Mail className="w-4 h-4" /> Email
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
