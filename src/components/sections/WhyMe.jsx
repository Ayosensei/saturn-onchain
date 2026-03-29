import { motion } from 'framer-motion';
import { whyMeContent } from '../../data/content';

export default function WhyMe() {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden border-y border-border/50">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-primary uppercase tracking-[0.3em] mb-8 block">
            {whyMeContent.title}
          </span>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-8">
            {whyMeContent.subtitle}
            <br />
            <span className="text-gradient block mt-2">
              {whyMeContent.emphasis}
            </span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <div className="h-[1px] w-12 bg-border invisible sm:visible" />
            <p className="text-xl md:text-2xl text-text-secondary font-medium tracking-wide">
              {whyMeContent.focus}
            </p>
            <div className="h-[1px] w-12 bg-border invisible sm:visible" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
