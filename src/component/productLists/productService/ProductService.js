import React from "react";
import styles from "./ProductService.module.css";

function ProductService() {
  return (
    <div className={styles.productService}>
      <div className={styles.productServiceContainer}>
        <div className={styles.serviceTitle}>
          <div className={styles.serviceTitleItem}>
            <h4>FREE SHIPPING</h4>
            <h6 className="titleColor">Free shipping worlwide</h6>
          </div>
          <div className={styles.serviceTitleItem}>
            <h4>24 X 7 SERVICE</h4>
            <h6 className="titleColor">Free shipping worlwide</h6>
          </div>
          <div className={styles.serviceTitleItem}>
            <h4>FESTIVAL OFFER</h4>
            <h6 className="titleColor">Free shipping worlwide</h6>
          </div>
        </div>
        <div className={styles.information}>
          <div className={styles.informationTitle}>
            <h4>LET'S BE FRIENDS!</h4>
            <h6 className="titleColor">
              Nisi nisi tempor consequat laboris nisi.
            </h6>
          </div>
          <form className={styles.informationInput}>
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductService;
