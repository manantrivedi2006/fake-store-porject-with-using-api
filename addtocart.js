import React from "react";

function EmptyCart() {
  return (
    <div className="main-content border border-tertiary text-center p-4">
      <img
        src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
        className="w-25 h-25 mb-3"
        alt="Empty cart"
      />
      <h3>Your cart is empty!</h3>
      <h6>Add items to it now.</h6>
      <button className="shopnow bg-primary text-white mt-3 px-4 py-2 rounded">
        Shop now
      </button>
    </div>
  );
}

export default EmptyCart;
