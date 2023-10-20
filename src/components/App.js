import "../styles.css";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Creator from "./Creator";
import LatestProjects from "./LatestProjects";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Footer from "./Footer";

export default function App() {
  return (
    <main>
      <div className="App">
        <Hero />
        <AboutMe />
        <Creator />
        <LatestProjects />
        <WorkExperience />
        <Education />
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
