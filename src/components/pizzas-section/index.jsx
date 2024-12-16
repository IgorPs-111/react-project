import "/assets/styles/index.css"
import {pizzaData} from "../constants/data.js"
import {PizzasHeader} from "../pizzas-header/index.jsx";
import {PizzasFooter} from "../pizzas-footer/index.jsx";

export const PizzasSection = () => {
  return (
    <section className="pizzas-section">
      <div className="container">
        <PizzasHeader />
        <Menu />
        <PizzasFooter />
      </div>
    </section>
  )
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>

      <ul className="pizzas">
        {pizzaData.length ?
          pizzaData.map((item) => (
            <Pizza pizza={item} key={item.name} soldOut={item.soldOut} />
          ))
          : <p>Пицц в нашем каталоге пока нет</p>
        }
      </ul>
    </main>
  )
}

function Pizza({pizza, soldOut}) {
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name}/>
      <div>
        {!!pizza.name && <h3>{pizza.name}</h3>}
        {!!pizza.ingredients && <p>{pizza.ingredients}</p>}
        {!!soldOut ? !!pizza.price && <span>SOLD OUT</span> : <span>{pizza.price}</span>}
      </div>
    </li>
  )
}