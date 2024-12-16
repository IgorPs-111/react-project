import {Layout} from "./layout/layout.jsx";
import {PizzasSection} from "./components/pizzas-section/index.jsx";
import {RestaurantInfo} from "./components/restaurant-info/index.jsx";

export const App = () => {
  return (
    <Layout>
      <PizzasSection />
      <RestaurantInfo />
    </Layout>
  );
}