
import { useState } from 'react';
import './App.css';
import Expenses from './Expenses';
import NewExpense from './NewExpense'

//testing
const DEFAULT_EXPENSES = [
   
  {
    id: 1,
    title: 'Grocery Items',
    amount: 2500.45,
    date: new Date(2021, 6, 13),
  },

  {
    id: 2,
    title: 'MacBook',
    amount: 1890000,
    date: new Date(2021, 1, 12),
  },
  {
    id: 3,
    title: 'Samsung Mobile',
    amount: 12500,
    date: new Date(2022, 3, 23),
  },
  {
    id: 4,
    title: 'Ipad',
    amount: 84000,
    date: new Date(2021, 7, 21),
  },
    
];

function App() {
  
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);


  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {

      return [expense, ...prevExpenses];
      
    });
    //console.log(expense);
  }
  
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
