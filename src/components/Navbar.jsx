import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <div className="bg-info-content">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden nv-audio lg:flex text-white  text-3xl items-center"
          >
            audiophile
          </NavLink>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
              <NavbarLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <ul className="menu hidden lg:menu-horizontal">
            <NavbarLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6 text-white" />
            </div>
          </NavLink>
        </div>
      </div>
      <hr className="align-element " />
    </div>
  );
}

export default Navbar;
