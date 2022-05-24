import React from 'react';
import img from "../../Assets/Images/pc.jpg"
const Banner = () => {
   return (
     <section class="md:mb-32 mb-60 bg-slate-300 mt-20 h-screen pt-3">
       <div class="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
         <div class="container mx-auto xl:px-32">
           <div class="grid lg:grid-cols-2 gap-12 items-center">
             <div class="mt-12 lg:mt-0">
               <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                 The best offer <br />
                 <span class="text-primary">for your business</span>
               </h1>
               <a
                 class="btn btn-primary mr-4 "
                 data-mdb-ripple="true"
                 data-mdb-ripple-color="light"
                 href="#!"
                 role="button"
               >
                 Get started
               </a>
               <a
                 class="btn-outline btn btn-ghost"
                 data-mdb-ripple="true"
                 data-mdb-ripple-color="light"
                 href="#!"
                 role="button"
               >
                 Learn more
               </a>
             </div>
             <div class="mb-12 lg:mb-0">
               <img
                 src={img}
                 class="w-full h-96 rounded-lg shadow"
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