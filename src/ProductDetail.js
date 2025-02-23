import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error("Error fetching product details:", error));
    }, [id]);

    if (!product) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-lg">
            <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover rounded-md"/>
            <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <p className="text-gray-800 font-semibold mt-2">Price: ${product.price}</p>
            <Link to="/products" className="text-blue-500 mt-4 inline-block">Back to Products</Link>
        </div>
    );
};

export default ProductDetail;