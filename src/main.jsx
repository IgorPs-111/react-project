import { createRoot } from "react-dom/client";
import "../assets/styles/index.css";
import RestaurantsSection from "./componens/restaurants-section/index.jsx";
import PizzaSection from "./componens/pizzas-section/index.jsx";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <>
    <PizzaSection />
    <RestaurantsSection />
  </>,
);
