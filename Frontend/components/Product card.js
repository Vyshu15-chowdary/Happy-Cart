import React from "react";

const ProductCard = ({product,addToCart})=>{
    return(

        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="rounded-lg mb-3"/>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-600">₹{product.price}</p>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={()=>{
                addToCart(product)
            }}
            >Add to Cart

            </button>

        </div>
    );
};


export default ProductCard;