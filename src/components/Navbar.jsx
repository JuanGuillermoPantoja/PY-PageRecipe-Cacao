import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation(); // Hook para obtener la ruta actual
  const [activeLink, setActiveLink] = useState();

  useEffect(() => {
    // Ajustar el estado según la ruta actual
    if (location.pathname === "/") {
      setActiveLink("home");
    } else if (location.pathname === "/recipes-cacao") {
      setActiveLink("recipes");
    } else if (location.pathname === "/history-cacao") {
      setActiveLink("history");
    }
  }, [location.pathname]);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div
        id="bgNavbar"
        className="bg-white w-full flex justify-center items-center py-2 border-b-[1px] border-gray-300 "
      >
        <div className="w-[95%] flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center m-2 sm:justify-between s">
            <img
              className="w-1/3 sm:w-1/2 md:w-1/5"
              src="/images/Sennova.png"
              alt="sennova.png"
            />
            <span className="bg-gray-100 w-[1px] h-11 sm:h-0"></span>
            <img
              className="w-1/3 sm:w-[35%] md:w-1/5"
              src="/images/coquita-logo-removebg-size.png"
              alt=""
            />
          </div>
          <ul className="flex justify-center items-center gap-1 m-0 p-0 text-black w-full">
            <li>
              <Link
                onClick={() => handleClick("home")}
                className={`${
                  activeLink === "home"
                    ? "bg-[#308d39]"
                    : "bg-[#41b94b] shadow-sm shadow-green-950"
                } px-1 py-1 rounded-sm text-white sm:text-lg`}
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("recipes")}
                className={`${
                  activeLink === "recipes"
                    ? "bg-[#308d39]"
                    : "bg-[#41b94b] shadow-sm shadow-green-950"
                } px-2 py-1 rounded-sm text-white sm:text-lg`}
                to="/recipes-cacao"
              >
                Recetas de cacao
              </Link>
            </li>
            <li>
              <Link
                onClick={() => handleClick("history")}
                className={`${
                  activeLink === "history"
                    ? "bg-[#308d39]"
                    : "bg-[#41b94b] shadow-sm shadow-green-950"
                } px-2 py-1 rounded-sm text-white sm:text-lg`}
                to="/history-cacao"
              >
                Historia del cacao
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
