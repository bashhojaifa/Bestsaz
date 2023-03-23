//External Lib Import
import { useEffect } from "react";
import { useParams } from "react-router-dom";

//Internal Lib Import
import NavMenuDesktop from "../../components/Common/NavMenuDesktop";
import NavMenuMobile from "../../components/Common/NavMenuMobile";
import FooterDesktop from "../../components/Common/FooterDesktop";
import FooterMobile from "../../components/Common/FooterMobile";
import Search from "../../components/SearchApi/Search";
import { useProductListSearchKeywordQuery } from "../../redux/services/productService";
import ProductListLoader from "../../components/Placeholder/ProductListLoader";

const SearchResultScreen = () => {
  const { searchTerm } = useParams();

  const { data: productList, isLoading } =
    useProductListSearchKeywordQuery(searchTerm);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      </div>
      <div className="Mobile">
        <NavMenuMobile />
      </div>
      {isLoading && <ProductListLoader />}
      {!isLoading && (
        <Search searchTerm={searchTerm} productList={productList} />
      )}
      <div className="Desktop">
        <FooterDesktop />
      </div>
      <div className="Mobile">
        <FooterMobile />
      </div>
    </>
  );
};

export default SearchResultScreen;
