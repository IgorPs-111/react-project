import HeadingSection from "../heading-section/index.jsx";
import { RestaurantsNavigation } from "./restaurantsNavigation/index.jsx";
import { RestaurantsCard } from "./restaurants-cards/restaurants-card/index.jsx";
import { useState } from "react";
import { restaurants } from "../../constants/mock.js";

const RestaurantsSection = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id,
  );

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
            setActiveRestaurantId={setActiveRestaurantId}
            activeRestaurantId={activeRestaurantId}
          />

          <div className="restaurants-section__cards">
            {restaurants.map(
              (restaurant) =>
                restaurant.id === activeRestaurantId && (
                  <RestaurantsCard
                    className="restaurants-section__card"
                    restaurant={restaurant}
                    key={restaurant.id}
                  />
                ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantsSection;
