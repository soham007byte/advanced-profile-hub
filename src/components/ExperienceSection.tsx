import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Python Developer",
    company: "Mediprobe Pvt. Ltd.",
    location: "Pune, India",
    period: "Nov 2025 – Present",
    current: true,
    points: [
      "Developing Python-based backend systems for healthcare data workflows",
      "Building AI-integrated modules for automated data extraction using ML and NLP",
      "Developing RESTful APIs using Flask/Django for healthcare interfaces",
      "Implementing NLP and ML models for patient data pattern analysis",
    ],
  },
  {
    role: "AI ML Developer Intern",
    company: "Shavish HR Pvt. Ltd.",
    location: "Pune, India",
    period: "Mar 2025 – Oct 2025",
    current: false,
    points: [
      "Developed data processing workflows using Pandas and Excel",
      "Built intelligent reporting solutions with ML and NLP for trend analysis",
      "Created interactive dashboards for performance metrics monitoring",
    ],
  },
  {
    role: "Python Developer Intern",
    company: "Zplus Cyber Security",
    location: "Pune, Maharashtra",
    period: "Nov 2024 – Jan 2025",
    current: false,
    points: [
      "Automated extraction and preprocessing of cybersecurity datasets",
      "Created real-time threat monitoring dashboards with Power BI",
      "Built ML models to detect unusual patterns and potential threats",
    ],
  },
  {
    role: "Data Analysis Intern",
    company: "Worisgo Movidu",
    location: "Bangalore, Karnataka",
    period: "Jan 2024 – Aug 2024",
    current: false,
    points: [
      "Conducted risk assessments across business functions",
      "Analysed data with Python & Excel for financial and compliance risks",
      "Proposed mitigation strategies improving the company's risk profile",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="py-28 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Work <span className="text-gradient">History</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Static bg line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />
          {/* Animated progress line */}
          <motion.div
            className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 w-px bg-gradient-to-b from-primary to-accent"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              } pl-12 md:pl-0`}
            >
              {/* Animated dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 300 }}
                className={`absolute left-2 md:left-auto ${
                  i % 2 === 0 ? "md:-right-[9px]" : "md:-left-[9px]"
                } top-2 w-4 h-4 rounded-full border-2 ${
                  exp.current
                    ? "bg-primary border-primary shadow-[0_0_12px_hsl(172_66%_50%/0.5)]"
                    : "bg-background border-muted-foreground/30"
                }`}
              >
                {exp.current && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/40"
                    animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>

              <motion.div
                className="glass-card p-6 hover-glow relative overflow-hidden group"
                whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
              >
                {/* Hover border glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: "inset 0 0 30px hsl(172 66% 50% / 0.08)" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <motion.div whileHover={{ rotate: 20 }}>
                      <Briefcase size={16} className="text-primary" />
                    </motion.div>
                    <span className="font-mono text-xs text-primary">{exp.period}</span>
                    {exp.current && (
                      <motion.span
                        className="ml-auto px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Current
                      </motion.span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.company} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.2 + 0.4 + j * 0.08 }}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
