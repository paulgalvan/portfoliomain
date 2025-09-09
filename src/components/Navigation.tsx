import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Linkedin, Mail, Phone, FileDown, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("portfolio");
  const navigate = useNavigate();

  const handleConnectClick = (type: string) => {
    switch (type) {
      case "github":
        window.open("https://github.com/yourusername", "_blank");
        break;
      case "linkedin":
        window.open("https://linkedin.com/in/yourusername", "_blank");
        break;
      case "email":
        window.location.href = "mailto:your.email@example.com";
        break;
      case "phone":
        window.location.href = "tel:+1234567890";
        break;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Initials */}
          <Button
            variant="ghost"
            size="lg"
            className="text-2xl font-bold hover:bg-primary/10 rounded-full w-12 h-12 p-0"
            onClick={() => navigate("/")}
          >
            <img src="/favicon_io/android-chrome-512x512.png" alt="Logo" className="w-15 h-15" />
          </Button>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Button
              variant={activeTab === "portfolio" ? "default" : "ghost"}
              onClick={() => {
                setActiveTab("portfolio");
                scrollToSection("projects");
              }}
            >
              Portfolio
            </Button>

            <Button
              variant={activeTab === "resume" ? "default" : "ghost"}
              onClick={() => {
                setActiveTab("resume");
                navigate("/resume");
              }}
            >
              <FileDown className="w-4 h-4 mr-2" />
              Resume
            </Button>

            <Button
              variant={activeTab === "about" ? "default" : "ghost"}
              onClick={() => {
                setActiveTab("about");
                scrollToSection("about");
              }}
            >
              About
            </Button>

            {/* Connect Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  Connect
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-popover/95 backdrop-blur-sm">
                <DropdownMenuItem
                  onClick={() => handleConnectClick("github")}
                  className="cursor-pointer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleConnectClick("linkedin")}
                  className="cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleConnectClick("email")}
                  className="cursor-pointer"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleConnectClick("phone")}
                  className="cursor-pointer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Phone
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