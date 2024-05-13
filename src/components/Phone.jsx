import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useDispatch } from "react-redux";
import { changePhone } from "../features/user";

const Phone = () => {
  const [phone, setPhone] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setPhone(value);
    console.log("phone number",value);
    if (value >= 100000000000) {
      dispatch(changePhone({ phone: value }));
    }
  };
  return (
    <div className="flex flex-col text-2xl">
      <label>Phone Number</label>
      <PhoneInput
        className="py-5"
        country={"eg"}
        onlyCountries={["eg"]}
        value={phone}
        enableSearch={true}
        prefix=""
        searchPlaceholder="Search for your country"
        countryCodeEditable={false}
        defaultMask=".... ... ... ... .."
        onChange={(value) => {
          handleChange(value);
        }}
        inputProps={{
          required: true,
        }}
      />
      <div
        className={`text-red-500 text-sm ${phone <= 100000000000 ? "flex" : "hidden"}`}
      >
        Phone number is incorrect
      </div>
    </div>
  );
};

export default Phone;
