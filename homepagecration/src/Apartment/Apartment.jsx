import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Skeleton from "../Property/Skeleton";

function Apartment({items,search}){
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);
  
     const [visibleCount,setVisibleCount] =useState(4);
     useEffect(() => {
       const updateVisibleCount = () => {
         const width = window.innerWidth;
     
         if (width < 640) {
           setVisibleCount(1);  // mobile
         } else if(width<=768){
      setVisibleCount(2);
    } 
         else if (width <=1024) {
           setVisibleCount(3);  // tablet
         } else {
           setVisibleCount(4);  // desktop
         }
       };
     
       // Set initial value
       updateVisibleCount();
     
       // Listen to resize
       window.addEventListener("resize", updateVisibleCount);
     
       return () => window.removeEventListener("resize", updateVisibleCount);
     }, []);




  const [startIndex, setStartIndex] = useState(0); // start of visible window
  

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
    
  const navigate = useNavigate();
   const handleClick=()=>{
       navigate('/next')}
       
    return(<>
    <div className="layout w-[500px] md:w-full overflow-hidden ">
     
          <div className="  flex flex-col justify-between   ">
                <div className="flex flex-col justify-center">
                     <div className=" mt-10">
                        <h1 className="font-bold text-2xl  lg:text-xl xl:text-2xl">Apartments,Independent House and More</h1>
                        <p className="text-2xl">Dream property just away from click</p>
                      </div>
                 </div>
            
                 <div className=" mt-10 relative">
                    {startIndex>0 &&
                    <img src="src/assets/leftarrow.png" onClick={prevSlide} className="absolute top-50 -left-5 sm:top-2 sm:left-3  
                    md:top-40 md:-left-8 md:-translate-y-1/2 lg:-left-7 lg:top-1/2 lg:-translate-y-1/2  w-10 sm:w-10 md:w-12 lg:w-12
                    p-2 rounded-full bg-[#3B3898]  z-10 cursor-pointer" />
                    }
                      {/* → Next Arrow */}
                    <img src="src/assets/rightarrow.png"  onClick={nextSlide} className="absolute top-50 -right-2 sm:top-2 sm:right-3   
                    md:top-40 md:-translate-y-1/2 md:-right-4 lg:-right-3 lg:top-1/2 lg:-translate-y-1/2 w-10 sm:w-10 md:w-12 lg:w-12
                    p-2 rounded-full bg-[#3B3898] z-10 cursor-pointer" />
                    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-6 ">
                     { visibleItems.
                      map((items) => (
                         loading ? <Skeleton/> :
                      <div className={`${items.color} w-full p-8 md:p-5 shadow-l  rounded-xl px-5"`}>
                          <div className="relative">
                            <img  className=" w-full hover:cursor-pointer transform transition duration-300 hover:scale-110"  src={items.image} alt="image"/>
                            <p className="mt-2 text-xl font-bold md:text-[15px]   lg:text-xl">{items.des}</p>
                              </div>
                      </div>
                    ))}
                  
                   </div>
                   </div>
                </div>
                   
              
               
                </div>
   
    </>)
    
}
export default Apartment;  
      
                              
                       
                    
                          
                      
                      
                         
                             
                              
         
              
        
                      
                
                  