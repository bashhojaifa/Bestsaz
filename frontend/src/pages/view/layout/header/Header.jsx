import { useEffect, useState } from "react";
import clsx from "clsx";
import NavMenu from "./sub-component/NavMenu";
import HeaderTop from "./sub-component/HeaderTop";
import IconGroup from "./sub-component/IconGroup";
import { Link } from "react-router-dom";
import MobileMenu from "./sub-component/mobile/MobileMenu";

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className="header-area clearfix">
      <div className="header-top-area header-padding-2 d-none d-lg-block">
        <div className="container-fluid">
          {/* header top */}
          <HeaderTop />
        </div>
      </div>

      <div
        className={clsx(
          "header-padding-2",
          "sticky-bar header-res-padding clearfix",
          scroll > headerTop && "stick"
        )}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              <div className="logo">
                <Link to={process.env.PUBLIC_URL + "/"}>
                  <img
                    alt="Logo"
                    src={process.env.PUBLIC_URL + "/assets/img/logo/logo.png"}
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              {/* Icon group */}
              <IconGroup />
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
