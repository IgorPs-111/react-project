export const RestaurantsNavigation = ({
  className,
  restaurants,
  activeRestaurantId,
  onClick,
}) => {
  return (
    <ul className={`${className} restaurants-navigation`}>
      {restaurants.map(
        (restaurant) =>
          restaurant.name && (
            <li className="restaurants-navigation__item" key={restaurant.id}>
              <button
                className={`restaurants-navigation__btn btn ${restaurant.id === activeRestaurantId ? "active" : ""}`}
                onClick={() => onClick(restaurant.id)}
              >
                {restaurant.name}
              </button>
            </li>
          ),
      )}
    </ul>
  );
};
