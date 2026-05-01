import './index.css';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoSkills from './components/BentoSkills';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <BentoSkills />
        <ExperienceTimeline />
        <ProjectGallery />
      </main>
      <Footer />
    </>
  );
}
