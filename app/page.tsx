import Header from "./components/Header";
import Hero from "./components/Hero";
import TechSlider from "./components/TechSlider";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
 
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TechSlider />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}