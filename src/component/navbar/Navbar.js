import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth";
import styles from "./Navbar.module.css";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentLogin")) || {};
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Click logout và chuyển đến trang Home
  const handleLogout = () => {
    dispatch(authActions.ON_LOGOUT());
    navigate("/");
  };

  useEffect(() => {
    setUserName(user.name);
  }, [user]);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarContent}>
          <Link to="/" className={styles.navHome}>
            Home
          </Link>
          <Link to="/shop" className={styles.navShop}>
            Shop
          </Link>
        </div>
        <div className={styles.navbarTitle}>
          <h2>BOUTIQUE</h2>
        </div>
        <div className={styles.navbarItem}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>

            <Link to="/cart" className={styles.navCart}>
              Cart
            </Link>
          </div>

          {userName ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                fill="currentColor"
                className="iconUser"
                viewBox="0 0 16 12"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>
              <span>{userName}▼</span>
              <span className={styles.navLogout} onClick={handleLogout}>
                (Logout)
              </span>
            </div>
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                fill="currentColor"
                className="iconUser"
                viewBox="0 0 16 12"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              </svg>

              <Link to="/login" className={styles.navLogin}>
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
