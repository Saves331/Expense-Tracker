import React from 'react'

function ExpenseList({expenses}) {

    const headline = "Transaction this month"
    
  return (
    <div className='p-8'>
        <h2 className='text-xl text-gray-500 font-bold'>{headline.toUpperCase()}</h2>

        <div className='h-full'>

         
            <table className='mt-6'>
                <tr>
                    <th>PAYEE</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>CATEGORY</th>
                </tr>
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
            </table>
        </div>
    </div>
  )
}

export default ExpenseList