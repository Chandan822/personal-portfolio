import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Mail, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const Contact = () => {
  return (
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Interested in collaborating or have an opportunity in mind? I'd love to hear from you." 
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          <GlassCard>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href="#" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="p-3 bg-surface rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <p className="font-medium">chandan@example.com</p>
                </div>
              </a>
              
              <a href="https://github.com/Chandan822" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="p-3 bg-surface rounded-xl group-hover:bg-primary/20 transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">GitHub</p>
                  <p className="font-medium">Chandan822</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/Chandan R" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group">
                <div className="p-3 bg-surface rounded-xl group-hover:bg-primary/20 transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                  <p className="font-medium">Chandan R</p>
                </div>
              </a>
            </div>
          </GlassCard>

          <GlassCard>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <Button className="w-full" type="submit">
                <Send size={18} /> Send Message
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
