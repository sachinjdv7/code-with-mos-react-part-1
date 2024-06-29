import React from "react";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  categories: string;
}

interface Props {
  expenses: Expenses[];
  onDelete: (id: number) => void;
}

const Expense = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Categories</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.categories}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Expense;
