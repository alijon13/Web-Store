import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './Layout/layout';
import Cotegory from './pages/Cotegory/cotegory';
import Cart from './pages/Cart/cart';
  



const  App = () => { 
  const router = createBrowserRouter([ 
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"cotegory",
          element:<Cotegory/>
        },
        {
          path:"cart",
          element:<Cart/>
        }
      ]
    }
  ]); 
 
  return <RouterProvider router={router} />; 
};
export default App 