import { useState } from "react";
import NavBar from "./NavBar";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState(["product1", "product2"]);
  return (
    <>
      <NavBar itemCount={cart.length} />
      <Cart cartItem={cart} onClear={() => setCart([])} />
    </>
  );
}

export default App;
