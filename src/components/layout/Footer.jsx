import { Github } from 'lucide-react';
import XLogo from '../ui/XLogo';
import { profile, contactInfo } from '../../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-hover flex items-center justify-center">
              <XLogo size={16} className="text-bg-primary" />
            </div>
            <span className="font-heading font-semibold text-text-primary">
              {profile.handle}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={contactInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              <XLogo size={20} />
            </a>
            <a
              href="https://github.com/Ayosensei"
              target="_blank"
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-text-muted hover:text-accent-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

          <p className="text-sm text-text-muted">
            © {currentYear} {profile.handle}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
