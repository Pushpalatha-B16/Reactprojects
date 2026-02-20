
import { CiMenuFries } from "react-icons/ci";
import { useState,useEffect } from "react";
const Scrollingsection=()=>{
const [showStickyHeader, setShowStickyHeader] = useState(false);
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.5) {
      setShowStickyHeader(true);
    } else {
      setShowStickyHeader(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);  

    return(
      <div className={`w-full z-50 transition-all duration-500 
  ${showStickyHeader 
    ? "fixed top-0 left-0 shadow-xl" 
    : "relative"
  }`}>
      
        <div className=" bg-[linear-gradient(97.93deg,_#3B3898_-0.19%,_#5D499C_100%)] w-[500px] md:w-full overhidden layout">
        <div className="">
            <div className="flex -ml-6 justify-between lg:justify-evenly">
              <p className="mt-5 p-2 px-4 text-2xl font-semibold text-white"><span className="text-yellow-300">M</span>yPropAi</p>
              <div className="flex justify-center hidden lg:flex">
                  <div className="mt-6 bg-white flex ml-4 mb-4 rounded-full items-center p-2 md:p-1 lg:py-2 lg:px-10
                    shadow-lg">
                           <select className="px-4 py-2 rounded-full text-gray-600 outline-none  text-[10px] lg:text-sm">
                            <option>Buy</option>
                           </select>
                           <input type="text" placeholder='search "location"' className="hidden lg:flex w-[120px]"></input>
                           <img src="src/assets/location.png" className="pr-5 hidden lg:flex"/>
                           <img src="src/assets/mic.png" className="pr-5 hidden lg:flex"/>
                           <button className=" hidden lg:flex bg-yellow-400 text-black px-6 py-1 rounded-full font-semibold text-sm
                           md:text-[13px] w-[100px] md:py-1 lg:py-2 hover:cursor-pointer">
                               Search
                            </button>

                   </div>
              </div>
              <button className="m-5 p-2 hidden lg:block px-4 bg-yellow-400 px-10 hover:cursor-pointer
               py-2 rounded-full font-semibold text-sm ">Post Property Free</button>
               <button className="hidden lg:block text-white border-2 border-amber-500 rounded-full m-5  p-2 px-10 hover:cursor-pointer">
                    Sign In/Sign up
                </button> 
                <div className="flex flex-row gap-0 text-white -mr-5 m-5 p-2 px-6">
                  <p className="text-2xl hover:cursor-pointer">Menu</p>
                  <CiMenuFries  className="text-white mt-1 text-3xl ml-3 hover:cursor-pointer"/>
                </div>
                   
                
              </div>

           </div>
           
        
        
            

    </div>
       
       </div>
    )

      
    
}
export default Scrollingsection;