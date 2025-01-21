// eslint-disable-next-line react/prop-types
const RestaurantsMenu = ({ restaurant, className }) => {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      {restaurant.menu.map((menu, index) => (
        <div
          className={`${className} restaurants-menu`}
          key={index}
          id={menu.id}
        >
          {menu.name && <h3 className="restaurants-menu__name">{menu.name}</h3>}
          {menu.price && (
            <strong className="restaurants-menu__price">{menu.price}$</strong>
          )}

          {menu.ingredients && (
            <ul className="restaurants-menu__ingredients">
              {menu.ingredients.map((ingredient, index) => (
                <li className="restaurants-menu__ingredient" key={index}>
                  {ingredient}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default RestaurantsMenu;
