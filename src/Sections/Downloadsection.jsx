//function Section5(){
const Downloadsection=()=>{
    return(<> 
      <div className="layout overflow-hidden w-[500px] md:w-full bg-[linear-gradient(97.93deg,_#3B3898_-0.19%,_#5D499C_100%)] 
      w-[500px] mt-15 mb-10 md:w-full overflow-hidden">
        <div className=" mt-10 md:ml-20 lg:ml-0">
               <p className="text-4xl font-bold text-white ">My Prop AI</p>
               <div className="flex flex-col gap-y-5  lg:flex-row mt-5 lg:gap-x-15" >
                     <div className="bg-[linear-gradient(90deg,rgba(255,211,0,0.45)_0%,rgba(255,211,0,0)_100%)] 
                        w-2xs md:w-lg lg:w-xs  rounded-full p-6 text-white xl:w-lg">
                         <p className="font-bold text-2xl">10 Lack+</p>
                          <p>customer connected Monthly</p>
                      </div>
                      <div className="bg-[linear-gradient(90deg,rgba(255,211,0,0.45)_0%,rgba(255,211,0,0)_100%)] w-2xs 
                       md:w-lg lg:w-xs xl:w-lg rounded-full p-6 text-white">
                           <p className="font-bold text-2xl">2 Lack+</p>
                           <p>New Listing properties</p>
                       </div>
                      <div className=" rounded-full p-6 text-white w-2xs md:w-lg lg:w-xs xl:w-lg
                      bg-[linear-gradient(90deg,rgba(255,211,0,0.45)_0%,rgba(255,211,0,0)_100%)]">
                          <p className="font-bold text-2xl">20 Lack+</p>
                           <p>Happy Customers of My Prop  AI</p>
                       </div>
          </div>
 {/**------------------------------------------------------------------------ */}           
<div className="flex flex-col lg:flex-row mt-10 gap-4 justify-between">
    <div>{/**ghh */}
      <p className="text-3xl font-bold text-white mt-3">Get MyPropI in</p>
      <p className="text-3xl font-bold text-white mt-3">Your pocket</p>
      <p className="text-xl  text-white mt-3">Easy way to search your dream house in My Prop AI</p>
      <p className="text-xl  text-white ">Download it.Now!</p>
          <div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex  gap-4 mt-3 border-yellow-400 p-4 bg-yellow-400 rounded-lg h-[80px]  w-[200px] md:w-[220px]  lg:w-[250px] ">
                    <a href="https://play.google.com/" target="_blank"   rel="noopener noreferrer">
                    <img src="src/assets/playstore_icon.png" className="mt-1 w-[40px] object-contain"/></a>
                    <div className="">
                            <p className="text-sm md:text-ms lg:text-lg  text-semi-bold text-black ">Download on the </p>
                             <p className="text-black font-bold text-sm md:text-lg">playstore</p>
                    </div>
                                                                                         {/** w-[200px] md:w-[230px]**/}
                </div>
                <div className="flex gap-4 mt-3 border-yellow-400 p-4 bg-yellow-400 rounded-lg h-[80px] w-[200px] md:w-[220px] lg:w-[250px] ">
                      <a href="https://apps.apple.com/" target="_blank"   rel="noopener noreferrer">
                      <img src="src/assets/apple_icon.png"  className="w-[40px] object-contain"/></a>
                      <div className="">
                            <p className=" text-sm md:text-ms lg:text-lg text-semi-bold text-black ">Download on the </p>
                             <p className="text-black font-bold text-sm md:text-lg">Appstore</p>
                      </div>
                </div>
                <div className="flex gap-0 mt-4 mb-8 text-white  ">
                     <div className="w-3xs">
                       <p className="text-lg ">open camera & scan</p>
                      <p className="text-lg ">QR to download the</p>
                      <p className="text-lg ">My Prop AI</p>
                      </div>
                     <img src="src/assets/qr_code.png" alt="text" className="object-contain -ml-15 -mt-5"/>
                </div>  
          </div>{/**ghh */}
    </div>
</div>
<img src="src/assets/mobile.png" className="object-contain md:w-md"></img> 
</div>
</div>
</div>

    </>)
}
export default Downloadsection;