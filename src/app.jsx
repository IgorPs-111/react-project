import {RestaurantInfo} from "./components/restaurant-info/index.jsx";
import {PizzasSection} from "./components/pizzas-section/index.jsx";

export const App = () => {
  return (
    <div className="wrapper">
      <PizzasSection />
      <RestaurantInfo />
    </div>
  );
}