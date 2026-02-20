import { useState,useEffect } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Skeleton from "./Skeleton";

//function Property({title,subtitle,items}){
const Property=({title,subtitle,items})=>{
     const [loading, setLoading] = useState(true);
  useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);
  
const handleClick = (id) => {
   
  const newValue = !active1[id];
  setActive1((prev) => ({ ...prev, [id]: newValue }));
  setPopup(true);
  setPopupValue(
    newValue ? "Property added in wishlist" : "Property removed from wishlist"
  );
};
   

   const [active1, setActive1] = useState({})
   const [popup,setPopup]=useState(false)
   const[popupvalue,setPopupValue]=useState("")
   
    const [startIndex, setStartIndex] = useState(0); // start of visible window
  const [visibleCount,setVisibleCount] =useState(4)
useEffect(() => {
  const updateVisibleCount = () => {
    const width = window.innerWidth;

    if (width < 640) {
      setVisibleCount(1);  // mobile
    }else if(width<=768){
      setVisibleCount(2);
    } 
    else if (width <=1024) {
      setVisibleCount(3);  // tablet
    } 
    else {
      setVisibleCount(4);  // desktop
    }
  };

  // Set initial value
  updateVisibleCount();

  // Listen to resize
  window.addEventListener("resize", updateVisibleCount);

  return () => window.removeEventListener("resize", updateVisibleCount);
}, []);
  // Prev: shift window left by 1
  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  // Next: shift window right by 1
  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= items.length ? items.length - visibleCount : prev + 1
    );
  };
  const visibleItems = items.slice(startIndex, startIndex + visibleCount);
  useEffect(() => {
  if (popup) {
    setTimeout(()=>setPopup(false), 1000);
  }
}, [popup])
   return(<>
   {popup &&
   <div class="fixed bottom-6 right-4 -translate-x-1/2 z-50">
      <div class="bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-4">
         <p>  {popupvalue}</p>
     </div>   
   </div>
   
   }

   
   <div className="layout w-[500px] pb-5 md:w-full overflow-hidden ">
      <div className="  flex flex-col justify-between   ">
            <div className="flex flex-col justify-center">
                 <div className=" mt-10">
                    <h1 className="font-bold text-2xl  lg:text-xl xl:text-2xl">{title}</h1>
                    <p className="text-2xl">{subtitle}</p>
                  </div>
              </div>
        
               <div className="  mt-10 relative">
               {startIndex>0 &&
               <img src="src/assets/leftarrow.png" onClick={prevSlide} className="absolute top-50  -left-5  sm:top-2  
                 md:top-40 md:-left-8 md:-translate-y-1/2  lg:-left-8 lg:top-45 lg:-translate-y-1/2
                 w-10 sm:w-10 md:w-12 lg:w-12 p-2 rounded-full bg-[#3B3898] z-10 cursor-pointer" />
                }
                <img src="src/assets/rightarrow.png" onClick={nextSlide}  className="absolute top-50  -right-2 sm:top-2 sm:right-3     
                md:top-40 md:-translate-y-1/2 md:-right-5  lg:-right-3 lg:top-46 lg:-translate-y-1/2 w-10 sm:w-10 md:w-12 lg:w-12
                 p-2 rounded-full bg-[#3B3898] z-10 cursor-pointer "/>
                 <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 ">
                
               { 
               visibleItems.
                map((items) => (
                  loading ? <Skeleton/> :
                <div className="bg-[#ECEAFF] w-full p-8  md:p-5 shadow-l  rounded-xl px-5">
                  <div className="relative">
                          <img  className="w-full hover:cursor-pointer transform transition duration-300 hover:scale-110"  src={items.image} alt="image" />
                          {items.verified &&
                          <div className="flex absolute bg-green-500 top-2 left-2 w-[100px] mt-1 md:mt-2 text-white px-2 ">
                              <img src="src/assets/vector.png" className="w-[20px] m-1 "/>
                              <p className="ml-2">{items.verified}</p>
                          </div>  
                         }
                        <button className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center ">
                       {active1[items.id] ? (
                        <IoHeartSharp className="text-5xl text-red-500 cursor-pointer"
                        onClick={() => handleClick(items.id)}/>) : (<CiHeart
                        className="text-5xl text-red-500 cursor-pointer"
                        onClick={() => handleClick(items.id)}/>)}
                        </button>
                        <p className="text-2xl text-black font-bold mt-2 md:text-base lg:text-xl">₹{items.price}</p>
                        <p className="font-bold mt-2 text-2xl md:text-base lg:text-xl">{items.house_type}</p>
                        <p className="mt-2 text-2xl md:text-base lg:text-xl">{items.location}</p>
         
    
                    </div>
                  </div>
                ))}
            
              
               </div>
               </div>
            </div>
               
             
           
            </div>
            
    </>)
}
export default Property;