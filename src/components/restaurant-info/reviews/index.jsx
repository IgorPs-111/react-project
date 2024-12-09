export const Reviews = ({ id, user, text, rating }) => {
  return (
    <div id={id} key={id} style={{marginBottom: '10px'}}>
      {!!user &&
        <h3>{user}</h3>
      }
      {!!text &&
        <p>{text}</p>
      }
      {!!rating &&
        <strong>{rating} stars</strong>
      }
    </div>
  )
}