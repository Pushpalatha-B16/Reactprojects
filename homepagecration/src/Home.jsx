import Navbar from './Navbar/Navbar'

import Property from './Property/Property'
import Sellproperty from './Sections/Sellproperty'
import Buyproperty from './Sections/Buyproperty'
import Dreamproperty from './Sections/Dreamproperty'
import Popularlocation from './Sections/Popularlocation'
import Postproperty from './Sections/Postproperty'
import Downloadsection from './Sections/Downloadsection'
import Propertytypes from './Sections/Propertytypes'

import Apartment from './Apartment/Apartment'
import { app_properties } from "./Apartment/apartmentData";
import Property1 from './Property/Property1'
import { Outlet } from "react-router-dom";
import {properties} from "./Property/propertyData";
import { useState } from 'react'
import {items} from "./Sections/Popularlocationdata"
import Menubar from './Navbar/Scrollingsection'
import { Popupform } from './Navbar/Popupform'
import Downloadbanner from './Sections/Downloadbanner'
import Footer from './Sections/Footer'
import Scrollingsection from './Navbar/Scrollingsection'


const Home=()=>{
    const [popup,setPopup]=useState(false)
    return(
     
<>
      <div className={popup?"opacity-50":"opacity-100 "}>
        
         <Navbar   setPopup={setPopup}></Navbar>
         <Property   title={properties[0].title} subtitle={properties[0].subtitle} items={properties[0].items}/>
           <Apartment items={app_properties[0].items}  ></Apartment>
          <Property  title={properties[1].title} subtitle={properties[1].subtitle} items={properties[1].items}/>
         <Sellproperty/>
        <Property  title={properties[2].title} subtitle={properties[2].subtitle} items={properties[2].items}/>
     <Buyproperty/>
      <Property  title={properties[3].title} subtitle={properties[3].subtitle} items={properties[3].items}/>
         <Dreamproperty/>
          
      <Popularlocation items={items}/>
      <Postproperty/>
       <Downloadsection/>
       <Propertytypes/>

     </div>
     {popup &&
      <div className="fixed flex inset-0 -top-10 items-center  justify-center ">
      <Popupform setPopup={setPopup}></Popupform>
       </div>}
      <Downloadbanner/>
      <Footer/>
 <Scrollingsection/>
      {/**
       * 
       *  
     <div className="sticky top-0 z-20 mt-4 shadow-md">
  <Menubar/>
</div>**/}
      </>  
    )
}
export default Home;