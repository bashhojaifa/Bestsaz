//External Lib Import
import { useEffect } from "react";

//Internal Lib Import
import FeaturedProducts from "../../components/Home/FeaturedProducts";
import Categories from "../../components/Home/Categories";
import Collection from "../../components/Home/Collection";
import NewArrival from "../../components/Home/NewArrival";
import HomeTop from "../../components/Home/HomeTop";
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import HomeTopMobile from "../../components/Home/HomeTopMobile";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";

const HomeScreen = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
        <HomeTop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
        <HomeTopMobile />
      </div>

      <NewArrival />
      <FeaturedProducts />
      <Collection />
      <Categories />

      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default HomeScreen;
