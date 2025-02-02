import { useState } from "react";
import { Counter } from "../restaurants-section/restaurants-cards/counter/index.jsx";

export const ReviewsFom = ({ className }) => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <form
      className={`${className} reviews-form`}
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="reviews-form__input-wrap">
        <label htmlFor="name">Name</label>
        <input
          className="reviews-form"
          type="text"
          id="name"
          name="name"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="reviews-form__input-wrap">
        <label htmlFor="text">Text</label>
        <textarea name="text" id="text" cols="30" rows="10" />
      </div>
      <Counter />
    </form>
  );
};
