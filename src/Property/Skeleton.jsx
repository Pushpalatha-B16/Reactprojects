const Skeleton=()=>{
return(
    <>
     <div  className="bg-[#ECEAFF] w-full p-8 md:p-5 rounded-xl shadow">

      <div className="relative">

        {/* image skeleton */}
        <div className="w-full h-48 bg-gray-300 rounded mb-3 animate-pulse"></div>

        {/* verified badge skeleton */}
        <div className="absolute top-2 left-2 w-24 h-6 bg-gray-300 rounded animate-pulse"></div>

        {/* heart icon skeleton */}
        <div className="absolute top-2 right-2 w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>

        {/* price */}
        <div className="h-6 w-24 bg-gray-300 rounded mt-3 animate-pulse"></div>

        {/* house type */}
        <div className="h-5 w-32 bg-gray-300 rounded mt-2 animate-pulse"></div>

        {/* location */}
        <div className="h-5 w-40 bg-gray-300 rounded mt-2 animate-pulse"></div>

      </div>



</div>
 
    </>
)
}
export default Skeleton;