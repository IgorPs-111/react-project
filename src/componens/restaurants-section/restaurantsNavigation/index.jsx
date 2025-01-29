export const RestaurantsNavigation = ({
  className,
  restaurants,
  setActiveRestaurant,
}) => {
  return (
    <ul className={`${className} restaurants-navigation`}>
      {restaurants.map(
        (restaurant, index) =>
          restaurant.name && (
            <li className="restaurants-navigation__item" key={index}>
              <button
                className="restaurants-navigation__btn btn"
                onClick={() => setActiveRestaurant(restaurant.name)}
              >
                {restaurant.name}
              </button>
            </li>
          ),
      )}
    </ul>
  );
};
