import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Work from "./components/Work.jsx";
import Agitation from "./components/Agitation.jsx";
import Diagnostic from "./components/Diagnostic.jsx";
import Services from "./components/Services.jsx";
import Proof from "./components/Proof.jsx";
import Closing from "./components/Closing.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Work />
      <Agitation />
      <Diagnostic />
      <Services />
      <Proof />
      <Closing />
      <Footer />
    </div>
  );
}
