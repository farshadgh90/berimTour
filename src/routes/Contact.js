import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImg from "../assets/8.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={contactImg} title="ارتباط با ما" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
