import React, { useState } from 'react'

function ExpenseInput({ onAddExpense, isOpen, setIsOpen }) {
  const today = new Date().toISOString().split("T")[0];
  const [ExpenseItem, setExpenseItem] = useState({ name: "Ola", price: 150, date: today, category: "Health" });
  const categories = ["Gifts", "Dining", "Groceries", "Health", "Entertainment", "Shopping", "Education", "Travel", "Home", "Utilities", "Transportation"]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddExpense) {
      onAddExpense({ ...ExpenseItem, price: parseFloat(ExpenseItem.price) });
    }
    setExpenseItem({ name: "Ola", price: 150, date: today, category: "Health" });
  };

  return (

    isOpen ?  <div className='fixed inset-0 flex justify-center items-center bg-gray-900/60 z-50'>
        
      <div className='bg-white pb-6 rounded-2xl shadow-xl w-[90%] max-w-md p-6 relative'>

      <span 
      className='absolute top-3 right-6 text-red-500 font-bold text-2xl cursor-pointer select-none'
      onClick={() => setIsOpen(false)}
    >
      ×
    </span>

        <h1 className='text-3xl font-bold text-center mb-6'>
          Add new Expense
        </h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input name='name' type="text" placeholder='Expense Name' value={ExpenseItem.name} onChange={handleChange} required />
          <input name='price' type="number" placeholder='Expense Amount' value={ExpenseItem.price} onChange={handleChange} required />
          <input name='date' type="date" value={ExpenseItem.date} onChange={handleChange} lang="en-GB" required />

          <label htmlFor="category" className='font-medium'>Choose a Category:</label>
          <select
            required
            name="category"
            id="category"
            value={ExpenseItem.category}
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            {categories.map((category, index) => (
                <option value={category} key={index}>
                    {category}
                </option>
            ))}
          </select>

          <button type='submit' className='bg-[#4538b1] text-white font-bold p-4 text-xl rounded cursor-pointer hover:bg-[#322694] transition duration-300'>
            Add Expense
          </button>
        </form>
      </div>
    </div> : null 
   
  );
}

export default ExpenseInput;
