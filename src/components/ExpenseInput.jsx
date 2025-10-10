import React, { useState } from 'react'

function ExpenseInput({onAddExpense}) {

    const [ExpenseItem, setExpenseItem] = useState({name: "", price: 0});

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


    setExpenseItem({name: "", price: ""})
    }

    


    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name='name' type="text" placeholder='Expense Name' value={ExpenseItem.name} onChange={handleChange}/>
            <input name='price' type="number" placeholder='Expense Amount' value={ExpenseItem.price} onChange={handleChange}/>
            <button type='submit'>Add Expense</button>
        </form>
    </div>
  )
}

export default ExpenseInput