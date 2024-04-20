import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";
import { useState } from "react";
import Resume from "./components/Resume/resume";
import Project from "./components/Project/project";

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const handleContact = () => {
    setShowContactForm(true);
    setShowResume(false);
    setShowProject(false);
  };

  const handleAboutMe = () => {
    setShowContactForm(false);
    setShowResume(false);
    setShowProject(false);
  };

  const handleResume = () => {
    setShowContactForm(false);
    setShowProject(false);
    setShowResume(true);
  };

  const handleProject = () => {
    setShowContactForm(false);
    setShowResume(false);
    setShowProject(true);
  };

  return (
    <div className="App">
      <Navbar
        handleContact={handleContact}
        handleAboutMe={handleAboutMe}
        handleResume={handleResume}
        handleProject={handleProject}
      />
      {!showContactForm && !showResume  && !showProject && <Intro />}
      {showContactForm && <Contact />}
      {showResume && <Resume />}
      {showProject && <Project />}
      <Footer />
    </div>
  );
}

export default App;
