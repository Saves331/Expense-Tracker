import React, { useState } from 'react'

function ExpenseInput({onAddExpense}) {

    const [ExpenseItem, setExpenseItem] = useState({name: "", price: 0, date: "", category: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setExpenseItem((prev) => ({
            ...prev, 
            [name]: value,
            
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(onAddExpense) {
        onAddExpense({...ExpenseItem, price:parseFloat(ExpenseItem.price)})
    }


    setExpenseItem({name: "", price: "", date: "", category: ""})
    }

    


    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name='name' type="text" placeholder='Expense Name' value={ExpenseItem.name} onChange={handleChange}/>
            <input name='price' type="number" placeholder='Expense Amount' value={ExpenseItem.price} onChange={handleChange}/>
            <input name='date' type="date" value={ExpenseItem.date} onChange={handleChange}/>
            <label htmlFor="category">Choose a car: </label>
            <select
                    name="category"
                    id="category"
                    value={ExpenseItem.category}  
                    onChange={handleChange}
                    >
                <option value="">--Please choose an option--</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
            </select>

            <button type='submit'>Add Expense</button>
        </form>
    </div>
  )
}

export default ExpenseInput