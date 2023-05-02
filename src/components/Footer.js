import "./FooterStyles.css";
import arm1 from "../assets/16.png";
import arm2 from "../assets/17.png";
import arm3 from "../assets/18.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>بریم تور</h1>
          <p>مقصد دلخواه خود را انتخاب کنید</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <a href="/">اپلیکیشن بریم تور</a>
          <a href="/">راهنمای سفر</a>
          <a href="/">تور</a>
        </div>
        <div>
          <a href="/">قوانین و شرایط</a>
          <a href="/">حریم خصوصی</a>
          <a href="/">شکایات</a>
        </div>
        <div>
          <a href="/">درباره ما</a>
          <a href="/">تماس با ما</a>
          <a href="/">سوالات متداول</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
