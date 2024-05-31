import Navbar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="relative">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
