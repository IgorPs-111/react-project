export const RestaurantsNavigation = ({
  className,
  restaurants,
  setActiveRestaurantId,
  activeRestaurantId,
}) => {
  return (
    <ul className={`${className} restaurants-navigation`}>
      {restaurants.map(
        (restaurant, index) =>
          restaurant.name && (
            <li className="restaurants-navigation__item" key={index}>
              <button
                className={`restaurants-navigation__btn btn ${restaurant.id === activeRestaurantId ? "active" : ""}`}
                onClick={() => setActiveRestaurantId(restaurant.id)}
              >
                {restaurant.name}
              </button>
            </li>
          ),
      )}
    </ul>
  );
};
