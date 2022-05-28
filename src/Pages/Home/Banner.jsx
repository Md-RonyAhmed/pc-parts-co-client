import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../Assets/Images/approved-quality-designify.png";
const Banner = () => {
   return (
     <section className="md:mb-32 mb-60 bg-slate-300 mt-20 h-screen pt-3">
       <div className="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
         <div className="container mx-auto xl:px-32">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="mt-12 lg:mt-0">
               <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                 The best offer <br />
                 <span className="text-primary">for your business</span>
               </h1>
               <Link to="blogs"
                 className="btn btn-primary mr-4 "
                 data-mdb-ripple="true"
                 data-mdb-ripple-color="light"
                 
                 role="button"
               >
                 Get started
               </Link>
               <Link
                 className="btn-outline btn btn-ghost"
                 data-mdb-ripple="true"
                 data-mdb-ripple-color="light"
                 to="portfolio"
                 role="button"
               >
                 Learn more
               </Link>
             </div>
             <div className="mb-12 lg:mb-0">
               <img
                 src={img}
                 className="w-full h-96 rounded-lg shadow"
                 alt=""
               />
             </div>
           </div>
         </div>
       </div>
     </section>
   );
};

export default Banner;