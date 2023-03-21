//External Lib Import
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SliderHome = ({ sliderList }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {sliderList?.map((slider) => (
        <div
          key={slider._id}
          className="container-fluid overflow-hidden w-100 shadow-sm"
        >
          <div style={{ backgroundColor: slider.bgColor }}>
            <div className="row card-body">
              <div className="col-md-6 sliderTitleDiv text-center text-justify mt-5">
                <h1
                  style={{ color: slider.titleColor }}
                  className="sliderTitle"
                >
                  {slider.title}
                </h1>
                <h1
                  style={{ color: slider.subTitleColor }}
                  className="sliderSubTitle"
                >
                  {slider.subTitle}
                </h1>
                <Link
                  to={"productDetails/" + slider.productLink}
                  className="btn site-btn px-5"
                >
                  More Info
                </Link>
              </div>
              <div className="col-md-6 text-center">
                <img className="sliderImg" src={slider?.image?.src} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderHome;
