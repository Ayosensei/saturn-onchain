import { motion } from 'framer-motion';
import { Heart, Repeat2, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { portfolioItems, profile } from '../../data/content';

export default function Featured() {
  const featuredItem = portfolioItems.find(item => item.featured) || portfolioItems[0];

  return (
    <section className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-sm text-accent-primary uppercase tracking-wider">
            Featured Content
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-2">
            Latest from {profile.handle}
          </h2>
        </motion.div>

        <motion.a
          href={featuredItem.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="block bg-bg-secondary border border-border rounded-2xl p-8 md:p-12 hover:border-accent-primary/50 transition-all duration-300 group"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-hover flex items-center justify-center text-bg-primary font-bold">
                  🧵
                </div>
                <div>
                  <div className="font-semibold text-text-primary">{profile.name}</div>
                  <div className="text-sm text-text-muted">{profile.handle}</div>
                </div>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors">
                {featuredItem.title}
              </h3>

              <p className="text-text-secondary text-lg mb-6">
                {featuredItem.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredItem.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs px-3 py-1 bg-bg-tertiary rounded-full text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-text-muted">
                <span className="flex items-center gap-2">
                  <Heart size={18} />
                  {featuredItem.metrics.likes.toLocaleString()}
                </span>
                <span className="flex items-center gap-2">
                  <Repeat2 size={18} />
                  {featuredItem.metrics.reposts.toLocaleString()}
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle size={18} />
                  {featuredItem.metrics.replies.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="lg:w-64 flex items-center">
              <div className="w-full h-full min-h-[200px] bg-bg-tertiary rounded-xl flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">🧵</div>
                  <p className="text-text-muted text-sm">
                    View full thread on X
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-2 text-accent-primary">
              <span className="text-sm font-medium">Read the full thread</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <ExternalLink size={18} className="text-text-muted" />
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8"
        >
          <a href={profile.twitter} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" icon={ExternalLink}>
              Follow on X for more insights
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
