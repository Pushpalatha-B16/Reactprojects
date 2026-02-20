import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
export const Popupform=({setPopup})=>{
  const [step, setStep] = useState(1);

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);


    return(<>
    <div className="bg-[linear-gradient(90deg,rgba(26,32,144,0.9)_0%,rgba(97,68,152,0.9)_100%),url('/src/assets/bgimage.png')] bg-cover bg-center 
     opacity-90  w-md md:mx-4 md:w-4xl lg:mx-auto rounded-lg overflow-hidden ">
        <div className=" flex justify-end pl-5">
           <IoCloseSharp className="text-white  text-5xl " onClick={()=>setPopup(false)} ></IoCloseSharp>
        </div>
    <div className="flex flex-row justify-between p-10 pt-10">
        <div className="hidden md:block font-bold">
                <p className="text-white text-2xl lg:text-3xl ">MyPropAI <span className="text-yellow-400 text-3xl">offers you</span></p>
                <p className="text-white mt-3"><span className="text-yellow-300">🏠︎</span>Post your property for Free</p>
                <p className="text-white mt-1"><span className="text-yellow-300">🏠︎</span>Thousands of New Listing daily</p>
                <p className="text-white mt-1"><span className="text-yellow-300">🏠︎</span>Get accessed by more than 1 lakhs buyers</p>
                <p className="text-white mt-1"><span className="text-yellow-300">🏠︎</span>Get daily update on Our property</p>
                <p className="text-white mt-1"><span className="text-yellow-300">🏠︎</span>Get latest trends and Market price</p>
                <p className="text-white mt-1"><span className="text-yellow-300">🏠︎</span>Get Upcoming Developing area status</p>
                <p className="text-yellow-300 text-2xl mt-2">Buy your Dream Property</p>
            </div>
         <div className="bg-white/90 text-yellow-300 w-sm p-10 rounded-lg h-[300px]">
          {step==1 &&(
            <div>
            <p className="text-black font-semibold text-xl">Sign In/Sign Up</p>
            <p className="text-black text-lg mt-5">Phone Number</p>
            <p className="bg-white rounded-lg p-2 mt-1 flex">
                  <img src="src/assets/smartphone-call.png" className="w-[30px]"/>
                  <input type="number" placeholder="Enter your phone number " className="text-black w-full"></input>
            </p>
            <p className="text-black mt-5">OTP will be sent to this number </p>
             <div className="text-black flex justify-center mx-auto rounded-lg bg-yellow-400 p-1 mt-5  w-[200px]">
               
                <button className="mx-auto hover:cursor-pointer" onClick={next}>send</button>
            </div>
            </div>)}
             {step==2 &&(
            <div>
            <p className="text-black font-semibold text-xl">Sign In/Sign Up</p>
            <p className="text-black text-lg mt-5">Enter OTP number</p>
            <p className="bg-white rounded-lg p-2 mt-1 flex">
                 
                  <input type="number" placeholder="Enter OTP " className="text-black w-full"></input>
            </p>
            <p className="text-black mt-3">Time limit:  </p>
             <div className="text-black flex justify-center gap-4 mx-auto rounded-lg p-1 mt-5  w-[200px]">
                 <button className="mx-auto hover:cursor-pointer bg-yellow-400 px-5 rounded-lg" onClick={back}>Back</button>
                <button className="mx-auto hover:cursor-pointer bg-yellow-400 px-5 rounded-lg" onClick={next}>continue</button>
            </div>
            </div>)}
           {step==3 &&(
            <div>
            <p className="text-black font-semibold text-xl">Sign In/Sign Up</p>
            <p className="text-black text-lg mt-5">Email</p>
             <input type="email" placeholder="Enter Email" className="text-black w-3xs p-1 bg-white rounded-lg"></input>
              <p className="text-black text-lg ">Password</p>
             <input type="password" placeholder="Enter password" className="text-black w-3xs p-1 bg-white rounded-lg"></input>
            
          
             <div className="text-black flex justify-center gap-4 mx-auto rounded-lg p-1 mt-5  w-[200px]">
                 <button className="mx-auto hover:cursor-pointer bg-yellow-400 px-5 rounded-lg" onClick={back}>Back</button>
                <button className="mx-auto hover:cursor-pointer bg-yellow-400 px-5 rounded-lg" onClick={()=>(setPopup(false))}>completed</button>
            </div>
            </div>)}
            
          
      </div>
      
  
    </div>
   
    </div>
    </>)
}