import { restaurants } from "../../../constants/mock.js";
import RestaurantsMenu from "./restaurants-menu/index.jsx";
import RestaurantsReviews from "./restaurants-reviews/index.jsx";

const RestaurantsCard = ({ className }) => {
  return (
    <>
      {restaurants.map((restaurant, index) => (
        <div className={`${className} restaurants-card`} key={index}>
          {restaurant.name && (
            <h2 className="restaurants-card__title">{restaurant.name}</h2>
          )}
          <RestaurantsMenu
            restaurant={restaurant}
            className="restaurants-card__menu"
          />
          <RestaurantsReviews
            restaurant={restaurant}
            className="restaurants-card__reviews"
          />
        </div>
      ))}
    </>
  );
};

export default RestaurantsCard;
