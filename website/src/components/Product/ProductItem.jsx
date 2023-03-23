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

export default ProductItem;

// <div className="p-1" key={i.toString()}>
//                     <Link to={"/product-details/" + ParentList.product_code}>
//                         <Card className="image-box  w-100 card">
//                             <img className=""
//                                  src={ParentList.thumbnail}/>
//                             <Card.Body>
//                                 <p className="product-name-on-card">{ParentList.title}</p>
//                             </Card.Body>
//                         </Card>
//                     </Link>
//                 </div>

{
  /* <div className="p-1" key={i.toString()}>
<Link to={"/product-details/" + ParentList.product_code}>
    <Card className="image-box  w-100 card">
        <img className=""
             src={ParentList.thumbnail}/>
        <Card.Body>
            <p className="product-name-on-card">{ParentList.title}</p>
            <p className="product-price-on-card"><strike>{ParentList.price}</strike></p>
        </Card.Body>
    </Card>
</Link>
</div> */
}

{
  /* <Link to={"/product-details/" + MyList.product_code}>
              <Card className="image-box card">
                <img className="w-100" src={MyList.image} />
                <Card.Body>
                  <p className="product-name-on-card">{MyList.subcategory}</p>
                  <p className="product-price-on-card">
                    Before: <del>{MyList.price}</del>
                  </p>
                  <p className="product-price-on-card">
                    Special Price: {MyList.discount_price}
                  </p>
                </Card.Body>
              </Card>
            </Link> */
}
