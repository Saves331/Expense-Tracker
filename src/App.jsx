import React, { useState } from 'react'
import './App.css'
import TotalSpent from './components/TotalSpent'
import ExpenseInput from './components/ExpenseInput'
import { Chart } from "react-google-charts";
import Date from './components/Date'

function App() {
  const [expenses, setExpenses] = useState([])
  const [totalSpent, setTotalSpent] = useState(0)

  const handleAddExpense = (expense) => {
    setExpenses((prev) => [...prev, expense])
    setTotalSpent((prev) => prev + expense.price)
  }

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 10],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };

  return (
    <>
        <Date></Date>
    <div className='max-w-[1800px] m-auto p-4 flex flex-col'>

    
     <TotalSpent totalSpent={totalSpent}></TotalSpent>
    {/*  <ExpenseInput onAddExpense={handleAddExpense}></ExpenseInput> */}


    <div className='flex flex-row-reverse py-5'>
      <div className='w-3/5'>
      <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.name}: ${expense.price}
        </li>
      ))}
     </ul>

    </div>
      
      <div className='w-2/5'>
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
