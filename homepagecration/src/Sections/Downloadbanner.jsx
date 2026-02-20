import { useState } from "react";

const Downloadbanner=()=>{
  
    return(
    <div className="layout overflow-hidden w-[500px] md:w-full  mt-15 overflow-hidden">
           <div className=" bg-[linear-gradient(90deg,rgba(26,32,144,0.9)_0%,rgba(97,68,152,0.9)_100%),url('/src/assets/bgimage.png')]  
           rounded-lg  pt-10  md:mx-25">
             <div className="grid grid-cols-1  xl:grid-cols-3 gap-5 mx-15 text-white">
                  <img src="src/assets/mobile.png" className="w-[300px] h-[350px] xl:-ml-10"/>
                  <div className="grid grid-rows-2 gap-4 xl:-ml-10 md:w-[450px]">
                    <div className="mt-5  ">
                         <p className=" font-bold text-3xl">Get MyPropI in Your</p>
                         <p  className="font-bold text-3xl"> pocket...</p>
                         <p className=" mt-4">Easy way to search your dream house in My Prop AI,</p>
                         <p className="">Download it.Now!</p>
                    </div>
                    <div className="-mt-5 grid grid-cols-1 lg:grid-cols-2 ">
                            <div className="flex gap-4 mt-3 border-yellow-400 p-4 bg-yellow-400 rounded-lg
                             h-[80px] w-3xs lg:w-[190px]">
                                <a href="https://play.google.com/" target="_blank"   rel="noopener noreferrer">
                               <img src="src/assets/playstore_icon.png" className="mt-2 w-[30px] object-contain"/></a>
                            <div className="mt-1">
                                 <p className="text-sm text-semi-bold text-black ">Download on the </p>
                                   <p className="text-black font-bold text-sm">Playstore</p>
                            </div>
                             </div>
                             <div className="flex gap-4 mt-3 mb-5  text-white font-bold border-[#8A38F5] p-2 bg-[#8A38F5] 
                             rounded-lg  h-[80px] w-3xs xl:w-[220px]">
                                 <img src="src/assets/qr_code.png" alt="text" className="w-[50px] object-contain"/>
                     <div>
                       <p className="text-sm">open camera & scan</p>
                      <p className="text-sm  ">QR to download the</p>
                      <p className="text-sm ">My Prop AI</p>
                      </div>
                    
                </div>  

                    </div>
                      </div>
                       <img src="src/assets/person.png" className="hidden md:flex xl:ml-20 w-[250px] h-[350px] p-2"/>
             </div>
          
        </div>

    </div>
    )
}
export default Downloadbanner;