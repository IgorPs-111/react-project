const RestaurantsReviews = ({ restaurant, className }) => {
  return (
    <>
      {restaurant.reviews.map((reviews, index) => (
        <div
          className={`${className} restaurants-reviews`}
          key={index}
          id={reviews.id}
        >
          {reviews.user && (
            <h3 className="restaurants-reviews__name">{reviews.user}</h3>
          )}
          {reviews.text && (
            <p className="restaurants-reviews__text">{reviews.text}</p>
          )}
          {reviews.rating && (
            <strong className="restaurants-reviews__stars">
              {reviews.rating} stars
            </strong>
          )}
        </div>
      ))}
    </>
  );
};

export default RestaurantsReviews;
