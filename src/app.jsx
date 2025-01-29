import { Layout } from "../templates/layout.jsx";
import PizzaSection from "./componens/pizzas-section/index.jsx";
import RestaurantsSection from "./componens/restaurants-section/index.jsx";
import Count from "./componens/count/index.jsx";
import "../assets/styles/index.css";
import { DeveloperCard } from "./componens/developer-card/index.jsx";
import { FlashCard } from "./componens/flash-cards/index.jsx";

export const App = () => {
  return (
    <Layout>
      <FlashCard />
      <DeveloperCard />
      <RestaurantsSection />
      <Count />
      <PizzaSection />
    </Layout>
  );
};
