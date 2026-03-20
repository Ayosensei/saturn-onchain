import { motion } from "framer-motion";
import {
  PenTool,
  TrendingUp,
  Shield,
  Zap,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { services } from "../../data/content";

const iconMap = {
  PenTool,
  TrendingUp,
  Shield,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent-primary uppercase tracking-wider">
            Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-2">
            What I Offer
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Strategic content solutions tailored for Web3 projects looking to
            build authority and drive engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Zap;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-bg-secondary border border-border rounded-2xl p-8 hover:border-accent-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-hover/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-accent-primary" />
                </div>

                <h3 className="font-heading text-xl font-bold text-text-primary mb-3">
                  {service.title}
                </h3>

                <p className="text-text-secondary mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-text-muted"
                    >
                      <svg
                        className="w-4 h-4 text-accent-primary flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="font-mono text-accent-primary font-medium">
                    {service.price}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-bg-secondary border border-border rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-hover flex items-center justify-center">
                <MessageSquare size={32} className="text-bg-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-text-primary">
                  Need something custom?
                </h3>
                <p className="text-text-secondary">
                  Let's discuss your specific requirements.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-accent-primary text-bg-primary font-medium rounded-lg hover:bg-accent-hover transition-colors whitespace-nowrap"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
