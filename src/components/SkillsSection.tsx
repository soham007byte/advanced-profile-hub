import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              <div className={`p-3 rounded-lg ${group.bg} ${group.color} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <group.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
