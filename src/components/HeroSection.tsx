import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(172 66% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(172 66% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary text-sm tracking-widest uppercase mb-6"
          >
            AI/ML Developer • Python Developer
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">Soham</span>
            <br />
            <span className="text-foreground">Bamane</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building intelligent systems with AI, ML & NLP.
            Passionate about turning data into actionable insights
            and creating scalable backend solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-5 mb-12"
          >
            <a
              href="https://github.com/sohambamane"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover-glow transition-all duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/in/sohambamane"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover-glow transition-all duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:sohambamane23@gmail.com"
              className="p-3 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover-glow transition-all duration-300"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="inline-block animate-float text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={28} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
