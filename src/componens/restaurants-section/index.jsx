import HeadingSection from "../heading-section/index.jsx";
import { RestaurantsNavigation } from "./restaurantsNavigation/index.jsx";
import { RestaurantsCard } from "./restaurants-cards/restaurants-card/index.jsx";
import { useState } from "react";
import { restaurants } from "../../constants/mock.js";

const RestaurantsSection = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id,
  );

  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId,
  );

  const handleSetActiveRestaurantId = (id) => {
    console.log(id);
    if (activeRestaurantId === id) {
      return;
    }
    setActiveRestaurantId(id);
  };

  return (
    <div className="restaurants-section">
      <div className="container">
        <div className="restaurants-section__main">
          <HeadingSection
            className="restaurants-section__heading"
            headingText="Restaurants"
          />

          <RestaurantsNavigation
            className="restaurants-section__navigation"
            restaurants={restaurants}
            activeRestaurantId={activeRestaurantId}
            onClick={handleSetActiveRestaurantId}
          />

          <div className="restaurants-section__cards">
            {activeRestaurant && (
              <RestaurantsCard
                className="restaurants-section__card"
                name={activeRestaurant.name}
                restaurantsMenu={activeRestaurant.menu}
                restaurantsReviews={activeRestaurant.reviews}
                restaurantCounter={activeRestaurant.counter}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantsSection;
