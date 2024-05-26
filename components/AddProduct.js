import React, { useState, useContext } from 'react';
import { ProductsContext } from '../ProductsContext';

const AddProduct = () => {
    const { addProduct } = useContext(ProductsContext);
    const [category, setCategory] = useState('iPhone');
    const [model, setModel] = useState('');
    const [capacities, setCapacities] = useState([{ storage: '', price: '' }]);

    const handleCapacityChange = (index, key, value) => {
        const newCapacities = capacities.map((capacity, i) => (
            i === index ? { ...capacity, [key]: value } : capacity
        ));
        setCapacities(newCapacities);
    };

    const handleAddCapacity = () => {
        setCapacities([...capacities, { storage: '', price: '' }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { model, capacities };
        addProduct(category, newProduct);
        setModel('');
        setCapacities([{ storage: '', price: '' }]);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>
                    Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="iPhone">iPhone</option>
                        <option value="iPad">iPad</option>
                        <option value="MacBook">MacBook</option>
                    </select>
                </label>
                <label>
                    Model:
                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
                </label>
                {capacities.map((capacity, index) => (
                    <div key={index}>
                        <label>
                            Storage:
                            <input
                                type="text"
                                value={capacity.storage}
                                onChange={(e) => handleCapacityChange(index, 'storage', e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            Price:
                            <input
                                type="number"
                                value={capacity.price}
                                onChange={(e) => handleCapacityChange(index, 'price', e.target.value)}
                                required
                            />
                        </label>
                    </div>
                ))}
                <button type="button" onClick={handleAddCapacity}>Add Capacity</button>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
