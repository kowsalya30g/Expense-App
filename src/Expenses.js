import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter';


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');


    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;

    });

    let expensesContent = <p>No data found</p>

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return (
                <>
                    <ExpenseItem Key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                </>
            )
        })
    }

    
    
    return (

        <>
            <div className='expenses'>

                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

                {expensesContent}

            </div>
            

        </>
        
    )
}

export default Expenses;