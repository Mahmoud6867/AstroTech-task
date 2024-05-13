

const Navbar = ({name,email,phone}) => {

    // convert the phone number to the required format 00-20-xxxxxx
    
    let numArray = Array.from(String(phone), Number);
    numArray.splice(2, 0, "-");
    numArray.splice(0, 0, "00-");
    let disPhoneStr = numArray.join("");

  return (
    <div className="border flex flex-row justify-around p-5 text-2xl font-bold shadow-md">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone Number: {phone===0?"":disPhoneStr}</p>
    </div>
  );
};

export default Navbar;
