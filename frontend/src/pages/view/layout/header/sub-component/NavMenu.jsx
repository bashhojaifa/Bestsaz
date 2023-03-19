import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="main-menu">
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/home"}>Home</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              Shop
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              Collection
            </Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
