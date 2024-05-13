import {  useState } from "react";
import { useDispatch } from "react-redux";
import { changeUsername } from "../features/user";

const Username = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setName(e.target.value);
    if (name !== "") {
      dispatch(changeUsername({ name: e.target.value }));
    }
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
