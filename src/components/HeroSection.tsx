import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const roles = ["AI/ML Developer", "Python Developer", "NLP Engineer", "Data Scientist"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 150, damping: 20 });

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: 0.8 + i * 0.05, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] as const },
    }),
  };

  const nameText = "Soham";
  const lastText = "Bamane";

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          }}
          animate={{
            y: [null, Math.random() * -600],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(172 66% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(172 66% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Typewriter role */}
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="font-mono text-primary text-sm tracking-widest uppercase mb-6 h-6"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-primary"
            >
              |
            </motion.span>
          </motion.p>

          {/* 3D letter-by-letter name reveal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6" style={{ perspective: "600px" }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-foreground"
            >
              Hi, I'm{" "}
            </motion.span>
            <span className="text-gradient inline-block">
              {nameText.split("").map((char, i) => (
                <motion.span
                  key={`name-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  whileHover={{ scale: 1.2, color: "hsl(262 60% 58%)", transition: { duration: 0.2 } }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <br />
            <span className="text-foreground inline-block">
              {lastText.split("").map((char, i) => (
                <motion.span
                  key={`last-${i}`}
                  custom={i + nameText.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  whileHover={{ scale: 1.2, y: -5, transition: { duration: 0.2 } }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building intelligent systems with AI, ML & NLP.
            Passionate about turning data into actionable insights
            and creating scalable backend solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex items-center justify-center gap-5 mb-12"
          >
            {[
              { href: "https://github.com/sohambamane", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/sohambamane", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:sohambamane23@gmail.com", icon: Mail, label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.15, boxShadow: "0 0 25px hsl(172 66% 50% / 0.3)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + i * 0.1 }}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="inline-block text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ y: 5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={28} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
