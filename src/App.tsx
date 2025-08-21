import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Syngenta from "./components/ProjectSyngenta";
import ARMusnas from "./components/ProjectARMusnas";
import PadiCare from "./components/ProjectPadiCare";
import Contact from "./components/Contact";
import Close from "./components/Close";

function App() {
  return (
    <div className="font-sans">
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="projectSyngenta">
          <Syngenta />
        </section>
        <section id="projectARMusnas">
          <ARMusnas />
        </section>
        <section id="projectPadiCare">
          <PadiCare />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="close">
          <Close />
        </section>
      </main>
    </div>
  );
}

export default App;
