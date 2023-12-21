import React from 'react'

const Cotegory = ({img,title}) => {
  return (
    <div className='flex flex-col items-center cursor-pointer hover:text-[#ffbe1f]'>
        <img src={img}/>
        <h1 className='text-center font-[600] w-[140px] items-center'>{title}</h1>
    </div>
  )
}

export default Cotegory