import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductsProvider } from './ProductsContext';
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import DeleteProduct from './components/DeleteProduct';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <ProductsProvider>
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/edit-product/:category/:index" element={<EditProduct />} />
            <Route path="/delete-product/:category/:index" element={<DeleteProduct />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </ProductsProvider>
);

export default App;
