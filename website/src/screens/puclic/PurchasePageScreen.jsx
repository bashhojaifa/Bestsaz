//Internal Lib Import
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";
import Purchase from "../../components/Others/Purchase";

const PurchaseScreen = () => {
  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
      </div>

      <Purchase />

      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default PurchaseScreen;
