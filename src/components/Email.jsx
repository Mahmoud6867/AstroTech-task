import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeEmail } from "../features/user";

const Email = ({ event }) => {
  const [email, setEmail] = useState("");
  const [valEmail, setValEmail] = useState(false);

  const dispatch = useDispatch();

  function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+$/;
    setValEmail(regex.test(email))
    console.log("email test",regex.test(email));
  }

  if (event == true && valEmail == true) {
    dispatch(changeEmail({ email: email }));
  }
  return (
    <div className="flex flex-col text-2xl">
      <label>Email</label>
      <input
        required
        className="py-5"
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
      />
      <div
        className={`text-red-500 text-sm ${valEmail? "hidden" : "flex"}`}
      >
        Please, enter your email
      </div>
    </div>
  );
};

export default Email;
