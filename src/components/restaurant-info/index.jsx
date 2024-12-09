import {Menu} from "./menu/index.jsx";
import {Reviews} from "./reviews/index.jsx";

export const RestaurantInfo = ({id, name, menu, reviews}) => {
  return (
    <div id={id} key={id}>
      <h2>{name}</h2>
      {menu.map(({id, name, price, ingredients}) => (
        <Menu id={id} name={name} price={price} ingredients={ingredients} />
      ))}
      <h2>Reviews</h2>
      {reviews.map(({id, user, text, rating}) => (
        <Reviews id={id} user={user} text={text} rating={rating} />
      ))}
    </div>
  )
}