import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const layout = () => {
    return (
        <div className="wrapper">
            <div className="navbar w-[73%] m-auto flex items-center pt-[30px] justify-between">
                <div className="">
                    <img className='w-[100px]' src="src/assets/logo.9633f56194c95e5e350e379aebe1829d.svg" alt="" />
                </div>
                <div className="flex items-center bg-[#FFBE1F] px-[15px] py-[12px] rounded-[8px] gap-[5px]">
                    <MenuIcon />
                    <h1 className='text-[14px] font-[500]'>Каталог товаров</h1>
                </div>
                <div className="flex items-center">
                    <input className='px-[15px] w-[530px] border-[#dfe4e9] py-[12px] h-[48px] border-[2px] border-t-[2px] border-tr-[2px] rounded-tl-[8px] rounded-bl-[8px]' type="text" placeholder="название товара или артикул" />
                    <div className="bg-[#FFBE1F] px-[15px] py-[12px] rounded-tr-[8px] rounded-br-[8px]">
                        <svg color="#222222" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
                <div className="flex gap-[15px]  items-center">
                    <div className="flex items-center flex-col">
                        <svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><path d="M20 10.1818C20 15.5271 14.3556 20.2309 12.5491 21.5996C12.2212 21.8479 11.7788 21.8479 11.4509 21.5996C9.6444 20.2309 4 15.5271 4 10.1818C4 8.01186 4.84285 5.93079 6.34315 4.3964C7.84344 2.86201 9.87827 2 12 2C14.1217 2 16.1566 2.86201 17.6569 4.3964C19.1571 5.93079 20 8.01186 20 10.1818Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <p className='text-[13px] text-[#73787D] font-[500]'>Душанбе</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <svg height="24" width="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0703 21V19C20.0703 17.9391 19.6489 16.9217 18.8987 16.1716C18.1486 15.4214 17.1312 15 16.0703 15H8.07031C7.00945 15 5.99203 15.4214 5.24189 16.1716C4.49174 16.9217 4.07031 17.9391 4.07031 19V21" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path><path d="M12.0703 11C14.2795 11 16.0703 9.20914 16.0703 7C16.0703 4.79086 14.2795 3 12.0703 3C9.86117 3 8.07031 4.79086 8.07031 7C8.07031 9.20914 9.86117 11 12.0703 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <p className='text-[13px] text-[#73787D] font-[500]'>Войти</p>
                    </div>
                    <div className="flex items-center flex-col">
                        <svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.50033 19.6667C8.96056 19.6667 9.33366 19.2936 9.33366 18.8333C9.33366 18.3731 8.96056 18 8.50033 18C8.04009 18 7.66699 18.3731 7.66699 18.8333C7.66699 19.2936 8.04009 19.6667 8.50033 19.6667Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.4993 19.6667C18.9596 19.6667 19.3327 19.2936 19.3327 18.8333C19.3327 18.3731 18.9596 18 18.4993 18C18.0391 18 17.666 18.3731 17.666 18.8333C17.666 19.2936 18.0391 19.6667 18.4993 19.6667Z" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1H4.63636L7.07273 12.9019C7.15586 13.3112 7.38355 13.6788 7.71595 13.9404C8.04835 14.202 8.46427 14.341 8.89091 14.333H17.7273C18.1539 14.341 18.5698 14.202 18.9022 13.9404C19.2346 13.6788 19.4623 13.3112 19.5455 12.9019L21 5.44434H5.54545" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        <p className='text-[13px] text-[#73787D] font-[500]'>Корзина</p>
                    </div>
                </div>
            </div>
            <Outlet />
            <div className="footer bg-[#222222] py-[70px] text-white">
                <div className="w-[73%] m-auto">
                    <div className=" flex justify-between">
                        <div className="">
                            <ul>
                                <h1 className='text-[#9BA1A7]'>Телефоны справочной службы</h1>
                                <li>900</li>
                                <li>+992 48-888-1111</li>
                                <li>@Softclub.tj</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li>Каталог товаров</li>
                                <li>Смартфоны</li>
                                <li>Телевизоры</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li>Стиральные машины</li>
                                <li>Кондиционеры</li>
                            </ul>
                        </div>
                        <div className="">
                            <h1>Мы в соцмедиа</h1>
                            <div className="flex gap-[15px] pt-[15px]">
                                <img src="src/assets/Facebook.svg" alt="" />
                                <img src="src/assets/Instagram.svg" alt="" />
                                <img src="src/assets/Telegram.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[30px] opacity-10">
                        <hr />
                    </div>
                    <div className="flex justify-between pt-[30px]">
                        <h1 className='text-[#9BA1A7]'>© 2023 ОАО softclub ». г. Душанбе, 101 мкр-н, ул. Багаутдинова, 9</h1>
                        <h1>support@softclub.tj</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default layout










