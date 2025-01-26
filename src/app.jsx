import "../assets/styles/index.css";
import { Layout } from "../templates/layout.jsx";
import PizzaSection from "./componens/pizzas-section/index.jsx";
import RestaurantsSection from "./componens/restaurants-section/index.jsx";
import Count from "./componens/count/index.jsx";

export const App = () => {
  return (
    <Layout>
      <Count />
      <PizzaSection />
      <RestaurantsSection />
    </Layout>
  );
};
