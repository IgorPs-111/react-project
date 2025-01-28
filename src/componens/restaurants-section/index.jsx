import HeadingSection from "../heading-section/index.jsx";
import { RestaurantsNavigation } from "./restaurantsNavigation/index.jsx";
import { RestaurantsCard } from "./restaurants-cards/restaurants-card/index.jsx";
import { restaurants } from "../../constants/mock.js";
import { useState } from "react";

const RestaurantsSection = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0].name);

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
            setActiveRestaurant={setActiveRestaurant}
          />

          <ul className="restaurants-section__navigation restaurants-navigation">
            {restaurants.map(
              (restaurant) =>
                restaurant.name && (
                  <li
                    className="restaurants-navigation__item"
                    key={restaurant.name}
                  >
                    <button
                      className="restaurants-navigation__btn btn"
                      onClick={() => {
                        if (activeRestaurant !== restaurant.name) {
                          setActiveRestaurant(restaurant.name);
                        }
                      }}
                    >
                      {restaurant.name}
                    </button>
                  </li>
                ),
            )}
          </ul>

          <div className="restaurants-section__cards">
            {restaurants.map((restaurant) => (
              <RestaurantsCard
                restaurant={restaurant}
                key={restaurant.id}
                activeRestaurant={activeRestaurant}
                className="restaurants-section__card"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantsSection;
