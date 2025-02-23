import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-500 to-pink-600 p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between">
                <h1 className="text-xl font-bold">My Store</h1>
                <div>
                    <Link to="/" className="mx-2 hover:underline">Home</Link>
                    <Link to="/products" className="mx-2 hover:underline">Products</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;