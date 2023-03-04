import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartRedux";
import { useNavigate } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import Navbar from "../navbar/Navbar";
import styles from "./Checkout.module.css";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [validateMsg, setValidateMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Dùng useEffect để gọi dữ liệu getTotals từ redux
  useEffect(() => {
    dispatch(cartActions.getTotals());
  }, [cart, dispatch]);

  const onChangeName = (e) => {
    setFullName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  //Validate form
  const validateAll = () => {
    const msg = {};
    if (isEmpty(fullname)) {
      msg.fullname = "Vui lòng nhập FullName!";
    }

    if (isEmpty(email)) {
      msg.email = "Vui lòng nhập Email!";
    } else if (!isEmail(email)) {
      msg.email = "Email không đúng định dạng!";
      setEmail("");
    }

    if (isEmpty(phone)) {
      msg.phone = "Vui lòng nhập số điện thoại!";
    }

    if (isEmpty(address)) {
      msg.address = "Vui lòng nhập Address!";
    }

    setValidateMsg(msg);
    if (Object.keys(msg).length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const handlerPlaceOrder = (e) => {
    e.preventDefault();

    const isValid = validateAll();
    if (isValid) {
      alert("Đặt hàng thành công");
      localStorage.removeItem("cartArr");
      navigate("/");
    } else return;
  };

  return (
    <>
      <Navbar />
      <div className={styles.checkout}>
        <div className={styles.checkoutContainer}>
          <div className={styles.checkoutContent}>
            <div className={styles.checkoutBanner}>
              <h3>CHECKOUT</h3>
              <div className={styles.checkoutBannerTitle}>
                <h6>HOME</h6>
                <span>/</span>
                <h6>CART</h6>
                <span>/</span>
                <h6>CHECKOUT</h6>
              </div>
            </div>
            <div className={styles.checkoutBilling}>
              <div className={styles.checkoutBillingContainer}>
                <h5>BILLING DETAILS</h5>
                <div className={styles.checkoutInput}>
                  <h6>FULL NAME:</h6>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name Here!"
                    value={fullname}
                    onChange={onChangeName}
                  ></input>
                  <p>{validateMsg.fullname}</p>
                  <h6>EMAIL:</h6>
                  <input
                    type="email"
                    placeholder="Enter Your Email Here!"
                    value={email}
                    onChange={onChangeEmail}
                  ></input>
                  <p>{validateMsg.email}</p>
                  <h6>PHONE NUMBER:</h6>
                  <input
                    type="number"
                    placeholder="Enter Your Phone Number Here!"
                    value={phone}
                    onChange={onChangePhone}
                  ></input>
                  <p>{validateMsg.phone}</p>
                  <h6>ADDRESS:</h6>
                  <input
                    type="text"
                    placeholder="Enter Your Address Here!"
                    value={address}
                    onChange={onChangeAddress}
                  ></input>
                  <p>{validateMsg.address}</p>
                </div>
                <button
                  className={styles.checkoutBtn}
                  onClick={handlerPlaceOrder}
                >
                  Place order
                </button>
              </div>
              <div className={styles.checkoutOrder}>
                <h5>YOUR ORDER</h5>
                {cart.cartArr.map((cartItem, i) => (
                  <div className={styles.checkoutProduct} key={i}>
                    <h6>{cartItem.name}</h6>
                    <h6>
                      {Intl.NumberFormat("vi").format(cartItem.price)} VND x{" "}
                      {cartItem.quantity}
                    </h6>
                  </div>
                ))}
                <div className={styles.checkoutTotal}>
                  <h6>TOTAL</h6>
                  <h6>
                    {Intl.NumberFormat("vi").format(cart.cartTotalAmount)} VND
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
