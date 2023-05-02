import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import serviceImg from "../assets/4.jpeg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={serviceImg} title="خدمات" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
