export const PizzasFooter = () => {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <p>We're open from {openHours}:00 to {closeHours}:00. Come visit us or order online.</p>
      ):(
        <Order openHours={openHours} closeHours={closeHours} />
      )}
    </footer>
  )
}

function Order({openHours, closeHours}) {
  return (
    <div className="order">
      <p>We're happy to welcome you between {openHours}:00 and {closeHours}:00.</p>
      <button className="btn">Order</button>
    </div>
  )
}