import heroCityscape from "@/assets/hero-cityscape.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroCityscape})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in -translate-y-16 md:-translate-y-20">
        <div className="flex justify-center mb-3">
          <img 
            src="/Wolfe MCR Logo.png" 
            alt="Wolfe MCR Logo" 
            className="max-w-[400px] md:max-w-[600px] w-full h-auto object-contain"
          />
        </div>
        <p className="font-body text-xl md:text-2xl text-muted-foreground mb-5 max-w-2xl mx-auto leading-relaxed">
          Poetry illuminated by the glow of the digital night
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#poems"
            className="px-8 py-4 bg-card neon-border-green rounded-lg font-body text-sm tracking-widest uppercase transition-all duration-500 hover:bg-neon-lime/10 hover:animate-glow-pulse"
          >
            Explore Poems
          </a>
          <a
            href="/about"
            className="px-8 py-4 bg-card neon-border-accent rounded-lg font-body text-sm tracking-widest uppercase transition-all duration-500 hover:bg-accent/10"
          >
            About the Poet
          </a>
        </div>
      </div>
      
      {/* Subtle atmospheric element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
