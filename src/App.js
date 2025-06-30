import "./App.css";
import "./i18n"; // 👈 à ajouter ici

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
    </div>
  );
}

export default App;
