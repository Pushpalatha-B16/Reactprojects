//function Navbar(){
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { Popupform } from "./Popupform";
const Navbar=({setPopup})=>{
const [sidemenu,setSideMenu]=useState(false)
const handleClick=()=>{
    setSideMenu((prev)=>!prev)//<nav className="hidden md:flex space-x-6 items-center">
}
return(
      <>
  <div  className="overflow-hidden  h-[200vh] layout w-[500px] md:w-full pt-[30px] h-full pb-8   bg-no-repeat  bg-cover bg-center 
  bg-[linear-gradient(90deg,rgba(26,32,144,0.9)_0%,rgba(97,68,152,0.9)_100%),url('/src/assets/bgimage.png')] ">
           {sidemenu &&(
             <ul className="flex flex-col  text-white px-7 gap-8 text-sm lg:hidden">
             <IoCloseSharp className="text-5xl lg:hidden ml-auto" onClick={handleClick}/> 
            <li className=" text-yellow-400 border-b-2 border-yellow-400 pb-1 w-[40px] hover:cursor-pointer  md:w-[40px] lg:w-[40px]">Home</li>
            <li>Buyer</li>
            <li>Seller</li>
            <li>About Us</li>
            <li className=" border-4 border-yellow-500/100 px-4 py-2 -mt-2  rounded-full hover:cursor-pointer
            w-[200px] md:w-[150px] lg:w-[150px] lg:mr-3 mb-10  -ml-2" onClick={()=>{setPopup(true)
               setSideMenu((prev)=>!prev)
              console.log("clicked")}}>Sign In/Sign Up</li>
           
           </ul>
            )
            }
            
           {!sidemenu && (
          <nav className="flex justify-between mb-4 text-white lg:justify-between">
           <h1 className="text-2xl lg:text-xl font-bold text-yellow-400 lg:mb-3">M<span className="text-white">yPropAI</span></h1>
           <IoMdMenu className=" text-4xl lg:hidden" onClick={handleClick} />
           <ul className="hidden flex flex-col lg:flex md:flex-col lg:flex-row  gap-8 text-sm">
             
            <li className=" text-yellow-400 border-b-2 border-yellow-400 pb-1 w-[40px] hover:cursor-pointer  md:w-[40px] ">Home</li>
            <li>Buyer</li>
            <li>Seller</li>
            <li>About Us</li>
           <li className=" border-4 border-yellow-500/100 px-4 py-2 -mt-2  rounded-full hover:cursor-pointer
            w-[200px]  md:w-[150px] lg:w-[150px] lg:mr-3 "onClick={()=>{setPopup(true)
              console.log("clicked")}} >Sign In/Sign Up</li>
           </ul>
           </nav> )}
           {!sidemenu && (
            <div>
           <div className=" flex  flex-col items-center   text-center text-white">
              <h1 className="-ml:5  md:ml-1 mt-10 text-2xl  md:text-3xl  font-bold  ">
               Your <span className="text-yellow-400 text-2xl md:text-3xl ">Perfect Property</span> is
              </h1>
              <p className="-ml:8 text-xl md:ml-5 text-2xl   md:text-3xl  font-semibold mt-2">
              Just a Click Away</p>
               <div className="flex items-center gap-4 pl:5 mt-6 text-sm md:text-base lg:text-sm font-medium">
                   <span className="lg:ml-5 text-yellow-400 border-b-2 border-yellow-400 ">Buy</span>
                   <span className="opacity-80">Rent</span>
                   <span className="opacity-80">Commercial</span>
                   <span className="opacity-80">Co-Working</span>
               </div>
            </div>
            <div className="flex justify-center">
            <div className="mt-6 bg-white flex ml-4 rounded-full items-center p-2 md:p-1 lg:py-2 lg:px-6 
                    shadow-lg">
             
                <select className="px-4 py-2 rounded-full text-gray-600 outline-none  text-xs lg:text-sm">
                  <option value="">Select Recidentail</option>
                  <option value="plot">Plot/Land</option>
                  <option value="apartment">Apartment</option>
                  <option value="plot">Individual House/villa</option>
                  <option value="studio">Plot/Land</option>
                   <option value="farm">Farm House</option>
                    <option value="service">Service Apartment</option>
                 </select>
      
                 <img src="src/assets/search_icon.png" className="pl-3 hidden lg:block"/>
                 <input type="text"    
                 placeholder="Search location & landmark" className="flex lg:px-4 lg:py-3 outline-none
                  text-gray-700 text-sm w-[45px] lg:w-[300px]"   />
                  <img src="src/assets/location.png" className="pr-5 hidden lg:flex hover:cursor-pointer"/>
                   <img src="src/assets/mic.png" className="pr-5 hidden lg:flex hover:cursor-pointer"/>
                   <button className="bg-yellow-400 text-black px-6 py-1 rounded-full font-semibold text-sm
                   md:text-[13px] w-[100px] md:py-1 lg:py-2 hover:cursor-pointer">
                   Search
                  </button>
             </div>
             
             

</div>
<div className="flex justify-center">
   <p className="text-sm  mt-5 opacity-90 w-[200px] lg:w-full text-center text-white ">
      Do you have a Property? Post your property for free
    </p>
    </div>
<div className="flex justify-center">
  <button className="mt-5  border-4 border-yellow-500/100  text-yellow-500 px-6 hover:cursor-pointer
    py-2 rounded-full font-semibold text-sm ">
      Post Property Free
    </button> 
</div>
</div>)}

  
  </div>
         

      

     
    
     </>  
       
  
    )
    
}
export default Navbar;         