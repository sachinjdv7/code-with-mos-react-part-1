import { useState } from "react";
import Form from "./components/Form";
import Expense from "./expense-tracker/components/Expense";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 85, categories: "Utilities" },
    { id: 2, description: "Apple", amount: 100, categories: "Utilities" },
    { id: 3, description: "Banana", amount: 958, categories: "Utilities" },
    { id: 4, description: "orange", amount: 783, categories: "Utilities" },
  ]);

  return (
    <Expense
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((item) => item.id !== id))}
    />
  );
}

export default App;
