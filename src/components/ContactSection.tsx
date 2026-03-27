import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "sohambamane23@gmail.com", href: "mailto:sohambamane23@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 93095 13254", href: "tel:+919309513254" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sohambamane", href: "https://linkedin.com/in/sohambamane" },
  { icon: Github, label: "GitHub", value: "github.com/sohambamane", href: "https://github.com/sohambamane" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-muted-foreground text-lg max-w-lg mx-auto"
          >
            Open to new opportunities and collaborations. Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 0 40px -10px hsl(172 66% 50% / 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-6 flex items-center gap-4 group"
            >
              <motion.div
                className="p-3 rounded-lg bg-primary/10 text-primary"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <link.icon size={22} />
              </motion.div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{link.label}</p>
                <p className="text-foreground font-medium truncate">{link.value}</p>
              </div>
              <motion.div
                className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
                whileHover={{ x: 3, y: -3 }}
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
