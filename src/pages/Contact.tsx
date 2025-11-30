import Navbar from "@/components/Navbar";
import { Mail, Twitter, Github } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-3xl animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-8 neon-glow-soft">
            GET IN TOUCH
          </h1>
          
          <div className="bg-card neon-border-soft rounded-lg p-8 md:p-12">
            <p className="font-body text-lg leading-relaxed text-foreground mb-12">
              Have thoughts on a poem? Want to collaborate? Or just want to say hello? 
              Feel free to reach out through any of these channels.
            </p>
            
            <div className="space-y-6">
              <a 
                href="mailto:wolfe@neonverses.com"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg neon-border-soft hover:neon-border-accent transition-all duration-300 hover:bg-primary/5 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Email</h3>
                  <p className="font-body text-sm text-muted-foreground">wolfe@neonverses.com</p>
                </div>
              </a>
              
              <a 
                href="https://twitter.com/neonverses"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg neon-border-soft hover:neon-border-accent transition-all duration-300 hover:bg-accent/5 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Twitter className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Twitter</h3>
                  <p className="font-body text-sm text-muted-foreground">@neonverses</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/wolfemcrourke"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary rounded-lg neon-border-soft hover:neon-border-accent transition-all duration-300 hover:bg-neon-lime/5 group"
              >
                <div className="w-12 h-12 bg-neon-lime/10 rounded-lg flex items-center justify-center group-hover:bg-neon-lime/20 transition-colors">
                  <Github className="w-6 h-6 text-neon-lime" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">GitHub</h3>
                  <p className="font-body text-sm text-muted-foreground">@wolfemcrourke</p>
                </div>
              </a>
            </div>
            
            <div className="mt-12 pt-12 border-t border-border">
              <p className="font-body text-sm text-muted-foreground text-center italic">
                "In the digital night, every message is a light."
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
