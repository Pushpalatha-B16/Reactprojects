//function Section7(){
const Footer=()=>{
    return(
<div className="layout overflow-hidden w-[500px] md:w-full  mt-15  md:w-full bg-[#36334D] ">
    <div className="my-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:grid-cols-3 gap-4">
                <div className="text-white">
                    <p className="text-2xl mb-3">MyPropAI</p>
                    <p className="w-[300px] text-white/60 lg:w-lg">MyPropAI is the india's No.1 Real estate marketplace with</p>
                    <p className="w-[300px] text-white/60  lg:w-lg">years of experience and a deep understanding of the</p>
                    <p className="w-[300px]  text-white/60 lg:w-lg">local real estate market ,we have built a reputation for</p>
                    <p className="w-[300px] text-white/60 lg:w-lg">providing exceptional service,personalized attention,and </p>
                    <p className="w-[300px] text-white/60 xl:w-full">expert guidance to our clients</p>
                    <p className="mt-3 mb-3 text-xl xl:w-full">Contact</p>
                    <p className="w-[300px] text-white/60 xl:w-full">Call us on,the number</p>
                    <p className="text-bold mb-3 xl:w-full">+91 9884626627</p>
                    <p className="w-[300px] text-white/60 xl:w-full">Write to us at</p>
                     <p>contact@teanso.com</p>
                </div>
                <div className=" md:ml-35 xl:ml-30 md:w-full">
                      <p className="text-xl  text-bold mb-2 text-white">Company</p>
                      <p className="mb-1 text-white/60 text-white/60">About Us</p>
                      <p className="mb-1 text-white/60">Career with Us</p>
                      <p className="mb-1 text-white/60">Our Articles</p>
                      <p className="mb-1 text-white/60">Feedback</p>
                      <p className="mb-1 text-white/60 lg:w-lg">Report a problem</p>
                     <p className="mb-1 text-white/60 lg:w-lg">Customer Service</p>
                     <p className="mb-1 text-white/60 lg:w-lg">Download Mobile App</p>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-3">
                         <div className="flex  gap-4  border-yellow-400 px-3 py-3 bg-yellow-400 rounded-lg h-[80px]
                          w-3xs md:w-[180px] xl:w-[180px] ">
                               <a href="https://play.google.com/" target="_blank"   rel="noopener noreferrer">
                                 <img src="src/assets/playstore_icon.png" className="mt-2 w-[30px] object-contain"/></a>
                                     <div className="">
                                      <p className="text-[12px] text-semi-bold mt-1 text-black ">Download on the </p>
                                      <p className="text-black font-bold text-sm">playstore</p>
                                     </div>
                          </div>
                          <div className="flex  gap-4  border-yellow-400 p-4 bg-yellow-400 rounded-lg h-[80px]
                          w-3xs md:w-[180px] xl:w-[180px] ">
                                 <a href="https://apps.apple.com/" target="_blank"   rel="noopener noreferrer">
                                 <img src="src/assets/apple_icon.png" className="w-[40px] object-contain"/></a>
                                     <div className="">
                                      <p className="text-[12px] text-semi-bold text-black ">Download on the </p>
                                      <p className="text-black font-bold text-sm">Appstore</p>
                                     </div>
                          </div>
                    </div>
                </div>
                <div className="text-white xl:ml-60">
                    
                      <p className="text-bold text-2xl pb-5">For Seller</p>
                      <p className="text-white/60 ">post property Free</p>
                      <p className="text-bold text-xl pb-5 pt-5 w-md">Keep in touch</p>
                     <div className="grid grid-cols-4 w-fit gap-1">
                       <img src="src/assets/FB_icon.png" />
                       <img src="src/assets/twitter_icon.png" />
                       <img src="src/assets/instagram_icon.png" />
                        <img src="src/assets/youtube_icon.png" />
                     </div>
                   
                </div>
        </div>
         <div className="text-center md:flex justify-end text-white mt-10">
            <p>@2023 www.mypropai.com.All rights reserved</p>

         </div>
    </div>
  
</div>
      
    )
}
export default Footer