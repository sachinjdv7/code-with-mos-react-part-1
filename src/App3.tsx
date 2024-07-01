import React, { useState } from "react";
import ProductList from "./ProductList";

const App3 = () => {
  const [category, setCategory] = useState("");
  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Grocerios">Grocerios</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App3;
