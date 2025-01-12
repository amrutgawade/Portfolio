import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-slate-50 dark:bg-slate-900">
        <ParticlesBackground />
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
