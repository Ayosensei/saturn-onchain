import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Calendar,
  Send,
  CheckCircle,
} from "lucide-react";
import XLogo from "../ui/XLogo";
import Button from "../ui/Button";
import { contactInfo, profile } from "../../data/content";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const socialLinks = [
    { icon: XLogo, href: contactInfo.twitter, label: "Follow on X" },
    { icon: Mail, href: `mailto:${contactInfo.email}`, label: "Send an email" },
  ];

  return (
    <section id="contact" className="py-24 bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-accent-primary uppercase tracking-wider">
            Contact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mt-2">
            If your product is hard to explain<br />that’s where I come in
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can create content that actually moves the needle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-bg-secondary border border-border rounded-2xl p-8 mb-8">
              <h3 className="font-heading text-xl font-bold text-text-primary mb-6">
                Quick Connect
              </h3>

              <div className="space-y-4 mb-8">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-bg-tertiary rounded-xl hover:bg-bg-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                      <link.icon size={24} className="text-accent-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">
                        {link.label}
                      </div>
                      <div className="text-sm text-text-muted">
                        {link.href.includes("@")
                          ? link.href.replace("mailto:", "")
                          : link.href.replace("https://", "")}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href={contactInfo.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="large" icon={Calendar} className="w-full">
                  Schedule a Call
                </Button>
              </a>
            </div>

            <div className="bg-gradient-to-r from-accent-primary/10 to-accent-hover/10 border border-accent-primary/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calendar size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text-primary mb-1">
                    Prefer a direct approach?
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Send me a DM on X with a brief intro and I'll get back to
                    you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-bg-secondary border border-border rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-text-primary mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-primary/20 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-accent-primary" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-text-primary mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-text-secondary">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 bg-bg-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 bg-bg-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-secondary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-bg-tertiary border border-border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="large"
                    icon={Send}
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
