import React from 'react';
import { useNavigate } from "react-router-dom";
const Blog = ({ blog }) => {
  const { _id ,name, img, desc } = blog;
   const navigate = useNavigate();
   const navigateToBlogDetail = (id) => {
     navigate(`/blogs/${id}`);
   };
   return (
     <div className="flex flex-wrap mb-12">
       <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
         <div
           className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
           style={{ backgroundPosition: `${50}%` }}
           data-mdb-ripple="true"
           data-mdb-ripple-color="light"
         >
           <img src={img} className="w-full" alt="Louvre" />
           <a href="#!">
             <div
               className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
               style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
             ></div>
           </a>
         </div>
       </div>

       <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-6 lg:pl-6">
            <h3 className="text-2xl font-bold mb-2">{ name}</h3>
         <div className="text-red-600 text-sm mb-2 flex items-center font-medium">
           Web Technology
         </div>
         <p className="text-gray-500 mb-4">
          {desc.slice(0,280)}
           <span className="text-blue-500 text-lg ml-1">
             ...
           </span>
         </p>
         <div className="w-36 mt-2">
           <button
             onClick={()=>navigateToBlogDetail(_id)}
             type="button"
             className="btn btn-outline btn-info"
           >
             Read more...
           </button>
         </div>
       </div>
     </div>
   );
};

export default Blog;