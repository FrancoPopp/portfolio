import About from "./components/About";
import Background from "./components/Background";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Background />
      <Header />
      <main className="h-screen w-full px-8">
        <About />
        <Projects />
        <Experience />
      </main>
    </>
  );
}

export default App;
