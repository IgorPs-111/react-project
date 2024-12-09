import {restaurants} from './components/constants/mock.js'
import {RestaurantInfo} from "./components/restaurant-info/index.jsx";

export const App =({ title }) => {
  return (
    <div className="restaurant-wrapper">
      {!!title && <h1>{title}</h1>}
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, minmax(0, 1fr)', gap: '30px'}}>
        {restaurants.map(({ id, name, menu, reviews }) => (
          <RestaurantInfo id={id} key={id} name={name} menu={menu} reviews={reviews} />
        ))}
      </div>
    </div>
  );
}