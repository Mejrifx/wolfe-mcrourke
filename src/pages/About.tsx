import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6">
        <article className="container mx-auto max-w-3xl animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 neon-glow-soft">
            ABOUT THE POET
          </h1>
          
          <div className="bg-card neon-border-soft rounded-lg p-8 md:p-12 space-y-6">
            <p className="font-body text-lg leading-relaxed text-foreground">
              Wolfe McRourke writes at the intersection of technology and humanity, 
              exploring the emotional landscape of our digital age through verse.
            </p>
            
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              Born in the shadow of skyscrapers and raised on the glow of screens, 
              their work reflects the neon-lit corridors of modern urban life—the 
              loneliness in crowds, the beauty in circuits, and the poetry hidden 
              in lines of code.
            </p>
            
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              Their poetry has been featured in various digital publications and 
              underground literary journals, always seeking to bridge the gap 
              between the analog heart and the digital mind.
            </p>
            
            <div className="pt-8 mt-8 border-t border-border">
              <h2 className="font-display text-2xl font-bold mb-4 text-primary">
                PHILOSOPHY
              </h2>
              <blockquote className="font-mono text-base italic border-l-2 border-primary pl-6 text-muted-foreground">
                "In every circuit, there's a soul. In every line of code, a story. 
                We are not separate from our technology—we are intertwined, co-authors 
                of a narrative written in electricity and emotion."
              </blockquote>
            </div>
            
            <div className="pt-8 mt-8 border-t border-border">
              <h2 className="font-display text-2xl font-bold mb-4 text-accent">
                INFLUENCES
              </h2>
              <p className="font-body text-base text-muted-foreground">
                Cyberpunk literature, urban exploration, late-night coding sessions, 
                the hum of city streets at 3 AM, science fiction, street photography, 
                and the quiet moments between notifications.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default About;
