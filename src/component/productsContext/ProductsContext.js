import React, { useEffect, useState, createContext } from 'react';

const ProductsContext = createContext();
export const ProductsProvide = ({ children }) => {
    const URL_API = 'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74';
    
    const [products, setProducts] = useState([]); //Lấy dữ liệu data từ json
    const [loading, setLoading] = useState(false); //Khi dữ liệu chưa trả về loading sẽ được thay thế
    const [saveProduct, setSaveProduct] = useState({}); // Lưu thông tin sản phẩm khi người dùng click vào
    
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const reponse = await fetch(URL_API);
            if(componentMounted) {
                setProducts(await reponse.clone().json());
                setLoading(false);
            }
            
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ 
            products,
            setProducts, 
            loading, 
            setLoading, 
            saveProduct, 
            setSaveProduct,
        }}>
            {children}
        </ProductsContext.Provider>
    );
};


export default ProductsContext;