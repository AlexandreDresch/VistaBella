import logoFooter from "../assets/footer/logoFooter.png";
import emailIcon from "../assets/footer/emailIcon.png";
import locationIcon from "../assets/footer/locationIcon.png";
import phoneIcon from "../assets/footer/phoneIcon.png";

function Footer() {
  return (
    <footer className="bottom-0 left-0 flex flex-col items-center justify-between gap-2 bg-sky-900 px-8 py-6 xl:flex-row">
      <img
        src={logoFooter}
        className="w-32 transition-all hover:scale-105"
      ></img>

      <div className="flex flex-col items-center justify-center xl:flex-row">
        <a
          href="#"
          className="flex gap-1 rounded-md bg-sky-900 p-3 text-sm font-light text-white transition-all hover:scale-105 hover:opacity-70"
        >
          <img src={locationIcon}></img>
          Adress, State, City.
        </a>

        <a
          href="#"
          className="flex gap-1 rounded-md bg-sky-900 p-3 text-sm font-light text-white transition-all hover:scale-105 hover:opacity-70"
        >
          <img src={phoneIcon}></img>
          +55 48 99999-9999
        </a>

        <a
          href="#"
          className="flex gap-1 rounded-md bg-sky-900 p-3 text-sm font-light text-white transition-all hover:scale-105 hover:opacity-70"
        >
          <img src={emailIcon}></img>
          contact@vistabella.com
        </a>
      </div>

      <div className="flex gap-4">
        <a
          href="#"
          className="p-1 text-white transition-all duration-500 hover:scale-125 hover:rounded-full hover:bg-blue-700"
        >
          <i className="bx bxl-facebook text-2xl"></i>
        </a>

        <a
          href="#"
          className="p-1 text-white transition-all duration-500 hover:scale-125 hover:rounded-full hover:bg-pink-600"
        >
          <i className="bx bxl-instagram text-2xl"></i>
        </a>

        <a
          href="#"
          className="p-1 text-white transition-all duration-500 hover:scale-125 hover:rounded-full hover:bg-blue-500"
        >
          <i className="bx bxl-twitter text-2xl"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
