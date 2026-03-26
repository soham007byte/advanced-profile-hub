import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-gradient">Background</span> & Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Computer Science graduate specializing in Data Science with a strong passion
              for building AI-powered solutions. With hands-on experience in Python development,
              machine learning, and NLP, I focus on creating intelligent systems that solve
              real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              Currently working as a Python Developer at Mediprobe Pvt. Ltd., building AI-integrated
              modules for healthcare data workflows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">B.E. Computer Science Engineering</h3>
                <p className="text-primary font-mono text-sm mt-1">Specialization: Data Science</p>
              </div>
            </div>
            <p className="text-muted-foreground font-medium">
              Dr D.Y. Patil College of Engineering, Kolhapur
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> 2024</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> Kolhapur</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-mono font-semibold">
                CGPA: 8/10
              </span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Machine Learning", "Deep Learning", "EDA", "OOP", "DBMS"].map((c) => (
                <span key={c} className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
