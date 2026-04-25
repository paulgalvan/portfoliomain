'use client';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Youtube, FileText } from "lucide-react";

export default function PersonalAbout() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* ── 1. Intro Section ────────────────────────────────────────────────── */}
        <section className="py-24 border-b border-border">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="/Headshot_Paul_Galvan.jpeg" 
                  alt="Paul Galvan"
                  className="rounded-lg border border-border w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tight">I'm Paul Galvan.</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm a senior at Tufts University studying Mechanical Engineering with a minor in Human Factors Engineering.
                </p>
                <div className="space-y-4 text-muted-foreground/80 leading-relaxed">
                  <p>
                    I’m interested in robotics, prototyping, and hands-on design work that turns ideas into functional systems. My projects reflect a mix of mechanical design, iteration, and problem solving, with a focus on building things that are both technically strong and thoughtfully designed.
                  </p>
                  <p>
                    My journey has been shaped by diverse experiences, from manufacturing at P&G Gillette to academic research at Tufts. I thrive in environments where mechanical complexity meets user-centered needs, bridging the gap between hardware performance and human interaction.
                  </p>
                  <p>
                    Whether I’m working on a robotics project, refining a prototype, or learning a new tool, I’m motivated by the process of making ideas real and improving them through iteration. I enjoy tackling the "hard" problems - the ones that require both physical intuition and rigorous engineering analysis.
                  </p>
                </div>
                <div className="pt-6 flex gap-4">
                  <Link href="/">
                    <Button variant="outline" className="gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Back to Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Media Embeds ─────────────────────────────────────────────────── */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 max-w-6xl text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Media</h2>
            <p className="text-muted-foreground">Perspectives and contributions within the Tufts engineering community :) </p>
          </div>
          
          <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-12">
            {/* YouTube Embed */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                <Youtube className="w-4 h-4 text-red-600" />
                Tufts Engineering Feature
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-md">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/zJvSo-LeatI" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Issuu Embed */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                <FileText className="w-4 h-4" />
                Publication: Jumbo Engineer
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border border-border shadow-md bg-white">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://e.issuu.com/embed.html?u=tuftsadmissions&d=jumbo_engineer_-_summer_2025" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Visual Journey Sections ────────────────────────────────────────── */}
        <div className="space-y-0">
          {/* Section: Electrician */}
          

          {/* Section: Community & Leadership */}
          <section className="py-24 border-b border-border bg-muted/10">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-video rounded-lg border border-border overflow-hidden relative bg-muted/20 flex items-center justify-center italic text-xs text-muted-foreground">
                    <img src="/images/CL.jpg" alt="Mexican Culture Club" className="object-cover w-full h-full" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Community & Leadership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe strong community is just as important as my degree. Engineering is most impactful when built within a strong community. I founded the Mexican Culture Club at Tufts to create space for celebrating heritage on campus, to create a home away from home. I’m also an active member of SOLES (Society of Latinx Engineers and Scientists) where I have gone to SHPE conferences to network and learn. Those experiences have strengthened my leadership and communication skills in ways that directly carry into how I approach technical collaboration.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Soccer */}
          <section className="py-24 border-b border-border">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Balance on the Field</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Outside of academics, soccer is my primary outlet. I have played all my life and I think it is also where I have learned so much about communication. I think staying physically active is also important, especially with the high demands engineering brings.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="aspect-video rounded-lg border border-border overflow-hidden relative bg-muted/20 flex items-center justify-center italic text-xs text-muted-foreground">
                    <img src="/images/soc.jpg" alt="Playing soccer" className="object-cover w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Cooking */}
          <section className="py-24 border-b border-border bg-muted/10">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-video rounded-lg border border-border overflow-hidden relative bg-muted/20 flex items-center justify-center italic text-xs text-muted-foreground">
                    <img src="/images/cook.jpg" alt="Cooking" className="object-cover w-full h-full" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Cooking</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I love cooking for friends and family, and also do it as a way to destress. It’s a process that is surprisingly similar to engineering, and my Mexican background, with my mom's traditional homemade recipes, and my dad's cook experience, I learned to love food. Once I understood the basics, and how flavors compliment each other, I iterate through a lot of recipes and always have my own twist to it. 
                  </p>
                </div>
              </div>
            </div>
          </section>


        </div>

        {/* ── Closing CTA ────────────────────────────────────────────────────── */}
        <section className="py-24 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Let's build something together.</h2>
            <p className="text-primary-foreground/80 mb-10 leading-relaxed text-lg">
              I'm always excited to share ideas, collaborate on projects, or simply chat about engineering, robotics, and leadership!
            </p>
            <div className="flex justify-center gap-4">
              <a href="mailto:paul.galvan@tufts.edu">
                <Button size="lg" variant="secondary" className="font-semibold text-primary">
                  Send an Email
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/paul-galvan/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}