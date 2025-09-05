import React from "react";

const ProductCard = ({product,addToCart})=>{
    return(

        <div>
            <img src={product.image} alt={product.name} className="rounded-lg mb-3"/>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-600">₹{product.price}</p>

        </div>
    )
}