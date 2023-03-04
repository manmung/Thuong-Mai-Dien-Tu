import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./banner.module.css";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContent}>
          <h6 className="titleColor"> NEW INSPIRATION 2020</h6>
          <h3>20% OFF ON NEW SEASON</h3>
          <button onClick={() => navigate("/shop")}>Browse collections</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
