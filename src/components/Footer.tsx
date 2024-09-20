import logoFooter from "../assets/footer/logoFooter.png";
import emailIcon from "../assets/footer/emailIcon.png";
import locationIcon from "../assets/footer/locationIcon.png";
import phoneIcon from "../assets/footer/phoneIcon.png";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 flex h-20 w-screen items-center justify-between bg-sky-900 px-8 py-6 md:px-32">
      <img
        src={logoFooter}
        className="w-24 transition-all hover:scale-105"
      ></img>

      <div className="relative items-center justify-center gap-4 md:flex">
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
        <a href="#" className="text-white transition-all hover:scale-105">
          <i className="bx bxl-facebook text-2xl"></i>
        </a>

        <a
          href="#"
          className="pd-1 rounded-full text-white transition-all hover:scale-105"
        >
          <i className="bx bxl-instagram text-2xl"></i>
        </a>

        <a href="#" className="text-white transition-all hover:scale-105">
          <i className="bx bxl-twitter text-2xl"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
