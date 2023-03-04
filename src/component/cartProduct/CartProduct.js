import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../redux/cartRedux";
import styles from "./CartProduct.module.css";

function CartProduct() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(cartActions.getTotals());
  }, [cart, dispatch]);

  const handleDeleteCart = (cartItem) => {
    dispatch(cartActions.DELETE_CART(cartItem));
  };

  const handleDecreaseQuantity = (cartItem) => {
    dispatch(cartActions.DECREASE_CART(cartItem));
  };

  const handleIncreasingQuantity = (cartItem) => {
    dispatch(cartActions.ADD_CART(cartItem));
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <div className={styles.cartBanner}>
          <h2>CART</h2>
          <h4 className="titleColor">CART</h4>
        </div>
        {cart.cartArr.length === 0 ? (
          <div className={styles.cartEmpty}>
            <p>Your cart is currently empty!</p>
            <div className={styles.startShopping}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              <span onClick={() => navigate("/shop")}>Start Shopping</span>
            </div>
          </div>
        ) : (
          <div className={styles.cartContent}>
            <h2>SHOPPING CART</h2>
            <div className={styles.cartProductItems}>
              <div className={styles.cartItems}>
                <div className={styles.cartItem}>
                  <div className={styles.title}>
                    <h5>IMAGE</h5>
                    <h5>PRODUCT</h5>
                    <h5>PRICE</h5>
                    <h5>QUANTITY</h5>
                    <h5>TOTAL</h5>
                    <h5>REMOVE</h5>
                  </div>
                  {cart.cartArr.map((cartItem) => (
                    <div className={styles.cartProduct} key={cartItem._id.$oid}>
                      <img
                        src={cartItem.img1}
                        alt={cartItem.name}
                        width={"70px"}
                        height={"80px"}
                      />
                      <h6>{cartItem.name}</h6>
                      <h6>
                        {Intl.NumberFormat("vi").format(cartItem.price)} VND
                      </h6>
                      <div className={styles.cartQuantity}>
                        {/* Giảm số lượng */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          fill="currentColor"
                          className={styles.iconQuantity}
                          viewBox="0 0 16 16"
                          onClick={() => handleDecreaseQuantity(cartItem)}
                        >
                          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>
                        <span>{cartItem.quantity}</span>
                        {/* Tăng số lượng */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          fill="currentColor"
                          className={styles.iconQuantity}
                          viewBox="0 0 16 16"
                          onClick={() => handleIncreasingQuantity(cartItem)}
                        >
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                      </div>
                      <h6>
                        {Intl.NumberFormat("vi").format(
                          cartItem.price * cartItem.quantity
                        )}{" "}
                        VND
                      </h6>
                      {/* Delete product */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        className="clearCartItem"
                        viewBox="0 0 16 16"
                        onClick={() => handleDeleteCart(cartItem)}
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                      </svg>
                    </div>
                  ))}
                  <div className={styles.backAndNext}>
                    <div className={styles.continueShopping}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="8"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                      </svg>
                      <h6 onClick={() => navigate("/shop")}>
                        Continue shopping
                      </h6>
                    </div>
                    <div className={styles.cartCheckout}>
                      <h6 onClick={() => navigate("/checkout")}>
                        Proceed to checkout
                      </h6>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="8"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className={styles.cartTotal}>
                  <div className={styles.cartTotalContainer}>
                    <h3>CART TOTAL</h3>
                    <div className={styles.SubTotal}>
                      <h6>SUBTOTAL</h6>
                      <span>
                        {Intl.NumberFormat("vi").format(cart.cartTotalAmount)}{" "}
                        VND
                      </span>
                    </div>
                    <div className={styles.total}>
                      <h6>TOTAL</h6>
                      <span>
                        {Intl.NumberFormat("vi").format(cart.cartTotalAmount)}{" "}
                        VND
                      </span>
                    </div>
                    <input type="text" placeholder="Enter your coupon" />
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        className="bi bi-gift"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                      </svg>
                      Apply coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartProduct;
