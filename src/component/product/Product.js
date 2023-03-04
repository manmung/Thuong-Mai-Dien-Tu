import React from "react";
import { Link } from 'react-router-dom';
import Iphone from '../../Images/product_1.png';
import Macbook from '../../Images/product_2.png';
import Ipad from '../../Images/product_3.png';
import ApWatch from '../../Images/product_4.png';
import AirPods from '../../Images/product_5.png';
import styles from './Product.module.css';

function Product() {
    return ( 
        <div className={styles.product}>
            <div className={styles.productContainer}>
                <div className={styles.productTitle}>
                    <h6 className="titleColor">CAREFULLY CREATED COLLECTIONS</h6>
                    <h5>BROWSE OUR CATEGORIES</h5>
                </div>
                <div className={styles.image_1}>
                    <Link to={'/shop'}>
                        <img src={Iphone} alt="Iphone" width='100%'/>
                    </Link>
                    <Link to={'/shop'}>
                        <img src={Macbook} alt="Mac-book" width='100%'/>
                    </Link>
                </div>
                <div className={styles.image_2}>
                    <Link to={'/shop'}>
                        <img src={Ipad} alt="Ipad" width='100%'/>
                    </Link>
                    <Link to={'/shop'}>
                        <img src={ApWatch} alt="Ap-Watch" width='100%'/>
                    </Link>
                    <Link to={'/shop'}>
                        <img src={AirPods} alt="AirPods" width='100%'/>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Product;