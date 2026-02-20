import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'

import Property1 from './Property/Property1'
import { Outlet } from "react-router-dom";
import Home from './Home'

function App() {
  { 
const router = createBrowserRouter([
    { path: "/", element: <Home/> },
    { path: "/next", element:   <Property1
     title1="Recommended Properties" subtitle1="Specially for you" price1="1.75 Cr(negotiable)" 
     image1="src/assets/Recommand_image1.png" house_type1="Independent House" location1="3BHK house in Tambaram,main.."
     price2="1.75 Cr(negotiable)" image2="src/assets/Recommand_image2.png" house_type2="Independent House" 
     location2="3BHK house in Tambaram,main.."
     price3="1.75 Cr(negotiable)" image3="src/assets/Recommand_image3.png" house_type3="Independent House" 
     location3="3BHK house in Tambaram,main.."
     price4="1.75 Cr(negotiable)" image4="src/assets/Recommand_image4.png" house_type4="Independent House" 
     location4="3BHK house in Tambaram,main.."
     
     
     /> }
  ]);

  return <RouterProvider router={router} />;}
   
}



export default App;
