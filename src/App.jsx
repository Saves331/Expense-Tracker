import React, { useState } from 'react'
import './App.css'
import TotalSpent from './components/TotalSpent'
import ExpenseInput from './components/ExpenseInput'
import { Chart } from "react-google-charts";
import Date from './components/Date'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([])
  const [totalSpent, setTotalSpent] = useState(0)

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense])
    setTotalSpent((prev) => prev + expense.price)
  }


  const groupedData = expenses.reduce((acc, expense) => {
    const category = expense.category || "Uncategorized";
    acc[category] = (acc[category] || 0) + expense.price;
    return acc;
  }, {})

  const data = [
    ["Expense", "Amount"],
    ...Object.entries(groupedData)
  ];

  const options = {
    title: "My Expenses",
  };

  return (
    <>
        <Date></Date>
    <div className='max-w-[1800px] m-auto p-4 flex flex-col'>

    
     <TotalSpent totalSpent={totalSpent}></TotalSpent>
     <ExpenseInput onAddExpense={handleAddExpense}></ExpenseInput>


    <div className='flex flex-row-reverse py-5 h-[50vh] gap-8'>

      <div className='w-3/5 h-full bg-white'> 
      <ExpenseList expenses={expenses}></ExpenseList>
      </div>
      
      
      <div className='w-2/5 h-full bg-white p-4 flex justify-center items-center'>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
      </div>
    
    </div>

       
    </div>
    </>
  )
}

export default App
