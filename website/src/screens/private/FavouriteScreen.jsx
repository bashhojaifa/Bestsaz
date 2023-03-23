//Internal Lib Import
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";
import Favourite from "../../components/Favourite/Favourite";
import { useWishlistListQuery } from "../../redux/services/wishlistService";
import ProductListLoader from "../../components/Placeholder/ProductListLoader";

const FavouriteScreen = () => {
  const { data: wishList, isLoading } = useWishlistListQuery();

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
      </div>

      {isLoading && <ProductListLoader />}
      {!isLoading && <Favourite wishList={wishList} />}

      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default FavouriteScreen;
