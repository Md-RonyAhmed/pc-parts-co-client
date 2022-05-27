import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { usePartsDetails } from '../../hooks/usePartsDetails';

const PlaceOrder = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
   const [parts] = usePartsDetails(id)
   const handleSubmit = (event) => {
      event.preventDefault();
      const a = event.target.quantity.value;
      if (a < parts?.min_quantity) {
         return toast.error("Error");
      }
   }
   return (
     <div>
       <div className="p-5 w-full my-24">
         <div className="mx-auto md:w-2/5 bg-transparent rounded-md shadow-2xl p-5">
           <div className=" mx-auto bg-gray-300 w-full rounded-md">
             <img
               className="w-full h-[300px] rounded-md"
               src={parts?.img}
               alt=""
             />
           </div>
           <form onSubmit={handleSubmit}>
             <div className="mx-auto w-full p-4 pl-0">
               <p className=" mb-2 font-bold text-xl text-black">
                 <span className=" text-orange-900">Product Name:</span>{" "}
                 {parts?.name}
               </p>
               <p className=" mb-2">
                 Price:{" "}
                 <span className="text-orange-900 text-lg font-bold">
                   ${parts?.price}
                 </span>
               </p>
               <p className="mb-2">User Name:</p>
               <input
                 name="uname"
                 type="text"
                 disabled
                 className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="exampleInput90"
                 value={user?.displayName}
               />
               <p className="mb-2">Email:</p>
               <input
                 name="email"
                 type="email"
                 value={user?.email}
                 disabled
                 className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="exampleInput90"
          
               />
               <p className="mb-2">Phone:</p>
               <input
                 name="phone"
                 type="text"
                 className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="exampleInput90"
                 placeholder="Enter your phone"
               />
               <p className="mb-2">Address:</p>
               <textarea
                 name="address"
                 type="text"
                 className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                 id="exampleInput90"
                 placeholder="Enter your location"
               />
              
             </div>
             <input
               className="btn btn-outline btn-primary block w-full"
               type="submit"
               value="Place Order"
             />
           </form>
         </div>
       </div>
     </div>
   );
};

export default PlaceOrder;