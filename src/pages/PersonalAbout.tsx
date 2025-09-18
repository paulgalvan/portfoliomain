import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PersonalAbout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow pt-20">
        <section id="about" className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-left">
                  <p className="text-lg leading-relaxed">
                    Hello!! I’m Paul Galvan, a rising senior at Tufts University studying Mechanical Engineering with a
                    minor in Human Factors Engineering. I’m passionate about tackling hands-on projects that blend 
                    creativity with technical skill, from building and experimenting to exploring new technologies and 
                    innovative solutions. I thrive in collaborative environments and love pushing the limits of what’s 
                    possible, whether in the lab, on a project, or on the field.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Outside of academics, I enjoy playing soccer, cooking for friends, and spending time with the people 
                    I care about. I founded the Mexican Culture Club (MCC) at Tufts to celebrate and share Mexican heritage,
                     and I’m also an active member of the Society of Hispanic Professional Engineers (SHPE) and BlackOut, Tufts’
                    step team. These experiences have strengthened my leadership, teamwork, and communication skills while allowing 
                    me to make meaningful connections across campus.
                   </p>
                   <p className="text-lg leading-relaxed">
                    When I’m not working on engineering projects or campus activities, I love exploring new ideas, learning new 
                    skills, and creating experiences that combine technical excellence with creativity.
                   </p>
                  <div className="pt-8">
                    <Link to="/">
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/Headshot_Paul_Galvan.jpeg"
                    alt="Placeholder for my picture"
                    className="rounded-lg border-2 border border-muted-foreground w-70 h-70"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalAbout;
