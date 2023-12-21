import React from 'react'

const Sales = ({ img, btn, title, cost, prev, btn2 }) => {
  return (
    <div className='w-[200px] h-[361px]'>
      <div className="h-[139px]">
        <img className='h-[100%] object-cover' src={img} />
      </div>
      <div className="py-[10px]">
        <button className='bg-[#ff4444] px-[9px] py-[2px] text-[white] text-[12px] rounded-[8px]'>{btn}</button>
        <button className='bg-[#0073fd]  text-[14px] px-[10px] text-[white] rounded-[8px]'>{btn2}</button>
      </div>
      <div className="flex pb-[5px] font-[700] gap-[10px]">
        <h1>{cost} c.</h1>
        <h1 className='line-through text-[#9BA1A7]'>{prev} c.</h1>
      </div>
      <div className="text-[14px] pb-[5px]  text-[#9BA1A7] font-[600]">
        <h1>70 c. x 24 мес</h1>
      </div>
      <div className="pb-[10px] font-[500] text-[14px]">
        <h1>{title}</h1>
      </div>
      <div className="">
        <button className='bg-[#ffbe1f] flex items-center px-[20px] py-[7px] rounded-md gap-[8px]'>
          <svg height="16" width="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.50033 19.6667C8.96056 19.6667 9.33366 19.2936 9.33366 18.8333C9.33366 18.3731 8.96056 18 8.50033 18C8.04009 18 7.66699 18.3731 7.66699 18.8333C7.66699 19.2936 8.04009 19.6667 8.50033 19.6667Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.4993 19.6667C18.9596 19.6667 19.3327 19.2936 19.3327 18.8333C19.3327 18.3731 18.9596 18 18.4993 18C18.0391 18 17.666 18.3731 17.666 18.8333C17.666 19.2936 18.0391 19.6667 18.4993 19.6667Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1H4.63636L7.07273 12.9019C7.15586 13.3112 7.38355 13.6788 7.71595 13.9404C8.04835 14.202 8.46427 14.341 8.89091 14.333H17.7273C18.1539 14.341 18.5698 14.202 18.9022 13.9404C19.2346 13.6788 19.4623 13.3112 19.5455 12.9019L21 5.44434H5.54545" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          <span className='text-[15px] font-[500]'>В корзину</span>
        </button>
      </div>
    </div>
  )
}

export default Sales