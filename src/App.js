import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 10.0,
    date: new Date(2019, 1, 1),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 1000.0,
    date: new Date(2020, 2, 2),
  },
  {
    id: "e3",
    title: "New Television",
    amount: 500.0,
    date: new Date(2021, 3, 3),
  },
  {
    id: "e4",
    title: "New Monitor",
    amount: 400.0,
    date: new Date(2022, 4, 4),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
