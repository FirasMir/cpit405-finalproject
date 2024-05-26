import React, { useContext } from 'react';
import { ProductsContext } from '../ProductsContext';
import { Link } from 'react-router-dom';
import SortComponent from './SortComponent';

const ProductsList = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className="container">
            {products && Object.keys(products).map(category => (
                <div key={category} className="product-category">
                    <h2>{category}</h2>
                    <SortComponent category={category} />
                    {products[category].map((product, index) => (
                        <div key={index} className="product">
                            <h3>{product.model}</h3>
                            <ul>
                                {product.capacities.map((capacity, capIndex) => (
                                    <li key={capIndex}>
                                        {capacity.storage} - ${capacity.price}
                                    </li>
                                ))}
                            </ul>
                            <Link to={`/edit-product/${category}/${index}`}>Edit</Link>
                            <Link to={`/delete-product/${category}/${index}`}>Delete</Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
