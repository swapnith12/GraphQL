import React from 'react'

interface CardItems {
    
}


const CardItems: React.FC<CardItems> = (props) => {
  return (
    <div className='ml-40 h-48 w-48 rounded-xl shadow bg-emerald-300 p-2 flex flex-col justify-items-center align-center'>
      <h1>Card Items</h1>
      <h5>Description</h5>
      <p>this is a sample card where i will display my toy items in future</p>
    </div>
  )
}

export default CardItems
