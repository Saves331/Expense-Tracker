import React, { useState } from 'react'

function AddTransactionBtn({onClick}) {


  return (
    <button className='bg-[#4538b1] text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-[#322694] transition duration-300 cursor-pointer' onClick={onClick}>
        Add
    </button>
  )
}

export default AddTransactionBtn