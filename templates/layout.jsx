export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapper__main">
        <header className="header"></header>
        {children}
      </div>
      <footer className="footer"></footer>
    </div>
  );
};
