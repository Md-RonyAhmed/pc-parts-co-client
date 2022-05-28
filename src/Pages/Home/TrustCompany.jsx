import React from 'react';

const TrustCompany = () => {
   return (
     <div className="container my-24 mb-0 px-6 mx-auto">
       <div className="mb-0 p-1 md:w-3/4 mx-auto">
         <h1 className="text-4xl font-bold text-center mx-auto text-primary my-6 border-b-4 border-black pb-1 font-mono md:w-1/2  w-5/6">
           Trusted us by top companies
         </h1>
       </div>
       <section className="mb-20 text-gray-800 text-center">
         <div className="px-6 py-12 md:px-12">
           <div className="container mx-auto xl:px-32">
             <div className="grid lg:grid-cols-2 items-center">
               <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                 <div
                   className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                   style={{
                     background: "hsla(0, 0%, 100%, 0.55)",
                     backdropFilter: "blur(30px)",
                   }}
                 >
                   <h2 className="text-3xl font-bold mb-12">
                     Trusted by the best companies <br />
                     <span className="">around the world</span>
                   </h2>
                   <div className="grid md:grid-cols-2 gap-x-6">
                     <div className="mb-12">
                       <img
                         src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo6-1.png"
                         className="grayscale px-6"
                         alt="Nasa - logo"
                       />
                     </div>

                     <div className="mb-12">
                       <img
                         src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo5-1.png"
                         className="grayscale px-6"
                         alt="Amazon - logo"
                       />
                     </div>

                     <div className="mb-12 md:mb-0">
                       <img
                         src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo3-1.png"
                         className="grayscale px-6"
                         alt="Nike - logo"
                       />
                     </div>

                     <div className="">
                       <img
                         src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/logo4-1.png"
                         className="grayscale px-6"
                         alt="Ikea - logo"
                       />
                     </div>
                   </div>
                 </div>
               </div>
               <div className="md:mb-12 lg:mb-0">
                 <img
                   src="https://mdbootstrap.com/img/new/textures/full/166.jpg"
                   className="w-full rounded-lg shadow-lg"
                   alt=""
                 />
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
};

export default TrustCompany;