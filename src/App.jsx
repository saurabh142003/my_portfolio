import './App.css';
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import EducationExperience from './sections/EducationExperience/EduExp';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Hero />
      <About/>
      <EducationExperience/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
