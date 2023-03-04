import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { popupActions } from "../../redux/popup";
import ProductService from "./productService/ProductService";
import ProductPopup from "../productPopup/ProductPopup";
import ProductsContext from "../productsContext/ProductsContext";
import styles from "./ProductLists.module.css";

function ProductLists() {
  const productLists = useContext(ProductsContext); //lấy dữ liệu từ ProductsContext
  const showPopup = useSelector((state) => state.popup.showPopup);
  const dispatch = useDispatch();

  //Click ẩn popup
  const handleClickOpenDetail = () => {
    dispatch(popupActions.SHOW_POPUP());
  };

  const Loading = () => {
    return <>Loading...</>;
  };

  return (
    <div className={styles.productLists}>
      <div className={styles.productListsContainer}>
        <div className={styles.productListsTitle}>
          <h6 className="titleColor">MADE THE HARD WAY</h6>
          <h5>TOP TRENDING PRODUCTS</h5>
        </div>
        <div className={styles.productListsContent}>
          {productLists.loading ? (
            <Loading />
          ) : (
            productLists.products.map((item) => (
              <div className={styles.productItem} key={item._id.$oid}>
                <img
                  src={item.img1}
                  alt={item.name}
                  width="100%"
                  onClick={() => {
                    //Lưu trữ dữ liệu sản phẩm khi được click
                    productLists.setSaveProduct({
                      id: item._id.$oid,
                      name: item.name,
                      image: item.img1,
                      price: item.price,
                      short_desc: item.short_desc,
                    });
                    handleClickOpenDetail();
                  }}
                />

                <div className={styles.productItemDetail}>
                  <h6>{item.name}</h6>
                  <h6 className="titleColor">
                    {Intl.NumberFormat("vi").format(item.price)} VND
                  </h6>
                </div>
              </div>
            ))
          )}
        </div>
        <ProductService />
      </div>
      {showPopup && (
        <ProductPopup
          props={{
            id: productLists.saveProduct.id,
            name: productLists.saveProduct.name,
            image: productLists.saveProduct.image,
            price: productLists.saveProduct.price,
            short_desc: productLists.saveProduct.short_desc,
          }}
        />
      )}
    </div>
  );
}

export default ProductLists;
