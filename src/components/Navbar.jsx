import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.value);
  let numArray = Array.from(String(user.phone), Number);
  numArray.splice(2, 0, "-");
  let disPhoneStr = numArray.join("");
  console.log("string phone is", disPhoneStr);
  return (
    <div className="border flex flex-row justify-around p-5 text-2xl font-bold shadow-md">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: 00-{disPhoneStr}</p>
    </div>
  );
};

export default Navbar;
