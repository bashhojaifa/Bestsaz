//External Lib Import
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Link to={`/product-details/${product?.productCode}`}>
      <Card className="image-box  w-100 card">
        <img className="" src={product?.image?.src} />
        <Card.Body>
          <p className="product-name-on-card">{product?.name}</p>
          {product?.discountPrice ? (
            <>
              <p className="product-price-on-card" style={{ margin: 0 }}>
                After: {product?.discountPrice} TK
              </p>
              <p className="product-price-on-card">
                Before: <strike>{product?.price} TK</strike>
              </p>
            </>
          ) : (
            <>
              <br />
              <p className="product-price-on-card">
                Price: {product?.price} TK
              </p>
            </>
          )}

          <Button className="btn btn-sm btn-success">
            <i className="fa fa-cart-plus"></i> Order Now
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export const WishItem = ({ wishItem }) => {
  return (
    <Link to={`/product-details/${wishItem?.productCode}`}>
      <Card className="image-box  w-100 card">
        <img className="" src={wishItem?.image?.src} />
        <Card.Body>
          <p className="product-name-on-card">{wishItem?.name}</p>
          {wishItem?.discountPrice ? (
            <>
              <p className="product-price-on-card" style={{ margin: 0 }}>
                After: {wishItem?.discountPrice} TK
              </p>
              <p className="product-price-on-card">
                Before: <strike>{wishItem?.price} TK</strike>
              </p>
            </>
          ) : (
            <>
              <br />
              <p className="product-price-on-card">
                Price: {wishItem?.price} TK
              </p>
            </>
          )}

          <Button className="btn btn-sm btn-success">
            <i className="fa fa-trash-alt"></i> Remove
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductItem;
