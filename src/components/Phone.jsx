import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useDispatch } from "react-redux";
import { changePhone } from "../features/user";

const Phone = ({ event }) => {
  const [phone, setPhone] = useState(0);
  const dispatch = useDispatch();
  if (event == true) {
    dispatch(changePhone({ phone: phone }));
  }
  return (
    <div className="flex flex-col text-2xl">
      <label>Phone Number</label>
      <PhoneInput
        className="py-5"
        country={"eg"}
        value={phone}
        onChange={(e) => {
          setPhone(e);
        }}
        enableSearch={true}
        prefix=""
        searchPlaceholder="Search for your country"
        countryCodeEditable={false}
      />
    </div>
  );
};

export default Phone;
