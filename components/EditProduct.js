import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../ProductsContext';

const EditProduct = () => {
    const { category, index } = useParams();
    const { products, updateProduct } = useContext(ProductsContext);
    const navigate = useNavigate();

    const [model, setModel] = useState('');
    const [capacities, setCapacities] = useState([{ storage: '', price: '' }]);

    useEffect(() => {
        if (products && products[category] && products[category][index]) {
            const product = products[category][index];
            setModel(product.model);
            setCapacities(product.capacities);
        }
    }, [products, category, index]);

    const handleCapacityChange = (capacityIndex, key, value) => {
        const newCapacities = capacities.map((capacity, i) => (
            i === capacityIndex ? { ...capacity, [key]: value } : capacity
        ));
        setCapacities(newCapacities);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = { model, capacities };
        updateProduct(category, parseInt(index, 10), updatedProduct);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Model:
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
            </label>
            {capacities.map((capacity, i) => (
                <div key={i}>
                    <label>
                        Storage:
                        <input
                            type="text"
                            value={capacity.storage}
                            onChange={(e) => handleCapacityChange(i, 'storage', e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            value={capacity.price}
                            onChange={(e) => handleCapacityChange(i, 'price', e.target.value)}
                            required
                        />
                    </label>
                </div>
            ))}
            <button type="submit">Update Product</button>
        </form>
    );
};

export default EditProduct;
