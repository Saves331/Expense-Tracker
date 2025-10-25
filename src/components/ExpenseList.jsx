
import { useState } from 'react';
import AddTransactionBtn from './AddTransactionBtn'


function ExpenseList({expenses, onAddClick}) {
    const [page, setPage] = useState(1)
    const itemsPerPage = 7;
    const startIndex = (page-1) * itemsPerPage;
    const endIndex = startIndex+itemsPerPage
    const currentItems = expenses.slice(startIndex, endIndex)

    const totalPages = Math.ceil(expenses.length / itemsPerPage)


    

    const headline = "Transaction this month"
    
    function formDate(originalDate) {
        const [year, month, day] = originalDate.split("-")
        return `${day}.${month}. ${year}`;
    }
    
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

            <tbody className='font-semibold'>
                {currentItems.map((expense, index) => (
                    <tr key={index}>
                        <td>
                            {expense.name} 
                        </td>

                        <td>
                            {formDate(expense.date)}
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

            <div className='flex gap-4 justify-center'>
                {Array.from({length: totalPages}, (_, index) => (
                <button key={index} onClick={() => setPage(index+1)} className="underline bg-[#4538b1] text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-[#322694] transition duration-300 cursor-pointer onClick={onClick}>">
                    {index+1}
                </button>
            ))}
            </div>
            
        </div>
    </div>
  )
}

export default ExpenseList