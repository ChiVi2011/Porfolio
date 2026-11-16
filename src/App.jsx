import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/home";
import ScrollIndicator from "./components/ScrollIndicator";
import About from "./pages/about";
import Skill from "./pages/skill";
import CustomCursor from "./components/CustomCursor";
import Project from "./pages/project";

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="animated-bg">
        <section id="home" className="pageSection">
          <Home />
        </section>
        <section id="about" className="pageSection">
          <About />
        </section>
        <section id="skill" className="pageSection">
          <Skill />
        </section>
        <section id="project" className="pageSection">
          <Project />
        </section>

        <ScrollIndicator />
      </main>
    </>
  );
}

export default App;
