import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 100.0,
      date: new Date(2022, 1, 1),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 290.0,
      date: new Date(2022, 1, 2),
    },
    { id: "e3", title: "New TV", amount: 330.0, date: new Date(2022, 1, 3) },
    {
      id: "e4",
      title: "New Monitor",
      amount: 490.0,
      date: new Date(2022, 1, 4),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
