import { Layout } from "../templates/layout.jsx";
import PizzaSection from "./componens/pizzas-section/index.jsx";
import RestaurantsSection from "./componens/restaurants-section/index.jsx";
import Count from "./componens/count/index.jsx";
import "../assets/styles/index.css";

export const App = () => {
  return (
    <Layout>
      <RestaurantsSection />
      <Count />
      <PizzaSection />
    </Layout>
  );
};
