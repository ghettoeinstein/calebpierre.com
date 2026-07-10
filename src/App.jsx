import { C } from "./constants.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Agitation from "./components/Agitation.jsx";
import Diagnostic from "./components/Diagnostic.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Proof from "./components/Proof.jsx";
import About from "./components/About.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div style={{ backgroundColor: C.paper, minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Agitation />
      <Diagnostic />
      <Services />
      <Process />
      <Proof />
      <About />
      <FinalCTA />
      <Footer />
    </div>
  );
}
