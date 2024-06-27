import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "orange juice",
    price: 11,
  });
  const handleClick = () => {
    setDrink({ ...drink, price: 12 });
  };
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
