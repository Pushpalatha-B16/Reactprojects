//function Section3(){
const Popularlocation=({items})=>{
    return(<>
      <div className="layout overflow-hidden w-[500px] md:w-full mt-10 pb-1">
        <div className="flex flex-col  items-center">
             <h1 className="font-bold  lg:w-full text-xl lg:text-3xl 
         text-center">Find Your Dream Property In Popular Location</h1>
           <p className="text-center text-xl lg:text-3xl">Explore on your popular location</p>
        </div>
        <div className="   ">
               <div className=" grid grid-cols-1 place-items-center  md:grid-cols-3 
               lg:grid-cols-4 xl:grid-cols-5  gap-y-5 
               mt-10 ">
                 {
           items.map((item,index)=>(
            
                 <div key={item.id} className={`bg-[#ECEAFF] flex flex-col items-center  rounded-lg w-[400px] md:w-[200px] xl:w-[230px]
                   2xl:w-[380px] p-4 2xl:p-6
                    ${index === items.length - 1 ? 'md:col-span-3 md:flex md:justify-center lg:col-span-1' : ''}
                    lg:px-4 `}>
            <img src={item.image} className="w-sm lg:w-xs"></img>
                <p className="text-center">{item.title}</p>
             </div>   
                
              
            ))
            }
          
            </div>
                 
        </div>
           
       
         
            
           
       </div>
        
       
        
        
    
    


    </>)
}
export default Popularlocation;