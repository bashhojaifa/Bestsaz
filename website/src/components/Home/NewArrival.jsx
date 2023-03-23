//External Lib Import
import { useEffect, useRef, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { useProductListRemarkQuery } from "../../redux/services/productService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Internal Lib Import
import NewArrivalPlaceholder from "../Placeholder/NewArrivalPlaceholder";
import ProductItem from "../Product/ProductItem";

const NewArrival = () => {
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });

  const { data: productList } = useProductListRemarkQuery("newArrival");

  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const next = () => {
    slider1.current.slickNext();
  };
  const previous = () => {
    slider1.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!productList?.length > 0) {
    return <NewArrivalPlaceholder />;
  }

  return (
    <Container fluid={true} className="text-center mb-5">
      <h4 className="section-title">
        NEW ARRIVAL
        <a className="btn btn-sm ml-2 site-btn" onClick={previous}>
          <i className="fas fa-angle-left p-2"></i>
        </a>
        <a className="btn btn-sm ml-2 site-btn" onClick={next}>
          <i className="fas fa-angle-right p-2"></i>
        </a>
      </h4>
      <p className="section-sub-title">
        Some Of Our Exclusive Collection, You May
      </p>
      <Col>
        <Slider
          {...settings}
          asNavFor={state.nav2}
          ref={(slider) => (slider1.current = slider)}
        >
          {productList?.map((product) => (
            <ProductItem product={product} />
          ))}
        </Slider>
      </Col>
    </Container>
  );
};

export default NewArrival;
