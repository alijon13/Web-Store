import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './Layout/layout';




const  App = () => { 
  const router = createBrowserRouter([ 
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Home/>
        }
      ]
    }
  ]); 
 
  return <RouterProvider router={router} />; 
};
export default App 