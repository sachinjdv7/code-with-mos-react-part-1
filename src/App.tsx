import { useState } from "react";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 85, categories: "Utilities" },
    { id: 2, description: "Apple", amount: 100, categories: "Utilities" },
    { id: 3, description: "Banana", amount: 958, categories: "Utilities" },
    { id: 4, description: "orange", amount: 783, categories: "Utilities" },
  ]);

  const visibleCategories = expenses.filter((item) =>
    selectedCategory ? item.categories === selectedCategory : expenses
  );

  const handleSubmit = (expense: any) => {
    setExpenses([
      ...expenses,
      {
        id: expenses.length + 1,
        description: expense.description,
        amount: expense.amount,
        categories: expense.category,
      },
    ]);
  };

  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={handleSubmit} />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleCategories}
        onDelete={(id) =>
          setExpenses(expenses.filter((item) => item.id !== id))
        }
      />
    </>
  );
}

export default App;
