import React, { useState, useContext } from 'react';
import { ProductsContext } from '../ProductsContext';

const SortComponent = ({ category }) => {
    const { sortProductsByPrice } = useContext(ProductsContext);
    const [order, setOrder] = useState('asc');

    const handleSort = () => {
        sortProductsByPrice(category, order);
        setOrder(order === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="sort-component">
            <button onClick={handleSort}>
                Sort by Price {order === 'asc' ? 'Ascending' : 'Descending'}
            </button>
        </div>
    );
};

export default SortComponent;
