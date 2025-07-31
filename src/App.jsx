import "./App.css";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";
import MySkills from "./Component/MySkill/MySkills";

function App() {
  return (
    <>
      <section className="fixed w-full h-fit lg:h-20 inset-0 top-0 z-50 bg-neutral-900/10 ">
        <Navbar />
      </section>

      <section id="home">
        <Home />
      </section>

      <section className="scroll-smooth bg-neutral-800 text-white ">
        {/* Other sections */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <section id="skill" className="scroll-mt-20">
          <MySkills/>
        </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
