import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import registerImg from "../assets/1.jpg";
import Footer from "./Footer";

export const Register = (props) => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={registerImg} />
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="نام و نام خانوادگی خود را وارد کنید"
          />
          <input type="email" placeholder="ایمیل خود را وارد کنید" />
          <input type="password" placeholder="رمز عبور خود را وارد کنید" />
          <button className="btn">ثبت نام کنید</button>
        </form>
        <div>
          <Link to="/login">اکانت دارید؟ وارد شوید</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
