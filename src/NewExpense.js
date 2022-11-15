import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
    }
    
    return (
        <>
            <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
            </div>
        </>
        
    )
}

export default NewExpense;
