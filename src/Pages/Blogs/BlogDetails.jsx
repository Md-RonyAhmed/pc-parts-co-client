import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = ({blog}) => {
   const { name, desc, img } = blog;
   return (
     <div className="mt-24">
       <div className="mt-24 p-1 w-full mx-auto">
         <h1 className="font-bold text-3xl my-6">{name}</h1>
       </div>
       <section className="mb-8 text-gray-800">
         <div className="flex items-center mb-6">
           <img
             src="https://i.ibb.co/6Rjt92g/MdRony.jpg"
             className="rounded-full mr-2 w-10 h-10"
             alt=""
             loading="lazy"
           />
           <div>
             <span>
               {" "}
               Published <u>24 may 2022</u> by{" "}
             </span>
             <a href="#!" className="font-medium">
               Md. Rony
             </a>
           </div>
         </div>
         <img
           src={img}
           className="w-full md:w-4/5 shadow-lg rounded-lg mb-6"
           alt=""
         />
         <p className="text-gray-900 font-light text-justify">{desc.slice(0, 1198)}</p>
         <p className="text-gray-900 font-light mt-4 text-justify">
           {desc.slice(1198, 2473)}
         </p>
       </section>
       <div className="flex flex-row-reverse gap-0">
         <div className="w-32 mb-8 mr-0">
           <Link
             to="/blogs"
             type="button"
             className="btn btn-primary btn-outline"
           >
             Blogs
           </Link>
         </div>
         <div className="w-32 mb-8">
           <Link to="/" type="button" className="btn btn-info btn-outline">
             Home
           </Link>
         </div>
       </div>
     </div>
   );
};

export default BlogDetails;