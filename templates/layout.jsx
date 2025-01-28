import { Header } from "../src/componens/header/index.jsx";
import { Footer } from "../src/componens/footer/index.jsx";

export const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapper__main">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
