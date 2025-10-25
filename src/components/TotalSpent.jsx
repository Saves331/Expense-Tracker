

function TotalSpent({totalSpent}) {

   
   

  return (
    <div className="flex w-full justify-center gap-5 p-4 bg-white rounded items-center">
        <h2 className="text-2xl text-gray-500 font-bold">
            Total Spent This Month 
        </h2>

        <h1 className="text-5xl font-semibold">
            {totalSpent}€ 
       </h1>
    </div>
  )
}

export default TotalSpent