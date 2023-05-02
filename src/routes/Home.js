import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import img1 from "../assets/1.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={img1}
        title="لذت سفر را با ما تجربه کنید"
        text="مقصد دلخواه خود را انتخاب کنید"
        btnText="انتخاب سفر"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
