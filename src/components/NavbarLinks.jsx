import React from "react";
import { Link } from "react-router-dom";
function NavbarLinks() {
  return (
    <>
      <li>
        <Link className="text-white link-h-nav" to="/">
          HOME
        </Link>
      </li>
      <li>
        <Link className="text-white link-h-nav" to="/headphones">
          HEADPHONES
        </Link>
      </li>
      <li>
        <Link className="text-white link-h-nav" to="/speakers">
          SPEAKERS
        </Link>
      </li>
      <li>
        <Link className="text-white link-h-nav" to="earphones">
          EARHPOHES
        </Link>
      </li>
    </>
  );
}

export default NavbarLinks;
