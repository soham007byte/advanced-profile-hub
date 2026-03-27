import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Brain, Layers, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["Python", "HTML", "CSS"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: ["NLP", "LLM", "Log Analysis", "Pattern Recognition", "Anomaly Detection"],
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Layers,
    title: "Frameworks",
    skills: ["Flask", "Django", "Pandas", "NumPy"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Power BI", "Jupyter Notebook", "GitHub", "VSCode"],
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ group, index, inView }: { group: typeof skillGroups[0]; index: number; inView: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card p-6 hover-glow group relative overflow-hidden"
      style={{ perspective: "800px" }}
    >
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        initial={{ x: "-100%" }}
        animate={hovered ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative z-10">
        <motion.div
          className={`p-3 rounded-lg ${group.bg} ${group.color} w-fit mb-4`}
          animate={hovered ? { rotate: [0, -10, 10, 0], scale: 1.15 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <group.icon size={24} />
        </motion.div>
        <h3 className="text-lg font-semibold text-foreground mb-4">{group.title}</h3>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, j) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.12 + 0.3 + j * 0.06, type: "spring", stiffness: 400, damping: 15 }}
              whileHover={{ scale: 1.15, y: -3, boxShadow: "0 4px 15px hsl(172 66% 50% / 0.2)" }}
              className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
