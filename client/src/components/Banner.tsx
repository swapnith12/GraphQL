import React from 'react'

interface BannerItems {
    
}


const Banner: React.FC<BannerItems> = (props) => {
  return (
    <div className='ml-40 h-80 w-1/2 rounded-xl shadow bg-gradient-to-r from-emerald-300 to-cyan-200 p-2 flex flex-col justify-items-center align-items-center'>
      <h1 className='font-bold'>Banner Items</h1>
      <h5>Description</h5>
      <p>this is a sample Banner where i will display my toy items in future</p>
    </div>
  )
}

export default Banner
