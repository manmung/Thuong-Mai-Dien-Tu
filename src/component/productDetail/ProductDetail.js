import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import { cartActions } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import RelatedProduct from "../related_products/RelatedProduct";
import ProductsContext from "../productsContext/ProductsContext";
import styles from "./ProductDetail.module.css";

function ProductDetail() {
  const { id } = useParams();
  const productDetail = useContext(ProductsContext); //lấy dữ liệu từ ProductsContext
  const [itemData, setItemData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [img, setImg] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let long_desc_1 = [];

  if (typeof itemData.long_desc === "string") {
    long_desc_1 = itemData.long_desc.split("\n") || [];
  }

  const Loading = () => {
    return <>Loading...</>;
  };

  useEffect(() => {
    if (id !== undefined) {
      // eslint-disable-next-line
      productDetail.products.map((item) => {
        if (item._id.$oid === id) {
          setItemData(item);
        }
      });
    }
  }, [id, productDetail.products]);

  const handleClickImg = (e) => {
    setImg(e);
  };

  const handleDecreQuantily = (quantity) => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const handleIncreQuantily = (quantity) => {
    setQuantity(quantity + 1);
  };

  const handleAddCart = (itemData) => {
    dispatch(cartActions.ADD_CART(itemData));
    navigate("/cart");
  };

  return (
    <>
      <Navbar />
      <div className={styles.productDetail}>
        {productDetail.loading ? (
          <Loading />
        ) : (
          <div className={styles.productDetailContainer}>
            <div className={styles.productDetailItem}>
              <div className={styles.productDetailImg}>
                <div className={styles.productDetailImgList}>
                  <img
                    src={itemData.img1}
                    alt={itemData.name}
                    width={"50px"}
                    onClick={() => {
                      handleClickImg(itemData.img1);
                    }}
                  />
                  <img
                    src={itemData.img2}
                    alt={itemData.name}
                    width={"50px"}
                    onClick={() => {
                      handleClickImg(itemData.img2);
                    }}
                  />
                  <img
                    src={itemData.img3}
                    alt={itemData.name}
                    width={"50px"}
                    onClick={() => {
                      handleClickImg(itemData.img3);
                    }}
                  />
                  <img
                    src={itemData.img4}
                    alt={itemData.name}
                    width={"50px"}
                    onClick={() => {
                      handleClickImg(itemData.img4);
                    }}
                  />
                </div>
                <div className={styles.ImgTotal}>
                  <img
                    src={img || itemData.img1}
                    alt={itemData.name}
                    width={"200px"}
                    height={"230px"}
                  />
                </div>
              </div>
              <div className={styles.productDetailList}>
                <h4>{itemData.name}</h4>
                <h6 className="titleColor">
                  {Intl.NumberFormat("vi").format(itemData.price)} VND
                </h6>
                <p className="titleColor">{itemData.short_desc}</p>
                <div className={styles.productDetailListCategory}>
                  <h6>CATEGORY:</h6>
                  <p className="titleColor">{itemData.category}</p>
                </div>
                <div className={styles.addToCart}>
                  <label className="titleColor">QUANTITY</label>
                  <p>
                    <FontAwesomeIcon
                      icon={faCaretLeft}
                      onClick={() => handleDecreQuantily(quantity)}
                    />
                    <span>{quantity}</span>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      onClick={() => handleIncreQuantily(quantity)}
                    />
                  </p>
                  <button
                    className={styles.addCartBtn}
                    onClick={() => handleAddCart(itemData)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.productDescription}>
              <h6>DESCRIPTION</h6>
              <h6>PRODUCT DESCRIPTION</h6>
              {long_desc_1.map((item) => (
                <p className="titleColor" key={item}>
                  {item}
                </p>
              ))}
            </div>
            <div className={styles.relatedProduct}>
              <h6>REALTED PRODUCTS</h6>
              <RelatedProduct props={itemData.category} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
