import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="border flex flex-row justify-between p-5 text-2xl font-bold shadow-xl">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: 0{user.phone}</p>
    </div>
  );
};

export default Navbar;
