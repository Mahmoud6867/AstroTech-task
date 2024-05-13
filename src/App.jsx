import "./App.css";
import Navbar from "./components/Navbar";
import Username from "./components/Username";
import Email from "./components/Email";
import Phone from "./components/Phone";
import { useState } from "react";


function App() {
  const [click, isClicked] = useState(false);
  const loginButton = () => {
      isClicked(true);
      console.log("the button is clicked", click);
      setTimeout(() => {
        isClicked(false);
      }, 1);
  };
  return (
    <main className="flex flex-row justify-center h-svh">
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex flex-row w-full justify-center">
          <div className="w-3/4 border rounded-lg p-5 m-5 shadow-2xl">
            <Username event={click} />
            <Email event={click} />
            <Phone event={click} />
            <div className="flex justify-center">
              <button
                className="bg-blue-400 px-5 py-2 shadow-md  rounded-lg hover:bg-blue-300"
                onClick={() => {
                  loginButton();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
