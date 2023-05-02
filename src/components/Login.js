import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import loginImg from "../assets/1.jpg";
import Footer from "./Footer";

export const Login = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={loginImg} />
      <div className="form-container">
        <form>
          <input type="email" placeholder="ایمیل خود را وارد کنید" />
          <input type="password" placeholder="رمز عبور خود را وارد کنید" />
          <button className="btn">وارد شوید</button>
        </form>
        <div>
          <Link to="/register">اکانت ندارید؟ ثبت نام کنید</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
