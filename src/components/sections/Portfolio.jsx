import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
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
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

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
            <Card 
              key={item.id} 
              item={item} 
              index={index} 
              onViewDetails={(project) => setSelectedProject(project)}
              onClick={() => {
                if (item.type === 'visual' && item.image) {
                  setSelectedImage(item.image);
                } else if (item.link) {
                  window.open(item.link, '_blank');
                }
              }}
            />
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            <p>No items found for this filter.</p>
          </div>
        )}

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-bg-secondary border border-border w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 md:p-10 relative cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 text-text-secondary hover:text-text-primary bg-bg-tertiary rounded-full transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs text-accent-primary uppercase tracking-wider px-3 py-1 bg-accent-primary/10 rounded-full">
                    Project Process
                  </span>
                  <span className="text-text-muted text-sm">{selectedProject.title}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] text-accent-primary uppercase tracking-[0.2em] opacity-80">01. Problem</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {selectedProject.thinking.problem}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] text-accent-primary uppercase tracking-[0.2em] opacity-80">02. Approach</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {selectedProject.thinking.approach}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] text-accent-primary uppercase tracking-[0.2em] opacity-80">03. Outcome</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {selectedProject.thinking.outcome}
                    </p>
                  </div>
                </div>

                {selectedProject.link && (
                  <div className="flex justify-center border-t border-border pt-8">
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent-primary text-bg-primary font-bold rounded-lg hover:bg-accent-hover transition-all group"
                    >
                      View Full {selectedProject.type === 'thread' ? 'Thread' : 'Project'}
                      <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 text-text-secondary hover:text-text-primary bg-bg-secondary rounded-full"
              >
                <X size={24} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                src={selectedImage}
                alt="Expanded view"
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
