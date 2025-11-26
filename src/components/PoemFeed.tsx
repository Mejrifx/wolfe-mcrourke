import PoemCard from "./PoemCard";

const poems = [
  {
    id: "digital-rain",
    title: "Digital Rain",
    excerpt: "Pixels fall like cherry blossoms\nIn the neon garden of my screen\nEach one a memory, fleeting\nIn the electric dream",
    date: "2024-11-15",
    category: "Urban Tech"
  },
  {
    id: "midnight-circuit",
    title: "Midnight Circuit",
    excerpt: "The city hums with electric veins\nPulsing through concrete arteries\nWe are all connected in this maze\nOf light and shadow intertwined",
    date: "2024-11-10",
    category: "City Life"
  },
  {
    id: "neon-solitude",
    title: "Neon Solitude",
    excerpt: "Alone beneath a thousand signs\nEach glow a promise never kept\nThe city whispers in colors bright\nYet silence speaks the loudest here",
    date: "2024-11-05",
    category: "Reflection"
  },
  {
    id: "silicon-dreams",
    title: "Silicon Dreams",
    excerpt: "In the heart of the machine\nWhere data flows like blood\nI found a ghost of who we were\nBefore the lights came on",
    date: "2024-10-28",
    category: "Technology"
  },
  {
    id: "urban-haiku",
    title: "Urban Haiku Series",
    excerpt: "Subway winds rush past\nThousand faces, countless lives\nOne heartbeat echoes",
    date: "2024-10-20",
    category: "Haiku"
  },
  {
    id: "after-hours",
    title: "After Hours",
    excerpt: "When the city sleeps, it dreams\nOf quieter times and softer lights\nBut even in repose it glows\nA beast that never truly rests",
    date: "2024-10-12",
    category: "Night"
  }
];

const PoemFeed = () => {
  return (
    <section id="poems" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 neon-glow-soft">
            LATEST VERSES
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of humanity and technology through the lens of poetry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {poems.map((poem, index) => (
            <div 
              key={poem.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PoemCard {...poem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoemFeed;
