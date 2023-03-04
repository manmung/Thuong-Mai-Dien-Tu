import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../productsContext/ProductsContext";
import styles from "./RelatedProduct.module.css";

function RelatedProduct(props) {
  const productRelate = useContext(ProductsContext); //lấy dữ liệu từ ProductsContext
  const [relate, setRelate] = useState();
  const relatedProductsArr = [];

  useEffect(() => {
    if (props.props !== undefined) {
      productRelate.products.map((item) => {
        if (item.category === props.props) {
          relatedProductsArr.push(item);
          setRelate(relatedProductsArr);
        }
      });
    }
  }, [props.props, productRelate.products]);

  return (
    <div className={styles.realted_product}>
      {relate &&
        relate.map((item) => (
          <div key={item._id.$oid} className={styles.realted_product__detail}>
            <Link to={`/detail/${item._id.$oid}`}>
              <img
                src={item.img1}
                alt={item.name}
                width={"100px"}
                height={"120px"}
              />
            </Link>
            <h6>{item.name}</h6>
            <h6 className="titleColor">
              {Intl.NumberFormat("vi").format(item.price)} VND
            </h6>
          </div>
        ))}
    </div>
  );
}

export default RelatedProduct;
