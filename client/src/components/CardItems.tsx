import React from 'react'

type PropsItems = {

}


 const CardItems: React.FC<PropsItems> = (props) => {
  return (

    <div className='ml-40 flex flex-row justify-between gap-3'>

      <div className='h-48 w-48 rounded-xl shadow bg-gradient-to-r from-emerald-300 to-cyan-200 p-2 flex flex-col justify-items-center align-center me-1'>
        <h1>Card Items</h1>
        <h5>Description</h5>
        <p>this is a sample card where i will display my toy items in future</p>
      </div>

      <div className=' h-48 w-48 rounded-xl shadow bg-gradient-to-r from-emerald-300 to-cyan-200 p-2 flex flex-col justify-items-center align-center me-1'>
        <h1>Card Items</h1>
        <h5>Description</h5>
        <p>this is a sample card where i will display my toy items in future</p>
      </div>

      <div className=' h-48 w-48 rounded-xl shadow bg-gradient-to-r from-emerald-300 to-cyan-200 p-2 flex flex-col justify-items-center align-center me-1'>
        <h1>Card Items</h1>
        <h5>Description</h5>
        <p>this is a sample card where i will display my toy items in future</p>
      </div>

    </div>
  )
}


export default CardItems