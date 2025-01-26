import HeadingSection from "../heading-section/index.jsx";
import PizzasMenu from "./pizzas-menu/index.jsx";
import Footer from "../footer/index.jsx";

const PizzaSection = () => {
  return (
    <div className="pizza-section">
      <div className="container">
        <HeadingSection
          headingText="Fast React Pizza Co"
          className="pizza-section__header header"
        />
        <PizzasMenu />
        <Footer />
      </div>
    </div>
  );
};

export default PizzaSection;
