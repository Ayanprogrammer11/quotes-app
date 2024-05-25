import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar flex justify-between items-center p-1 bg-Bgmain">
      <div className="logo w-12">
        {/* <img src="(128).jpeg" alt="TEST" className="w-fit" /> */}
      </div>
      <div className="main-nav">
        <ul className="flex gap-10 p-2 items-center text-black">
          <NavLink to={"/"} className="text-white">
            Home
          </NavLink>
          <NavLink
            to={"/app"}
            className="cta cursor-pointer rounded-lg text-white bg-main hover:bg-mainShade1 px-4 py-2 font-bold"
          >
            Go to App
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
