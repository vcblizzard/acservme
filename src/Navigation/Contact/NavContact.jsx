import { useState } from "react";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";

function NavContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto bg-white 2xl:max-w-8xl outline outline-zinc-100">
      <div className="relative flex flex-col w-full p-1 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
            href="/"
          >
            <img
              src="https://i.ibb.co/qrSmCpz/logoacservme1-copy.png"
              alt="ACSERVME"
              className="h-20 md:h-20 lg:h-20"
            />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={isOpen ? "hidden" : "inline-flex"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                className={isOpen ? "inline-flex" : "hidden"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={
            isOpen
              ? "flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row flex"
              : "flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row hidden"
          }
        >
        <Link to="/" className="px-2 py-2 text-sm text-black lg:px-6 md:px-3 hover:text-[#519de8] lg:ml-auto hover:underline underline-offset-8">
            Home
          </Link>
          <Link to="/about" className="px-2 py-2 text-sm text-black lg:px-6 md:px-3 hover:text-[#519de8] hover:underline underline-offset-8">
            About
          </Link>
          <Link to="#" className="px-2 py-2 text-sm lg:px-6 md:px-3 text-[#519de8] underline underline-offset-8">
            Contact
          </Link>
          <Link to="/nonfound" className="px-2 py-2 text-sm text-black lg:px-6 md:px-3 hover:text-[#519de8] hover:underline underline-offset-8">
            Documentation
          </Link>

          <Link to="/locationacservme" className="px-2 py-2 text-sm text-black lg:px-6 md:px-3 hover:text-[#519de8] ">
            <SiGooglemaps className="h-4 w-4 inline-block mr-1 ml-5" />
            find a ACSERVME
          </Link>

          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
          <Link to="/login"
              className="block px-6 py-2 mt-2 text-sm font-semibold text-[#519de8] rounded-full group focus:outline outline outline-2 outline-[#519de8] focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white active:bg-zinc-50 active:text-[#519de8] focus-visible:outline-black "
              fdprocessedid="62a6vg">
            
              Login
            </Link>
            <Link to="/register"
              className="ml-1 inline-flex items-center justify-center px-5 py-2 mt-2 text-sm font-semibold text-[#519de8] rounded-full group focus:outline outline outline-2 outline-[#519de8] focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white active:bg-zinc-50 active:text-[#519de8] focus-visible:outline-black"
              fdprocessedid="qs5fwk">
            
              Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavContact;
