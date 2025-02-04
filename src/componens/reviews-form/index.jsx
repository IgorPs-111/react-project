import {useForm} from "./index.js";

export const ReviewsForm = () => {
  const {form, setName, setText, setAddress} = useForm();
  const {name, text, address} = form;

  return (
    <form action="/">
      <div>
        <label htmlFor="name">
          Name
        </label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="text">
          Text
        </label>
        <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div>
        <label htmlFor="address">
          Address
        </label>
        <input type="text" id="adresse" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>

      <button className="btn">Clear</button>
    </form>
  )
}