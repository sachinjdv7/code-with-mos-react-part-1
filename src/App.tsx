import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "orange juice",
    price: 11,
    categorie: {
      vegPrice: 200,
      nonVegPrice: 500,
    },
  });
  const handleClick = () => {
    setDrink({ ...drink, categorie: { ...drink.categorie, nonVegPrice: 505 } });
  };
  return (
    <div>
      {drink.categorie.nonVegPrice}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
