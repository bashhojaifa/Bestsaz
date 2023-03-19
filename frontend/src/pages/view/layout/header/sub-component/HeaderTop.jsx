import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
// import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";

const HeaderTop = () => {
  //   const currency = useSelector((state) => state.currency);
  return (
    <div className="header-top-area">
      <div className="container">
        <div className="header-top-wap">
          <div className="language-currency-wrap">
            <div className="same-language-currency language-style">
              <a href="#">
                English <i className="fa fa-angle-down" />
              </a>
              <div className="lang-car-dropdown">
                <ul>
                  <li>
                    <a href="#">Arabic </a>
                  </li>
                  <li>
                    <a href="#">Bangla </a>
                  </li>
                  <li>
                    <a href="#">Hindi</a>
                  </li>
                  <li>
                    <a href="#">Spanish </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="same-language-currency use-style">
              <a href="#">
                USD <i className="fa fa-angle-down" />
              </a>
              <div className="lang-car-dropdown">
                <ul>
                  <li>
                    <a href="#">Taka (BDT) </a>
                  </li>
                  <li>
                    <a href="#">Riyal (SAR) </a>
                  </li>
                  <li>
                    <a href="#">Rupee (INR)</a>
                  </li>
                  <li>
                    <a href="#">Dirham (AED) </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="same-language-currency">
              <p>Call Us 3965410</p>
            </div>
          </div>
          <div className="header-offer">
            <p>
              Free delivery on order over <span>$200</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div
    //   className={clsx(
    //     "header-top-wap"
    //     /* borderStyle === "fluid-border" && "border-bottom"*/
    //   )}
    // >
    //   {/* <LanguageCurrencyChanger currency={currency} /> */}
    //   <div className="header-offer">
    //     <p>
    //       Free delivery on order over{" "}
    //       {/* <span>
    //         {currency.currencySymbol + (200 * currency.currencyRate).toFixed(2)}
    //       </span> */}
    //     </p>
    //   </div>
    // </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
};

export default HeaderTop;
