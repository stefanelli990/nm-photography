import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data";
import logo from "../assets/nm-logo.svg";
import Btn from "../components/Btn";
import Menu from "../components/Menu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed inset-x-0 bg-white z-10 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="wrapper h-[90px] flex items-center justify-between text-black">
          <Link to="/">
            <img className="w-[100px]" src={logo} alt="NM Photography Logo" />
          </Link>
          <nav>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((navLink) => (
                <div key={navLink.url} className="group relative uppercase">
                  <Link
                    className="navlink"
                    to={navLink.url}
                    aria-current={
                      location.pathname === navLink.url ? "page" : undefined
                    }
                  >
                    {navLink.name}
                  </Link>
                  {location.pathname === navLink.url && (
                    <div className="absolute -bottom-1 bg-black h-[1px] w-full"></div>
                  )}
                </div>
              ))}
              <Btn
                btnText={'get started'}
                btnPath={'/contact'}
                btnStyle={'btn btn-outlined btn-outlined-black'}
              />
            </div>
          </nav>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            className="w-8 h-8 flex justify-center flex-col space-y-[7px] items-end group md:hidden"
          >
            <div className="h-[0.1rem] w-6 bg-black group-hover:w-8 duration-500"></div>
            <div className="h-[0.1rem] w-8 bg-black group-hover:w-8 duration-500"></div>
            <div className="h-[0.1rem] w-4 bg-black group-hover:w-8 duration-500"></div>
          </button>
        </div>
      </header>
      <Menu open={open} setOpen={setOpen} />
    </>
  );
}
