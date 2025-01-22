// eslint-disable-next-line react/prop-types
const PizzasItems = ({ className, pizzas }) => {
  return (
    <ul className={`${className} pizzas`}>
      {/* eslint-disable-next-line react/prop-types */}
      {pizzas.map((pizza, index) => (
        <li
          className={`pizzas__pizza pizza ${pizza.soldOut ? "sold-out" : ""}`}
          key={index}
        >
          <img src={pizza.photoName} width="120" height="120" alt="Image" />
          <div>
            {pizza.name && <h3>{pizza.name}</h3>}
            {pizza.ingredients && <p>{pizza.ingredients}</p>}
            {pizza.soldOut ? (
              <span>sold out</span>
            ) : pizza.price ? (
              <span>{pizza.price}</span>
            ) : (
              <span>Revaluation</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PizzasItems;
