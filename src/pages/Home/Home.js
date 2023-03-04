import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Banner from "../../component/banner/Banner";
import Product from "../../component/product/Product";
import ProductLists from "../../component/productLists/ProductLists";

function Home() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Product />
            <ProductLists />
            <Footer />
        </div>
    );
}

export default Home;