import {restaurants} from "../constants/mock.js";

export const RestaurantInfo = ({title}) => {
  return (
    <div className="restaurant-wrapper" style={{padding: '60px 0'}}>
      {!!title && <h1 style={{marginBottom: '60px', textAlign: 'center'}}>{title}</h1>}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr)', gap: '30px'}}>
        {restaurants.map((item) => (
          <RestaurantCard item={item} key={item.name} id={item.id}/>
        ))}
      </div>
    </div>
  )
}

function RestaurantCard({item, id}) {
  return (
    <div className="restaurant-card" id={id} style={{borderRadius: '10px', border: "1px solid #edc84b", padding: '20px'}}>
      {!!item && <h2 style={{textAlign: "center", marginBottom: "30px"}}>{item.name}</h2>}
      {item.menu.map((item) => (
        <RestaurantMenu item={item} key={item.name} id={item.id} />
      ))}
      {item.reviews.map((item, index) => (
        <RestaurantReviews item={item} key={index} id={item.id} />
      ))}
    </div>
  )
}

function RestaurantMenu({item, id}) {
  return (
    <>
      {!!item &&
        <div id={id} style={{marginBottom: '30px'}}>
          {!!item.name && <h3 style={{marginBottom: '5px'}}>{item.name}</h3>}
          {!!item.price && <strong style={{marginBottom: '5px', display: "block"}}>${item.price}</strong>}
          <ul>
            {!!item && item.ingredients.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      }
    </>
  )
}

function RestaurantReviews({item, id}) {
  const star = item.rating
  console.log(star)

  function Stars() {
    if (star === 1) return <strong>{item.rating} star</strong>
    return <strong>{item.rating} stars</strong>
  }

  return (
    <>
      {!!item &&
        <div id={id} style={{marginBottom: '30px'}}>
          {!!item.user && <h3 style={{marginBottom: '5px'}}>{item.user}</h3>}
          {!!item.text && <p style={{marginBottom: '5px'}}>{item.text}</p>}
          {!!item.rating && Stars()}
        </div>
      }
    </>
  )
}