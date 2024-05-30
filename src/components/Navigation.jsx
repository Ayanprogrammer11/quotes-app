import { NavLink, useLocation } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

function Navigation({ setIsOpen }) {
  const location = useLocation();
  const isAppRoute = location.pathname.startsWith("/app");

  return (
    <nav className="navbar flex justify-between items-center p-1 bg-Bgmain">
      <div className="logo w-12">
        {/* <img src="(128).jpeg" alt="TEST" className="w-fit" /> */}
      </div>
      <div className="main-nav flex-1">
        <ul className="flex gap-10 p-2 justify-between items-center">
          <div>
            {isAppRoute && (
              <button onClick={() => setIsOpen(true)}>
                Filters <FaFilter style={{ display: "inline-block" }} />
              </button>
            )}
          </div>
          <div className="flex gap-6 items-center justify-center">
            <NavLink to={"/"} className="text-white">
              Home
            </NavLink>
            <NavLink
              to={"/app"}
              className="cta cursor-pointer rounded-lg text-white bg-main hover:bg-mainShade1 px-4 py-2 font-bold"
            >
              Go to App
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
