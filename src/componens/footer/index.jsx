const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpened = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpened ? (
        <div className="footer__order order">
          <p>
            We&#39;re open from 12:00 to 22:00. Come visit us or order online.
          </p>
          <button className="footer__btn btn">Order</button>
        </div>
      ) : (
        <p>
          We&#39;re happy to welcome you between {openHour}:00 and {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
