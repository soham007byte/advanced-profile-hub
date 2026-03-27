import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Brain, ScanFace } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "IntelliLogAI",
    subtitle: "Predictive Error Detection & Root Cause Analysis",
    description:
      "An AI background agent that monitors application behaviour and runtime logs. Features NLP-driven log intelligence for anomaly detection, error clustering, and predictive analytics using historical patterns.",
    tags: ["Python", "NLP", "Log Analysis", "Root Cause Analysis", "Time-Series"],
    github: "https://github.com/sohambamane",
    color: "from-primary/20 to-accent/20",
  },
  {
    icon: ScanFace,
    title: "Advanced Attendance System",
    subtitle: "Face Recognition Powered Attendance",
    description:
      "An intelligent attendance system using Face Recognition for real-time tracking via OpenCV and ML models. Automates detection and logging with a user-friendly interface for manual or automatic entry.",
    tags: ["Python", "Machine Learning", "OpenCV", "Face Recognition"],
    github: "https://github.com/sohambamane",
    color: "from-accent/20 to-primary/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group glass-card overflow-hidden hover-glow relative"
    >
      {/* Spotlight follow cursor */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, hsl(172 66% 50% / 0.08), transparent 40%)`,
        }}
      />

      {/* Animated header gradient */}
      <motion.div
        className={`h-2 bg-gradient-to-r ${project.color}`}
        whileHover={{ scaleY: 2 }}
        transition={{ duration: 0.3 }}
      />

      <div className="p-8 relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="p-3 rounded-lg bg-primary/10 text-primary"
            whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <project.icon size={28} />
          </motion.div>
          <div className="flex gap-3">
            {[
              { href: project.github, icon: Github },
              { href: project.github, icon: ExternalLink },
            ].map((link, j) => (
              <motion.a
                key={j}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
        <p className="text-primary font-mono text-sm mb-4">{project.subtitle}</p>
        <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, j) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.5 + j * 0.06 }}
              whileHover={{ scale: 1.1, y: -2, boxShadow: "0 4px 12px hsl(172 66% 50% / 0.15)" }}
              className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-mono font-medium cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
