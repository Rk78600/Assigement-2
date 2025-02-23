import React, { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [visibleDetails, setVisibleDetails] = useState({});

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const toggleDetails = (id) => {
        setVisibleDetails(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="p-6">
            <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-blue-500 text-white text-lg">
                        <th className="border p-3">Image</th>
                        <th className="border p-3">Title</th>
                        <th className="border p-3">Price</th>
                        <th className="border p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.slice(0,).map(product => (
                        <React.Fragment key={product.id}>
                            <tr className="text-center bg-gray-100 hover:bg-gray-200 transition">
                                <td className="border p-3">
                                    <img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-cover rounded-md shadow-md" />
                                </td>
                                <td className="border p-3 font-bold text-gray-700">{product.title}</td>
                                <td className="border p-3 text-green-600 font-semibold">${product.price}</td>
                                <td className="border p-3">
                                    <button 
                                        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                                        onClick={() => toggleDetails(product.id)}
                                    >
                                        {visibleDetails[product.id] ? "Hide Details" : "Shoe cart details"}
                                    </button>
                                </td>
                            </tr>
                            {visibleDetails[product.id] && (
                                <tr className="bg-white">
                                    <td colSpan="4" className="border p-4 text-left text-gray-700">
                                        <p><strong>Description:</strong> {product.description}</p>
                                        <p><strong>Category:</strong> {product.category}</p>
                                        <p><strong>Stock:</strong> {product.stock}</p>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;