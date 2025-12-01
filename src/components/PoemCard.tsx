import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

interface PoemCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
}

const PoemCard = ({ id, title, excerpt, date, category }: PoemCardProps) => {
  return (
    <Link 
      to={`/poem/${id}`}
      className="group block"
    >
      <article className="bg-card neon-border-soft rounded-lg p-6 h-full transition-all duration-500 hover:bg-card/80 hover:neon-border-accent hover:translate-y-[-4px]">
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-body tracking-widest uppercase bg-neon-lime/10 text-neon-lime rounded-full mb-4">
            {category}
          </span>
        )}
        
        <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3" />
            <time>{date}</time>
          </div>
          
          <div className="flex items-center gap-1 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-body tracking-wider uppercase">Read</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PoemCard;
