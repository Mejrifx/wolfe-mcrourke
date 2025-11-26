import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PoemFeed from "@/components/PoemFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PoemFeed />
    </div>
  );
};

export default Index;
