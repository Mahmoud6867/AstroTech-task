import "./App.css";
import Navbar from "./components/Navbar";
import Username from "./components/Username";
import Email from "./components/Email";
import Phone from "./components/Phone";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [disable, setDisable] = useState(false);

  const loginButton = () => {
    if (user.name !== "" && user.email !== "" && user.phone >= 100000000000) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setDisable(false);
    } else {
      setDisable(true);
      alert("Must fill all of the form fields")
    }
  };
  return (
    <main className="flex flex-row justify-center h-svh">
      <div className="flex flex-col w-full">
        <Navbar name={name} email={email} phone={phone} />
        <div className="flex flex-row w-full justify-center">
          <div className="w-3/4 border rounded-lg p-5 m-5 shadow-2xl">
            <Username />
            <Email />
            <Phone />
            <div className="flex flex-col justify-center items-center">
              <button
                // disabled={disable}
                className="bg-blue-400 px-5 py-2 shadow-md  rounded-lg hover:bg-blue-300"
                onClick={() => {
                  loginButton();
                }}
              >
                Login
              </button>
              <div
                className={`text-red-500 text-sm mt-3 ${
                  disable ? "flex" : "hidden"
                }`}
              >
                Must fill all of the form fields
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
