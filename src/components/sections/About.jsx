import { motion } from "framer-motion";
import { MapPin, Award, ExternalLink } from "lucide-react";
import StatBox from "../ui/StatBox";
import { profile, stats, aboutContent } from "../../data/content";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <div className="aspect-square bg-bg-secondary rounded-2xl border border-border overflow-hidden transition-all duration-300 group-hover:border-accent-primary/50 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-hover/10" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    src="/pfp.png"
                    alt="Saturn On-Chain Logo"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-bg-tertiary border border-border rounded-xl px-4 py-3 flex items-center gap-2">
                <MapPin size={16} className="text-accent-primary" />
                <span className="text-sm text-text-secondary">
                  {profile.location}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-mono text-sm text-accent-primary uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-6">
              {aboutContent.headline}
            </h2>

            <div className="space-y-4 mb-8">
              {aboutContent.story.map((paragraph, i) => (
                <p key={i} className="text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {aboutContent.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Award
                    size={18}
                    className="text-accent-primary flex-shrink-0"
                  />
                  <span className="text-text-secondary">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-hover transition-colors"
            >
              <span className="font-medium">View full profile</span>
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, i) => (
            <StatBox
              key={i}
              value={stat.value}
              label={stat.label}
              delay={i * 100}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
