import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import Resume from "../components/Resume.jsx";

export default function ResumePage() {
  return (
    <div className="site-shell resume-page">
      <Nav />
      <header className="resume-intro">
        <div className="site-container">
          <span className="kicker">FIELD RECORD / 2015—NOW</span>
          <h1>Caleb Pierre.<br /><span>Engineer in the room.</span></h1>
          <p>AI systems, enterprise security, operational automation, and ten years of production accountability.</p>
        </div>
      </header>
      <main className="resume-content"><Resume /></main>
      <Footer />
    </div>
  );
}
