import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {properties} from "./propertyData";
//function Property1({title=properties[0].title ,subtitle=properties[0].subtitle ,items=properties[0].items}){
const Property1=({title=properties[0].title ,subtitle=properties[0].subtitle ,items=properties[0].items})=>{
   const [active1, setActive1] = useState(false);
   const navigate=useNavigate()
   const handleClick=()=>{
       navigate('/')
   }
    return(<>
         <div className="p-5 px-10">
           <h1 className="font-bold text-2xl">{title}</h1>
             <p>{subtitle}</p>
             <p  className="text-blue-800" onClick={handleClick}>Back</p>
       </div>
       {/** img1  "src/assets/Recommand_image1.png"**/}
      <div className="flex  gap-6 p-5 px-10 relative">
      <img src="src/assets/leftarrow.png" className="w-[40px] absolute left-4 top-1/2 -translate-y-1/2 mt-auto mb-auto p-3 rounded-full bg-[#3B3898]" />
       {items.map((items) => (
      <div className="bg-[#ECEAFF] shadow-xl p-5 rounded-lg px-5">
      <div className="relative">
         <img  className="w-[700px] max-w-[200px]"  src={items.image} alt="image"/>
         <img src={items.verified1} className="absolute top-2 left-2"></img>
         <button className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center">
              <img   className={`cursor-pointer ${active1 ? "filter hue-rotate-90 saturate-200 brightness-110" : ""}`} src="src/assets/heart.png" alt="image" onClick={() => setActive1(!active1)} />
         </button>
      </div>
         <p className="text-l text-black font-bold mt-2">₹{items.price}</p>
    <p className="font-bold mt-2">{items.house_type}</p>

    <p className="mt-2 text-xs">{items.location}</p>
    </div> ))}
 <img src="src/assets/rightarrow.png"  className="w-[40px] absolute right-4 top-1/2 -translate-y-1/2 mt-auto mb-auto p-3 rounded-full bg-[#3B3898]" />




 
</div>
    </>)
}
export default Property1;