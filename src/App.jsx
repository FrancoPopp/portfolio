import About from "./components/About";
import Background from "./components/Background";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Background />
      <Header />
      <main className="z-100 h-screen w-full flex-1 snap-y snap-proximity overflow-y-scroll scroll-smooth">
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Footer />
      </main>
    </>
  );
}

export default App;
