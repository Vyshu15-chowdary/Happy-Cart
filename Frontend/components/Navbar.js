import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🛒 MyShop</h1>
      <div>
        <span className="font-semibold">Cart: {cartCount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
