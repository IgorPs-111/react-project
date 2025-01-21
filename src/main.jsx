import { createRoot } from "react-dom/client";
// import { restaurants } from "./constants/mock.js";
import "../assets/styles/index.css";
import RestaurantsSection from "./componens/restaurants-section/index.jsx";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <>
    {/*<ul className="list">*/}
    {/*  {[1, 2, 3, 4, 5, 6, 7].map((item) => (*/}
    {/*    <li className="item" key={item}>*/}
    {/*      {item}*/}
    {/*    </li>*/}
    {/*  ))}*/}
    {/*</ul>*/}
    <RestaurantsSection />
  </>,
);
