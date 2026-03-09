import NoiseOverlay from "./components/NoiseOverlay";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Studio from "./components/Studio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <div
        style={{
          background: "#0A0A0A",
          color: "#F5F0E8",
          minHeight: "100vh",
          fontFamily: "'DM Sans', sans-serif",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Studio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
