import { motion } from 'framer-motion';
import { Heart, Repeat2, MessageCircle, ExternalLink } from 'lucide-react';

export default function Card({ item, index = 0, onClick }) {
  const typeIcons = {
    thread: '🧵',
    'case-study': '📊',
    visual: '🎨',
  };

  const typeColors = {
    thread: 'border-accent-primary/30',
    'case-study': 'border-accent-secondary/30',
    visual: 'border-purple-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={`
        group relative bg-bg-secondary border ${typeColors[item.type]} rounded-xl p-6 
        cursor-pointer transition-all duration-300 hover:border-accent-primary/50 
        hover:shadow-lg hover:shadow-accent-primary/10
      `}
    >
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ExternalLink size={16} className="text-text-muted" />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">{typeIcons[item.type]}</span>
        <span className="font-mono text-xs text-accent-primary uppercase tracking-wider">
          {item.type.replace('-', ' ')}
        </span>
      </div>

      {item.image && (
        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <h3 className="font-heading text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
        {item.title}
      </h3>

      {item.type !== 'visual' && (
        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
          {item.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className="font-mono text-xs px-2 py-1 bg-bg-tertiary rounded text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {item.type !== 'visual' && (
        <div className="flex items-center gap-4 text-text-muted text-sm">
          <span className="flex items-center gap-1">
            <Heart size={14} />
            {item.metrics.likes.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Repeat2 size={14} />
            {item.metrics.reposts.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={14} />
            {item.metrics.replies.toLocaleString()}
          </span>
        </div>
      )}

    </motion.div>
  );
}
