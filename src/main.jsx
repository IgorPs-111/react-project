import {createRoot} from 'react-dom/client';

import {restaurants} from "../materials/mock.js";

const root = document.getElementById('root');

const reactRoot = createRoot(root); // дерево react

reactRoot.render(
  <>
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px'}}>
      <div className='restaurante' id={restaurants[0].id}>
        <h1 className='name'>{restaurants[0].name}</h1>
        <div className='menu-wrap' id={restaurants[0].menu[0].id}>
          <h3 className='menu-title'>{restaurants[0].menu[0].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[0].menu[0].ingredients[0]}</li>
            <li className='menu-item'>{restaurants[0].menu[0].ingredients[1]}</li>
          </ul>
          <span className='prace'>{restaurants[0].menu[0].price} Рябчикоф</span>
        </div>

        <div className='menu-wrap' id={restaurants[0].menu[1].id}>
          <h3 className='menu-title'>{restaurants[0].menu[1].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[0].menu[1].ingredients[0]}</li>
          </ul>
          <span className='prace'>{restaurants[0].menu[1].price} Рябчикоф</span>
        </div>

        <div className='menu-wrap' id={restaurants[0].menu[2].id}>
          <h3 className='menu-title'>{restaurants[0].menu[2].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[0].menu[2].ingredients[0]}</li>
            <li className='menu-item'>{restaurants[0].menu[2].ingredients[1]}</li>
          </ul>
          <span className='prace'>{restaurants[0].menu[2].price} Рябчикоф</span>
        </div>

        <div className='reviews-wrap'>
          <h3 className='reviews'>Reviews:</h3>
          <ul className='reviews-list'>
            <li className='reviews-item' id={restaurants[0].reviews[0].id}>
              <div className='reviews-card'>
                <span className='rating'>Rating: {restaurants[0].reviews[0].rating} Stars</span>
                <p className='revews-desc'>{restaurants[0].reviews[0].text}</p>
                <span className='revews-user'>{restaurants[0].reviews[0].user}</span>
              </div>
            </li>
            <li className='reviews-item' id={restaurants[0].reviews[1].id}>
              <div className='reviews-card'>
                <span className='rating'>Rating: {restaurants[0].reviews[1].rating} Stars</span>
                <p className='revews-desc'>{restaurants[0].reviews[1].text}</p>
                <span className='revews-user'>{restaurants[0].reviews[1].user}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='restaurante' id={restaurants[1].id}>
        <h1 className='name'>{restaurants[1].name}</h1>
        <div className='menu-wrap' id={restaurants[1].menu[0].id}>
          <h3 className='menu-title'>{restaurants[1].menu[0].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[1].menu[0].ingredients[0]}</li>
            <li className='menu-item'>{restaurants[1].menu[0].ingredients[1]}</li>
            <li className='menu-item'>{restaurants[1].menu[0].ingredients[2]}</li>
          </ul>
          <span className='prace'>{restaurants[1].menu[0].price} Рябчикоф</span>
        </div>

        <div className='menu-wrap' id={restaurants[1].menu[1].id}>
          <h3 className='menu-title'>{restaurants[1].menu[1].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[1].menu[1].ingredients[0]}</li>
            <li className='menu-item'>{restaurants[1].menu[1].ingredients[1]}</li>
            <li className='menu-item'>{restaurants[1].menu[1].ingredients[2]}</li>
            <li className='menu-item'>{restaurants[1].menu[1].ingredients[3]}</li>
          </ul>
          <span className='prace'>{restaurants[1].menu[1].price} Рябчикоф</span>
        </div>

        <div className='reviews-wrap'>
          <h3 className='reviews'>Reviews:</h3>
          <ul className='reviews-list'>
            <li className='reviews-item' id={restaurants[1].reviews[0].id}>
              <div className='reviews-card'>
                <span className='rating'>Rating: {restaurants[1].reviews[0].rating} Stars</span>
                <p className='revews-desc'>{restaurants[1].reviews[0].text}</p>
                <span className='revews-user'>{restaurants[1].reviews[0].user}</span>
              </div>
            </li>
            <li className='reviews-item' id={restaurants[1].reviews[1].id}>
              <div className='reviews-card'>
                <span className='rating'>Rating: {restaurants[1].reviews[1].rating} Stars</span>
                <p className='revews-desc'>{restaurants[1].reviews[1].text}</p>
                <span className='revews-user'>{restaurants[1].reviews[1].user}</span>
              </div>
            </li>
            <li className='reviews-item' id={restaurants[1].reviews[2].id}>
              <div className='reviews-card'>
                <span className='rating'>Rating: {restaurants[1].reviews[2].rating} Stars</span>
                <p className='revews-desc'>{restaurants[1].reviews[2].text}</p>
                <span className='revews-user'>{restaurants[1].reviews[2].user}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='restaurante' id={restaurants[2].id}>
        <h1 className='name'>{restaurants[2].name}</h1>
        <div className='menu-wrap' id={restaurants[2].menu[0].id}>
          <h3 className='menu-title'>{restaurants[2].menu[0].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[2].menu[0].ingredients[0]}</li>
          </ul>
          <span className='prace'>{restaurants[0].menu[0].price} Рябчикоф</span>
        </div>

        <div className='menu-wrap' id={restaurants[2].menu[1].id}>
          <h3 className='menu-title'>{restaurants[2].menu[1].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[2].menu[1].ingredients[0]}</li>
            <li className='menu-item'>{restaurants[2].menu[1].ingredients[1]}</li>
          </ul>
          <span className='prace'>{restaurants[2].menu[1].price} Рябчикоф</span>
        </div>

        <div className='menu-wrap' id={restaurants[2].menu[2].id}>
          <h3 className='menu-title'>{restaurants[2].menu[2].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[2].menu[2].ingredients[0]}</li>
          </ul>
          <span className='prace'>{restaurants[2].menu[2].price} Рябчикоф</span>
        </div>

        <div className='reviews-wrap'>
          <h3 className='reviews'>Reviews:</h3>
          <ul className='reviews-list'>
            <li className='reviews-item' id={restaurants[2].reviews[0].id}>
              <div className='reviews-card'>
                <span className='rating'>Rating: {restaurants[2].reviews[0].rating} Stars</span>
                <p className='revews-desc'>{restaurants[2].reviews[0].text}</p>
                <span className='revews-user'>{restaurants[2].reviews[0].user}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='restaurante' id={restaurants[3].id}>
        <h1 className='name'>{restaurants[3].name}</h1>
        <div className='menu-wrap' id={restaurants[3].menu[0].id}>
          <h3 className='menu-title'>{restaurants[3].menu[0].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[3].menu[0].ingredients[0]}</li>
          </ul>
          <span className='prace'>{restaurants[3].menu[0].price} Рябчикоф</span>
        </div>

        <div className='menu-wrap' id={restaurants[3].menu[1].id}>
          <h3 className='menu-title'>{restaurants[3].menu[1].name}</h3>
          <ul className='menu-list'>
            <li className='menu-item'>{restaurants[3].menu[1].ingredients[0]}</li>
            <li className='menu-item'>{restaurants[3].menu[1].ingredients[1]}</li>
          </ul>
          <span className='prace'>{restaurants[3].menu[1].price} Рябчикоф</span>
        </div>

        <div className='reviews-wrap'>
          <h3 className='reviews'>Reviews:</h3>
          <ul className='reviews-list'>
            <li className='reviews-item' id={restaurants[3].reviews[0].id}>
              <div className='reviews-card'>
                <span className='rating'>Rating: {restaurants[3].reviews[0].rating} Stars</span>
                <p className='revews-desc'>{restaurants[3].reviews[0].text}</p>
                <span className='revews-user'>{restaurants[3].reviews[0].user}</span>
              </div>
            </li>
            <li className='reviews-item' id={restaurants[3].reviews[1].id}>
              <div className='reviews-card'>
                <span className='rating'>Rating: {restaurants[3].reviews[1].rating} Stars</span>
                <p className='revews-desc'>{restaurants[3].reviews[1].text}</p>
                <span className='revews-user'>{restaurants[3].reviews[1].user}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <h1>Headphones</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px'}}>
        {restaurants.map(({ id, name, menu, reviews }) => (
          <div key={id}>
            <h2>{name}</h2>
            {menu.map(({ id, name, price, ingredients }) => (
              <div key={id}>
                <h3>{name}</h3>
                <ul>
                  {ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
                <div>{price} рябчикоф</div>
              </div>
            ))}
            {reviews.map(({ id, user, text, rating }) => (
              <div key={id}>
                <div>{user}</div>
                <p>{text}</p>
                <div>{rating}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </>
);