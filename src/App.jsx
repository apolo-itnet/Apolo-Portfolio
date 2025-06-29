import "./App.css";
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <>
      <div className="fixed w-full h-20 inset-0 top-0 z-50 bg-neutral-900/10 ">
        <Navbar />
      </div>

      <section
        id="home"
        className="bg-[url('https://i.postimg.cc/D0N8WjyT/hero-banner-img-1.webp')] bg-cover bg-center bg-no-repeat"
      >
        <Home />
      </section>

      <section className="scroll-smooth bg-neutral-800 text-white">
        {/* Other sections */}
        <section id="about" className="scroll-mt-24 py-16">
          <About />
        </section>
        <section id="projects" className="scroll-mt-24 py-16">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24 py-16">
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
