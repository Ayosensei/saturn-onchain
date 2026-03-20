import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { portfolioItems } from '../../data/content';

const filterTabs = [
  { id: 'all', label: 'All' },
  { id: 'thread', label: 'Threads' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'visual', label: 'Visuals' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === activeFilter);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-sm text-accent-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-2">
            Selected Work
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A collection of threads, case studies, and visual content that have resonated with the Web3 community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-accent-primary text-bg-primary'
                  : 'bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <Card key={item.id} item={item} index={index} />
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            <p>No items found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
