import { useHashScroll } from "./hooks/useHashScroll.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import ChapterNav from "./components/chapters/ChapterNav.jsx";
import Reality from "./components/chapters/Reality.jsx";
import Leakage from "./components/chapters/Leakage.jsx";
import Economics from "./components/chapters/Economics.jsx";
import Judgment from "./components/chapters/Judgment.jsx";
import MasterIdea from "./components/chapters/MasterIdea.jsx";
import SystemRun from "./components/chapters/SystemRun.jsx";
import Evidence from "./components/chapters/Evidence.jsx";
import DeRisk from "./components/chapters/DeRisk.jsx";
import Method from "./components/chapters/Method.jsx";
import ValueSlider from "./components/chapters/ValueSlider.jsx";
import CaseStudies from "./components/chapters/CaseStudies.jsx";
import Identity from "./components/chapters/Identity.jsx";
import Offer from "./components/chapters/Offer.jsx";

export default function App() {
  useHashScroll();
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Nav />
      <ChapterNav />
      <Reality />
      <Leakage />
      <Economics />
      <Judgment />
      <MasterIdea />
      <SystemRun />
      <Evidence />
      <DeRisk />
      <Method />
      <ValueSlider />
      <CaseStudies />
      <Identity />
      <Offer />
      <Footer />
    </div>
  );
}
