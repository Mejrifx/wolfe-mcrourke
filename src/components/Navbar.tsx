import { Link, useLocation } from "react-router-dom";
import { BookOpen, User, Mail } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-display text-2xl font-bold tracking-wider neon-glow-soft hover:neon-glow-accent transition-all duration-500"
          >
            NEON VERSES
          </Link>
          
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`flex items-center gap-2 font-body text-sm tracking-wide transition-all duration-300 hover:text-primary ${
                isActive("/") ? "text-primary neon-glow-soft" : "text-foreground"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              POEMS
            </Link>
            
            <Link
              to="/about"
              className={`flex items-center gap-2 font-body text-sm tracking-wide transition-all duration-300 hover:text-accent ${
                isActive("/about") ? "text-accent neon-glow-accent" : "text-foreground"
              }`}
            >
              <User className="w-4 h-4" />
              ABOUT
            </Link>
            
            <Link
              to="/contact"
              className={`flex items-center gap-2 font-body text-sm tracking-wide transition-all duration-300 hover:text-neon-lime ${
                isActive("/contact") ? "text-neon-lime" : "text-foreground"
              }`}
            >
              <Mail className="w-4 h-4" />
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
