import "./ExpenseFilter.css"

const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (e) => {
        props.onChangeFilter(e.target.value);
    }
    
    return(
        <>
            <div className="expenseFilter">
                <div className="expenseFilterControl">
                    <label>Filter By Year</label>
                    <select value={props.selected} onChange={dropdownChangeHandler}>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>

                </div>
            </div>
            
        </>
    )
}

export default ExpenseFilter;