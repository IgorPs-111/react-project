import { useForm } from "./use-form.js";

export const ReviewsFormmmm = () => {
  const { form, setName, setText, setAddress } = useForm();
  const { name, text, address } = form;

  return (
    <form action="/" onSubmit={(event) => event.preventDefault()}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </form>
  );
};
