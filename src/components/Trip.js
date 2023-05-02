import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/10.jpg";
import Trip2 from "../assets/11.jpg";
import Trip3 from "../assets/12.jpg";
import Trip4 from "../assets/13.jpg";
import Trip5 from "../assets/14.jpg";
import Trip6 from "../assets/15.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>تورهای اخیر</h1>
      <p>با بریم تور بهترین و خاص ترین تورها را تجربه کنید</p>
      <div className="tripCard">
        <TripData
          image={Trip1}
          heading="مرداب سراوان"
          text="زمانی که به پارک جنگلی سراوان وارد می‌شوید، در همان شروع راه در سمت چپ خود می‌توانید از محوطه بسیار زیبای سبز رنگ دیدن فرمایید. شاید با نگاه اول فکر کنید که این محوطه یک زمین فوتبال است که در مقابل شما قرار گرفته است. اما پس از اینکه دقت بیشتری کنید، متوجه خواهید شد که این محوطه در واقع همان مرداب سراوان است"
        />
        <TripData
          image={Trip2}
          heading="دشت سوسن"
          text="دشت سوسن یکی از مقاصد و جاذبه های گردشگری استان خوزستان است و در ۳۵ کیلومتری شمال غربی شهرستان ایذه در بخش سوسن قرار دارد. این بخش از دو دهستان سوسن شرقی با مرکزیت «جنگه» و سوسن غربی با مرکزیت «ترشک» تشکیل شده است. بخش سوسن در شرق استان خوزستان و در مجاورت استان چهارمحال و بختیاری قرار گرفته است"
        />
        <TripData
          image={Trip3}
          heading="قلعه رودخان"
          text="دژ رودخان یا قلعه حسامی نام قلعه‌ای است متعلق به دوره امپراتوری ساسانی که بر فراز ارتفاعات جنگلی شهرستان فومن در روستای رودخان ساخته شده و ۲٫۶ هکتار مساحت و ۶۵ برج و بارو و دیواری به طول ۱۵۰۰ متر دارد. دژ رودخان در ۳۰ کیلومتری شهر فومن واقع شده است. برخی کارشناسان، ساخت قلعه را در دوران ساسانیان دانسته‌اند"
        />
        <TripData
          image={Trip4}
          heading="دریاچه شهیون"
          text="دریاچه شهیون که نام دیگر آن دریاچه سد دز است، یکی از زیباترین دریاچه‌های ایران و از جاهای دیدنی دزفول محسوب می‌شود که در شمال غربی دزفول و در  در ۲۳ کیلومتری شمال شرق اندیمشک و پشت دو کوه شاداب و تنگوان، کنار روستای پامنار قرار دارد و باعث زیبایی منطقه شهیون شده است"
        />
        <TripData
          image={Trip5}
          heading="دشت هلن"
          text="منطقه حفاظت شده هلن در فاصله ۱۱۰ کیلومتری از مرکز استان چهارمحال و بختیاری و در مجاورت شهر ناغان در محدوده شهرستان‌های اردل، لردگان و کیار قرار دارد. دشت هلن از نظر توپوگرافی کاملاً کوهستانی بوده که بلندترین نقطه آن کوه بزمنی با ارتفاع ۳۲۲۵ متر و کمترین ارتفاع آن در حاشیه رودخانه ارمند با ارتفاع ۱۱۶۸ متر از سطح دریا می‌باشد"
        />
        <TripData
          image={Trip6}
          heading="هفت آبشار"
          text="هفت آبشار سوادکوه از زیباترین جاذبه‌های مازندران هستند. این آبشارهای دیدنی در نزدیکی شهر بابل قرار دارند و قدمت آن‌ها به چهل میلیون سال می‌رسد. همان طور که از نام این آبشار پیدا است، مجموعه هفت آبشار پلکانی بزرگ و کوچک، این جاذبه زیبا را به وجود آورده‌اند. این منطقه در نزدیکی روستای تیرکن از توابع دهستان درازکلا قرار دارد"
        />
      </div>
    </div>
  );
}

export default Trip;