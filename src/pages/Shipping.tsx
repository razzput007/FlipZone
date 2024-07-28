import React, { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const navigate=useNavigate();

  const options = countryList().getData();

  const changeHandler = (e:ChangeEvent< HTMLInputElement| HTMLSelectElement>) => {
    setShippingInfo((prev)=>{
      return {...prev, [e.target.name]:e.target.value};
    })
  };

  const handleSelectChange = (selectedOption: { label: string; value: string } | null) => {
    setShippingInfo((prev) => {
      return { ...prev, country: selectedOption ? selectedOption.value : "" };
    });
  };
  return (
    <div className="shipping">
      <button className="back-btn" onClick={()=>navigate("./Cart.tsx")}>
        <BiArrowBack />
      </button>
      <form>
        <h1>Shipping Address</h1>
        <input
          required
          type="text"
          name="address"
          placeholder="Address"
          value={shippingInfo.address}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={changeHandler}
        />
        <input
          required
          type="text"
          name="state"
          placeholder="State"
          value={shippingInfo.state}
          onChange={changeHandler}
        />
        <Select
          name="country"
          required
          options={options}
          value={options.find(option => option.value === shippingInfo.country) || null}
          onChange={handleSelectChange}

        />
        <input
          required
          name="pincode"
          value={shippingInfo.pincode}
          placeholder="Pin Code"
          onChange={changeHandler}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
