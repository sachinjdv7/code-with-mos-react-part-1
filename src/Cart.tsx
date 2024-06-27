import React from "react";

interface Props {
  cartItem: string[];
  onClear: () => void;
}

const Cart = ({ cartItem, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      {cartItem.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={onClear}>Clear Items</button>
    </>
  );
};

export default Cart;
