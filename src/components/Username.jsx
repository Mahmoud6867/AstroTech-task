import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUsername } from "../features/user";

const Username = ({ event }) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  if (event == true) {
    dispatch(changeUsername({ name: name }));
  }
  return (
    <div className="flex flex-col text-2xl">
      <label>Username</label>
      <input
        className="py-5"
        type="text"
        placeholder="Enter your username..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};

export default Username;
