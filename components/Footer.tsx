import React from 'react';
import { Section, Grid } from './ui/Section';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-textMain border-t border-white/5">
      <Section className="py-20 md:py-32">
        <Grid>
          <div className="col-span-4 md:col-span-4 lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 bg-textMuted rounded-full"></span>
                <span className="font-semibold tracking-tighter text-lg">Dataknac</span>
              </div>
              <p className="text-textMuted max-w-xs text-sm leading-relaxed">
                Strategic intelligence for organizations that demand precision over noise. Designing the future of decision architecture.
              </p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-2 lg:col-start-7">
            <h4 className="font-mono text-xs uppercase text-textMuted mb-6 tracking-wider">Context</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Methodology</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Perspectives</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <h4 className="font-mono text-xs uppercase text-textMuted mb-6 tracking-wider">System</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Status</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Legal</a></li>
            </ul>
          </div>

          <div className="col-span-4 md:col-span-4 lg:col-span-2">
            <h4 className="font-mono text-xs uppercase text-textMuted mb-6 tracking-wider">Connect</h4>
             <ul className="space-y-4">
              <li><a href="#" className="text-sm hover:text-white transition-colors flex items-center gap-1 group">LinkedIn <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors flex items-center gap-1 group">X / Twitter <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors flex items-center gap-1 group">Email <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/></a></li>
            </ul>
          </div>
        </Grid>
        
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="text-xs text-textMuted font-mono">© 2024 Dataknac Inc. All Rights Reserved.</span>
            <span className="text-xs text-textMuted font-mono">London • New York • Tokyo</span>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;