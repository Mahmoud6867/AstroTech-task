import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeEmail } from "../features/user";

const Email = ({ event }) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  if (event == true) {
    dispatch(changeEmail({ email: email }));
  }
  return (
    <div className="flex flex-col text-2xl">
      <label>Email</label>
      <input
        className="py-5"
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
    </div>
  );
};

export default Email;
