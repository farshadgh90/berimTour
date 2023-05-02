import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutImg from "../assets/2.jpeg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="درباره ما" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
