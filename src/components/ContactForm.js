import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>تماس با بریم تور</h1>
      <form>
        <input placeholder="نام و نام خانوادگی" />
        <input placeholder="ایمیل" />
        <input placeholder="موضوع" />
        <textarea placeholder="پیام" rows="4"></textarea>
        <button className="btn">فرستادن پیام</button>
      </form>
    </div>
  );
}

export default ContactForm;
