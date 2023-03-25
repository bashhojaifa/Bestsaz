const ProductReview = ({ reviews }) => {
  return (
    <div>
      <h4 className="details-section-title my-4">Reviews</h4>

      {reviews.map((review) => (
        <>
          <h5 className="section-title">
            {review.customer[0].name}
            <br />

            {[...Array(review.reviewRating)].map((x, i) => (
              <span>
                <i className="fas fa-star"></i>
              </span>
            ))}

            <span>
              <i className="fas fa-star"></i>
            </span>
          </h5>
          <p className="section-sub-title">{review.reviewMessage}</p>
        </>
      ))}
    </div>
  );
};

export default ProductReview;
