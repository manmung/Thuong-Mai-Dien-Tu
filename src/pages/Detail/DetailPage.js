import React from "react";
import ProductDetail from "../../component/productDetail/ProductDetail";

function DetailPage(props) {
    return ( 
        <div>
            <ProductDetail product_id={props} />
        </div>
    );
}

export default DetailPage;