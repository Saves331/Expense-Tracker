import React from 'react'
import AddTransactionBtn from './AddTransactionBtn'


function ExpenseList({expenses, onAddClick}) {

    const headline = "Transaction this month"
    
  return (
    <div className='p-8'>

        <div className='flex justify-between items-center'>
            <h2 className='text-xl text-gray-500 font-bold'>{headline.toUpperCase()}</h2>

             <AddTransactionBtn onClick={onAddClick}></AddTransactionBtn>

        </div>
        
        <div className='h-full'>

         
            <table className='border-collapse text-[1.2em] min-w-[100%] content-table my-8'> {/* Content table */}

            <thead>
                <tr className='bg-[#f3f4f6] text-[#4538b1] text-left font-bold'>
                    <th>PAYEE</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>CATEGORY</th>
                </tr>
            </thead>

            <tbody>
                {expenses.map((expense, index) => (
                    <tr key={index}>
                        <td>
                            {expense.name} 
                        </td>

                        <td>
                            {expense.date}
                        </td>

                        <td>
                            {expense.price}€
                        </td>


                        <td>
                            {expense.category}
                        </td>
                    
                    </tr>
                ))}
            </tbody>
                
            </table>
        </div>
    </div>
  )
}

export default ExpenseList