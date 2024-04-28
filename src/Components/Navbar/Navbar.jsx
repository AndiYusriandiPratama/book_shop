// Navbar.css
import "./Navbar.css";

// Link
import { Link, NavLink } from "react-router-dom";

// Logo
import Logo from "../../assets/logo.png";

// NAvbar data
import { navLinks, navRight } from "../../Data/Data";

// Menu
import { TfiMenu } from "react-icons/tfi";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" height={100} width={100} />
        </Link>

        {/* Nav Links */}
        <ul className="nav-links">
          {navLinks.map(({ id, name, path }) => {
            return (
              <li key={id}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>

        {/* Nav Right */}
        <div className="nav-right">
          {navRight.managements.map((item, index) => {
            return (
              <Link
                key={index}
                // target="_blank"
                className="management-icons"
                to={item.link}
              >
                <item.icon />
              </Link>
            );
          })}

          <button className="menu-btn">
            <TfiMenu />
            <AiFillCloseCircle />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
