import PizzasItems from "../pizzas-items/index.jsx";
import { pizzaData } from "../../../constants/data.js";

const PizzasMenu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div className="pizza-section__menu-wrap menu">
      <h2>out menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <PizzasItems className="menu__pizzas" pizzas={pizzas} />
        </>
      ) : (
        <p>We&#39;re still working on our menu. Please come back later :)</p>
      )}
    </div>
  );
};

export default PizzasMenu;
