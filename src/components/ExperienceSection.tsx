import { motion, useInView } from "framer-motion";
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
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              } pl-12 md:pl-0`}
            >
              {/* Dot */}
              <div
                className={`absolute left-2 md:left-auto ${
                  i % 2 === 0 ? "md:-right-[9px]" : "md:-left-[9px]"
                } top-2 w-4 h-4 rounded-full border-2 ${
                  exp.current
                    ? "bg-primary border-primary shadow-[0_0_12px_hsl(172_66%_50%/0.5)]"
                    : "bg-background border-muted-foreground/30"
                }`}
              />

              <div className="glass-card p-6 hover-glow">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} className="text-primary" />
                  <span className="font-mono text-xs text-primary">{exp.period}</span>
                  {exp.current && (
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
