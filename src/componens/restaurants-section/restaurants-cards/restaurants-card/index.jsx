import RestaurantsMenu from "../restaurants-menu/index.jsx";
import { Counter } from "../counter/index.jsx";
import RestaurantsReviews from "../restaurants-reviews/index.jsx";

export const RestaurantsCard = ({
  className,
  name,
  restaurantsMenu,
  restaurantsReviews,
  restaurantCounter,
}) => {
  return (
    <>
      <div className={`${className} restaurants-card`}>
        <h2 className="restaurants-card__title">{name}</h2>

        <RestaurantsMenu
          restaurantsMenu={restaurantsMenu}
          className="restaurants-card__menu"
        />

        {restaurantCounter && <Counter className="restaurants-card__counter" />}

        <RestaurantsReviews
          restaurantsReviews={restaurantsReviews}
          className="restaurants-card__reviews"
        />
      </div>
    </>
  );
};
