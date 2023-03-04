import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProductsContext from "../productsContext/ProductsContext";
import styles from "./Category.module.css";

function Category() {
  const productCategory = useContext(ProductsContext); //lấy dữ liệu từ ProductsContext
  const [categories, setCategories] = useState(productCategory.products); // State xử lý lấy dữ liệu category từ API

  //lọc những kết quả phù hợp với category người dùng muốn
  const filterResult = (catItem) => {
    const result = productCategory.products.filter((curData) => {
      return curData.category === catItem;
    });
    setCategories(result);
  };

  return (
    <div className={styles.category}>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryBanner}>
          <h3>SHOP</h3>
          <h6>SHOP</h6>
        </div>
        <div className={styles.categoryContent}>
          <div className={styles.categoryMenu}>
            <h4>CATEGORIES</h4>
            <dt className={styles.categorytitle}>APPLE</dt>
            <dd
              onClick={() => setCategories(productCategory.products)}
              className="titleColor"
            >
              All
            </dd>

            <dt>IPHONE & MAC</dt>
            <dd onClick={() => filterResult("iphone")} className="titleColor">
              IPhone
            </dd>
            <dd onClick={() => filterResult("ipad")} className="titleColor">
              Ipad
            </dd>
            <dd onClick={() => filterResult("macbook")} className="titleColor">
              Macbook
            </dd>

            <dt>WIRELESS</dt>
            <dd onClick={() => filterResult("airpod")} className="titleColor">
              Airpod
            </dd>
            <dd onClick={() => filterResult("watch")} className="titleColor">
              Watch
            </dd>

            <dt>OTHER</dt>
            <dd onClick={() => filterResult("module")} className="titleColor">
              Module
            </dd>
            <dd onClick={() => filterResult("keyboard")} className="titleColor">
              Keyboard
            </dd>
            <dd onClick={() => filterResult("other")} className="titleColor">
              Other
            </dd>
          </div>
          <div className={styles.categoryProductDetail}>
            <div className={styles.categorySearch}>
              <input type="text" placeholder="Enter Search Here!"></input>
              <select>
                <option>Default sorting</option>
              </select>
            </div>
            <div className={styles.categoryDetail}>
              {categories.map((item) => (
                <div className={styles.categoryItem} key={item.name}>
                  <Link to={`/detail/${item._id.$oid}`}>
                    <img src={item.img1} alt={item.name} width="200px" />
                  </Link>

                  <div className={styles.categoryItemDetail}>
                    <h6>{item.name}</h6>
                    <h6 className="titleColor">
                      {Intl.NumberFormat("vi").format(item.price)} VND
                    </h6>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.categoryPageIcon}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
              {categories.length > 0 ? <span>1</span> : null}
              <FontAwesomeIcon icon={faAngleDoubleRight} />
              <p className="titleColor">Showing 1-9 of 9 results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
