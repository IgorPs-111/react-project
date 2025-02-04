import { useState } from "react";

export const Counter = ({ className }) => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    if (value < 5) {
      setValue(value + 1);
    }
  };

  return (
    <div className={`${className} counter`}>
      <button className="counter__btn btn" onClick={decrement}>
        -
      </button>
      <span className="counter__value">{value}</span>
      <button className="counter__btn btn" onClick={increment}>
        +
      </button>
    </div>
  );
};
