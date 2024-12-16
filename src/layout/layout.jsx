import {RestaurantInfo} from "../components/restaurant-info";
import {PizzasSection} from "../components/pizzas-section";
import {PizzasHeader} from "../components/pizzas-header/index.jsx";
import {PizzasFooter} from "../components/pizzas-footer/index.jsx";
import {Header} from "../components/header/index.jsx";
import {Footer} from "../components/footer/index.jsx";

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapper__main">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}