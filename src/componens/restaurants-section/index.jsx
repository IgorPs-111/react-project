import HeadingSection from "../heading-section/index.jsx";
import RestaurantsCard from "./restaurants-card/index.jsx";

const RestaurantsSection = () => {
  return (
    <div className="restaurants-section">
      <div className="restaurants-section__main">
        <HeadingSection
          className="restaurants-section__heading"
          headingText="Restaurants"
        />
        <div className="restaurants-section__cards">
          <RestaurantsCard className="restaurants-section__card" />
        </div>
      </div>
    </div>
  );
};
export default RestaurantsSection;
