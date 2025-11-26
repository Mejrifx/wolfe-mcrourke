import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";

const poemData: Record<string, { title: string; content: string; date: string; category: string }> = {
  "digital-rain": {
    title: "Digital Rain",
    date: "2024-11-15",
    category: "Urban Tech",
    content: `Pixels fall like cherry blossoms
In the neon garden of my screen
Each one a memory, fleeting
In the electric dream

Lines of code cascade
Through silicon valleys deep
Where data rivers flow
And secrets never sleep

We swim in streams of light
Binary fish in digital seas
Chasing phantom shadows
Of what we used to be

The rain keeps falling
One and zero
Zero and one
Until the program's done`
  },
  "midnight-circuit": {
    title: "Midnight Circuit",
    date: "2024-11-10",
    category: "City Life",
    content: `The city hums with electric veins
Pulsing through concrete arteries
We are all connected in this maze
Of light and shadow intertwined

Street lamps flicker morse code messages
To those who still remember how to listen
Each corner holds a story
Written in neon hieroglyphs

The subway rumbles deep below
A heartbeat in the urban chest
While overhead the towers reach
For stars they'll never touch

We walk these circuits endlessly
Nodes in a vast network
Of dreams and disappointments
Powered by hope and coffee fumes`
  },
  "neon-solitude": {
    title: "Neon Solitude",
    date: "2024-11-05",
    category: "Reflection",
    content: `Alone beneath a thousand signs
Each glow a promise never kept
The city whispers in colors bright
Yet silence speaks the loudest here

In crowds we find our loneliness
Among the many, we are few
The neon burns but gives no warmth
Just light to see what we've become

A million windows glow at night
Each one a life I'll never know
We share this space but not our souls
Connected yet apart we grow

The signs blink on, the signs blink off
A rhythm to our isolation
In this electric wilderness
We search for constellations`
  },
  "silicon-dreams": {
    title: "Silicon Dreams",
    date: "2024-10-28",
    category: "Technology",
    content: `In the heart of the machine
Where data flows like blood
I found a ghost of who we were
Before the lights came on

Motherboards like city maps
Processors thinking faster
Than any human mind could match
Yet somehow still we master

The code we write defines us now
Our legacy in syntax
Every function, every loop
A monument to what lasts

But in the quiet server rooms
When cooling fans fall silent
I hear an echo of the past
Analog and defiant`
  },
  "urban-haiku": {
    title: "Urban Haiku Series",
    date: "2024-10-20",
    category: "Haiku",
    content: `Subway winds rush past
Thousand faces, countless lives
One heartbeat echoes

---

Neon signs reflect
In puddles after rainfall
Double city lights

---

Coffee shop at dawn
Steam rises, conversations
Day begins again

---

Skyscraper shadows
Stretch across the morning streets
Giants standing guard

---

Late night taxi ride
City lights blur into stars
Going nowhere fast`
  },
  "after-hours": {
    title: "After Hours",
    date: "2024-10-12",
    category: "Night",
    content: `When the city sleeps, it dreams
Of quieter times and softer lights
But even in repose it glows
A beast that never truly rests

The all-night diners keep their vigil
Fluorescent shrines to insomnia
Where truckers and philosophers
Share tables and their tired thoughts

Street cleaners sweep away the day
While shift workers start anew
The city's rhythm never stops
Just changes tempo, shifts its crew

In penthouse suites the wealthy sleep
In doorways, others find their rest
The same moon watches over all
This breathing, glowing urban nest`
  }
};

const Poem = () => {
  const { id } = useParams<{ id: string }>();
  const poem = id ? poemData[id] : null;

  if (!poem) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Poem Not Found</h1>
            <Link to="/" className="text-primary hover:underline">
              Return to home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6">
        <article className="container mx-auto max-w-3xl animate-fade-in">
          <Link 
            to="/#poems"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8 font-body text-sm tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO POEMS
          </Link>
          
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-body tracking-widest uppercase bg-primary/10 text-primary rounded-full mb-4">
              {poem.category}
            </span>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 neon-glow-soft">
              {poem.title}
            </h1>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
              <Calendar className="w-4 h-4" />
              <time>{poem.date}</time>
            </div>
          </div>
          
          <div className="bg-card neon-border-soft rounded-lg p-8 md:p-12">
            <pre className="font-mono text-base md:text-lg leading-relaxed whitespace-pre-wrap text-foreground">
              {poem.content}
            </pre>
          </div>
          
          <div className="mt-12 pt-12 border-t border-border">
            <p className="font-body text-muted-foreground text-center italic">
              Written by Wolfe McRourke
            </p>
          </div>
        </article>
      </main>
    </>
  );
};

export default Poem;
