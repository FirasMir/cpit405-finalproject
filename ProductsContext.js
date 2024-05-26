import React, { createContext, useState, useEffect } from 'react';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data.AppleProducts2023))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const addProduct = (category, newProduct) => {
        setProducts(prevProducts => ({
            ...prevProducts,
            [category]: [...prevProducts[category], newProduct]
        }));
    };

    const updateProduct = (category, index, updatedProduct) => {
        setProducts(prevProducts => ({
            ...prevProducts,
            [category]: prevProducts[category].map((product, i) => (i === index ? updatedProduct : product))
        }));
    };

    const deleteProduct = (category, index) => {
        setProducts(prevProducts => ({
            ...prevProducts,
            [category]: prevProducts[category].filter((_, i) => i !== index)
        }));
    };

    const sortProductsByPrice = (category, order) => {
        setProducts(prevProducts => ({
            ...prevProducts,
            [category]: [...prevProducts[category]].sort((a, b) => {
                const aPrice = Math.min(...a.capacities.map(c => c.price));
                const bPrice = Math.min(...b.capacities.map(c => c.price));
                return order === 'asc' ? aPrice - bPrice : bPrice - aPrice;
            })
        }));
    };

    return (
        <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, sortProductsByPrice }}>
            {children}
        </ProductsContext.Provider>
    );
};

export { ProductsProvider, ProductsContext };
