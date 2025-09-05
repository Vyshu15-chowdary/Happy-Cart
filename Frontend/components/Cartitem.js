import React from "react";

const Cart = ({cart})=>{

    const total = cart.reduce((sum,item)=> sum + item.price,0);

    return(
        <div>
            <h2>🛒 Cart</h2>
            {cart.length === 0 ? (
                <p>No items in the cart</p>
            ):(
                <ul>
                    {cart.map((item,i)=>(
                        <li key={i} className="flex justify-between border-b py-2">
                            <span>{item.name}</span>
                            <span>₹{item.price}</span>

                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ₹{total} </h3>
        </div>
    );

};

export default Cart;