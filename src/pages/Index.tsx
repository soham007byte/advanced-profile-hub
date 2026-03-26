import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="glow-line max-w-xs mx-auto" />
      <AboutSection />
      <SkillsSection />
      <div className="glow-line max-w-xs mx-auto" />
      <ExperienceSection />
      <ProjectsSection />
      <div className="glow-line max-w-xs mx-auto" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
