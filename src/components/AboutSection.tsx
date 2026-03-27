import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              <span className="text-gradient">Background</span> & Education
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
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
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              style={{ y: parallaxY }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap size={24} />
                  </motion.div>
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
                  <motion.span
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary font-mono font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    CGPA: 8/10
                  </motion.span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Machine Learning", "Deep Learning", "EDA", "OOP", "DBMS"].map((c, i) => (
                    <motion.span
                      key={c}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.08, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium cursor-default"
                    >
                      {c}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
