//External Lib Import
import { useState } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//Internal Lib Import
import MegaMenuMobile from "../Home/MegaMenuMobile";
import Logo from "../../assets/images/logo.png";

const NavMenuMobile = () => {
  const [menu, setMenu] = useState({
    sideNavState: "sideNavClose",
    contentOverState: "contentOverlayClose",
  });

  const menuBarClickHandler = () => {
    sideNavOpenClose();
  };
  const contentOverlayClickHandler = () => {
    sideNavOpenClose();
  };
  const sideNavOpenClose = () => {
    let sideNavState = menu.sideNavState;
    if (sideNavState === "sideNavOpen") {
      setMenu({
        ...menu,
        sideNavState: "sideNavClose",
        contentOverState: "contentOverlayClose",
      });
    } else if (sideNavState === "sideNavClose") {
      setMenu({
        ...menu,
        sideNavState: "sideNavOpen",
        contentOverState: "contentOverlayClose",
      });
    }
  };

  return (
    <>
      <Navbar fluid={true} className="fixed-top shadow-sm p-2 m-0 bg-white">
        <Button onClick={menuBarClickHandler} className="h4 MobileNavToggler">
          <i className="fa fa-bars"></i>
        </Button>
        <Link to="/cart">
          <Button className="cart-btn mx-1 h4">
            <i className="fa fa-shopping-cart"></i> 4 items
          </Button>
        </Link>
        <Link className="btn" to="/favourite">
          <i className="fa h4 fa-heart"></i>{" "}
          <sup>
            <span className="badge text-white bg-danger">3</span>
          </sup>
        </Link>
        <Link className="btn" to="/notification">
          <i className="fa h4  fa-bell"></i>{" "}
          <sup>
            <span className="badge text-white bg-danger">4</span>
          </sup>
        </Link>
        <Link to="/search" className="bg-white text-dark h4 border-white">
          <i className="fas fa-search"></i>
        </Link>
      </Navbar>
      <div className={menu.sideNavState}>
        <MegaMenuMobile />
      </div>
      <div
        onClick={contentOverlayClickHandler}
        className={menu.contentOverState}
      ></div>
    </>
  );
};

export default NavMenuMobile;
