import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const layout = () => {
    return (
        <div className="wrapper">
            <div className="navbar flex items-center">
                <div className="mt-[20px]">
                    <img className='w-[100px]' src="src/assets/logo.9633f56194c95e5e350e379aebe1829d.svg" alt="" />
                </div>
                <div className="flex items-center bg-[#FFBE1F] px-[10px] py-[10px] rounded-[8px] gap-[5px]">
                    <MenuIcon />
                    <h1>Каталог товаров</h1>
                </div>
                <div className="flex items-center">
                    <input className='px-[15px] w-[500px] border-[#dfe4e9] py-[10px] h-[48px] border-[2px] border-t-[2px] border-tr-[2px] rounded-tl-[8px] rounded-bl-[8px]' type="text" placeholder="название товара или артикул"/>
                    <div className="bg-[#FFBE1F] px-[10px] py-[12px] rounded-tr-[8px] rounded-br-[8px]">
                    <svg color="#222222" height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                </div>
            </div>
            <Outlet />
            <div className="">
                <h1></h1>
            </div>
        </div>
    )
}

export default layout