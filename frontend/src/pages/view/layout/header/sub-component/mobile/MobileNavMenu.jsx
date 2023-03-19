import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/home"}>home</Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>shop</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            collection
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>contact_us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
