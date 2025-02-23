import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import './App.css'

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div className="container mx-auto p-6">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </div>
        </Router>
        
    );
};

export default App;
