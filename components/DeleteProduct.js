import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../ProductsContext';

const DeleteProduct = () => {
    const { category, index } = useParams();
    const { products, deleteProduct } = useContext(ProductsContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (products && products[category] && products[category][index]) {
            deleteProduct(category, parseInt(index, 10));
            navigate('/');
        } else {
            navigate('/');
        }
    }, [products, category, index, deleteProduct, navigate]);

    return null;
};

export default DeleteProduct;
