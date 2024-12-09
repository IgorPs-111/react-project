export const Menu = ({ id, name, price, ingredients }) => {
  return (
    <div id={id} key={id} style={{marginBottom: '10px'}}>
      {!!name &&
        <h3>{name}</h3>
      }
      {!!ingredients &&
        <ul>
          {ingredients.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      }
      {!!price &&
        <strong>{price} Рэблсов</strong>
      }
    </div>
  )
}