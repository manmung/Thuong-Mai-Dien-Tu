import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.customerServices}>
          <h6>CUSTOMER SERVICES</h6>
          <div className="titleColor">
            <p>Help & Contact Us</p>
            <p>Returns & Refunds</p>
            <p>Online Stores</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className={styles.company}>
          <h6>COMPANY</h6>
          <div className="titleColor">
            <p>What We Do</p>
            <p>Available Services</p>
            <p>Latest Posts</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <h6>SOCIAL MEDIA</h6>
          <div className="titleColor">
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Pinterest</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
