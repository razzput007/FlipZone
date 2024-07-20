import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
   
  {

   productId:"wewwss",
   photo:"https://icentralstore.in/wp-content/uploads/2022/08/macbook-air-spacegray-gallery1-20220606.jpg",
   name:"MacBook",
   price:23032,
   quantity:10,
   stock:20

  }


];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(()=>{
    const TimeOutId=setTimeout(()=>{
     if(Math.random()>0.5){
      setIsValidCouponCode(true)
     }
     else{
      setIsValidCouponCode(false)
     }
    },1000)

    return ()=>{
      clearTimeout(TimeOutId);
      setIsValidCouponCode(false);
    }
  },[couponCode])
  return (
    <div className="cart">
      <main>
        {
          cartItems.length > 0 ?cartItems.map((i,idx)=>(<CartItem key={idx} cartItem={i}/>)) : <h1>No Items Addes</h1>
        }
      </main>
      <aside>
        <p>Subtotal :₹{subtotal}</p>
        <p>Shipping Charges:₹{shippingCharges}</p>
        <p>Tax:₹{tax}</p>
        <p>
          Discount:<em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total:₹{total} </b>
        </p>
        <input
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
        />
        {
         couponCode && (
          isValidCouponCode ?(
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
           ):(
            <span className="red">
            Invalid Coupon <VscError/>
            </span>
           )
         )
        }
        {
          cartItems.length>0 && <Link to="/shipping">Checkout</Link>
        }
      </aside>
    </div>
  );
};

export default Cart;
