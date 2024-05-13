import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUsername } from "../features/user";

const Username = ({ event }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  if (event == true && name !== "") {
    dispatch(changeUsername({ name: name }));
  }
  const handleChange = (e) => {
    console.log("The username event", e);
    setName(e.target.value);
  };
  return (
    <div className="flex flex-col text-2xl">
      <label>Username</label>
      <input
        required
        className="py-5"
        type="text"
        placeholder="Enter your username..."
        value={name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <div className={`text-red-500 text-sm ${name ==="" ? "flex" : "hidden"}`}>
        Please, enter your name
      </div>
    </div>
  );
};

export default Username;
