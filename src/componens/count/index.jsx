import { useState } from "react";

export const Count = () => {
  const [value, setValue] = useState(0);
  const decrement = () => setValue(value - 1);
  const increment = () => setValue(value + 1);
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "50px 0" }}
    >
      <button className="btn" onClick={decrement}>
        Decrement
      </button>
      <div style={{ padding: "10px", fontSize: "20px" }}>{value}</div>
      <button className="btn" onClick={increment}>
        Increment
      </button>
    </div>
  );
};

export default Count;
