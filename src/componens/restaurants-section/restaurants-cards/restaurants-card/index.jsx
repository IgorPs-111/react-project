import RestaurantsMenu from "../restaurants-menu/index.jsx";
import { Counter } from "../counter/index.jsx";
import RestaurantsReviews from "../restaurants-reviews/index.jsx";

export const RestaurantsCard = ({
  className,
  restaurant,
  activeRestaurant,
}) => {
  return (
    <>
      {restaurant.name && (
        <div
          className={`${className} restaurants-card ${activeRestaurant === restaurant.name ? "active" : ""}`}
        >
          <h2 className="restaurants-card__title">{restaurant.name}</h2>

          <RestaurantsMenu
            restaurant={restaurant}
            className="restaurants-card__menu"
          />
          {restaurant.counter && (
            <Counter className="restaurants-card__counter" />
          )}
          <RestaurantsReviews
            restaurant={restaurant}
            className="restaurants-card__reviews"
          />
        </div>
      )}
    </>
  );
};
