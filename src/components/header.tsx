import logo from "../assets/logo.png";
import menuIcon from "../assets/menuIcon.png";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex items-center justify-between px-6 py-4 text-sky-950 md:px-32">
        <a href="#">
          <img
            src={logo}
            alt="brand logo"
            className="w-14 transition-all hover:scale-105"
          />
        </a>

        <ul className="hidden items-center gap-12 text-base font-semibold xl:flex">
          <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-900 hover:text-white">
            Top Offers
          </li>
          <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-900 hover:text-white">
            About Us
          </li>
          <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-900 hover:text-white">
            Our Team
          </li>
          <li className="cursor-pointer rounded-md p-3 transition-all hover:bg-sky-900 hover:text-white">
            References
          </li>
        </ul>

        <div className="relative hidden items-center justify-center gap-4 font-semibold md:flex">
          <a
            href="#"
            className="rounded-md bg-sky-900 p-3 text-white transition-all hover:scale-105 hover:opacity-70"
          >
            Contact Us
          </a>
        </div>

        <img
          src={menuIcon}
          alt="menu icon"
          className="bx bx-menu block w-12 cursor-pointer xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div
          className={`absolute left-0 top-24 flex w-full transform flex-col items-center bg-white font-bold transition-transform xl:hidden ${isMenuOpen ? "zpacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease" }}
        >
          <li className="w-full cursor-pointer list-none p-3 text-center font-semibold text-sky-950 transition-all hover:bg-sky-900 hover:text-white">
            Top Sellers
          </li>

          <li className="w-full cursor-pointer list-none p-3 text-center font-semibold text-sky-950 transition-all hover:bg-sky-900 hover:text-white">
            About Us
          </li>

          <li className="w-full cursor-pointer list-none p-3 text-center font-semibold hover:bg-sky-900 hover:text-white">
            Our Team
          </li>

          <li className="w-full cursor-pointer list-none p-3 text-center font-semibold text-sky-950 transition-all hover:bg-sky-900 hover:text-white">
            References
          </li>

          <li className="w-full cursor-pointer list-none bg-sky-900 p-2 text-center font-semibold text-white transition-all hover:opacity-80 md:hidden">
            Contact Us
          </li>
        </div>
      </header>
    </div>
  );
}

export default Header;
