import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-slate-400 border-t border-border mt-12 glass">
        <p>© {new Date().getFullYear()} Chandan R. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
