import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import img from "../../Assets/Images/images.png";
import auth from '../../firebase.init';
const MyProfile = () => {
   const [user] = useAuthState(auth);
   const handleSubmit = async (event) => {
     event.preventDefault();
     const updateUser = {
       userName: event.target.uname.value,
       email: event.target.email.value,
       address: event.target.address.value,
       phone: event.target.phone.value,
       linkedIn:event.target.linkedin.value
     };
     try {
       const { data } = await axios.put(`https://pc-parts-co.herokuapp.com/userProfile/${user?.email}`, updateUser);
       if (!data.success) {
         return toast.error(data.error);
       }

       toast.success(data.message);
       event.target.reset();
     } catch (error) {
       toast.error(error.message);
     }
   };
  
   return (
     <div>
       <div className="pt-2 w-full mb-10">
         <div className="mx-auto md:w-3/5 rounded-md shadow-2xl p-5">
           <div className=" mx-auto bg-gray-300 w-[100px] h-[100px] rounded-full">
             {user.photoURL ? (
               <img
                 width="100px"
                 alt=""
                 className="rounded-full"
                 src={user?.photoURL}
               />
             ) : (
               <img width="100px" alt="" className="rounded-full" src={img} />
             )}
           </div>
           <form onSubmit={handleSubmit}>
             <div className="mx-auto w-full p-4 pl-0">
               <p className=" mb-2 font-bold text-xl text-black">
                 <span className=" text-orange-900"> Name:</span>{" "}
                 {user?.displayName}
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
                 required
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
               <p className="mb-2">LinkedIn Profile:</p>
               <input
                 name="linkedin"
                        type="text"
                        placeholder='Enter LinkedIn profile link'
                 required
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
               <p className="mb-2">Address:</p>
               <textarea
                 name="address"
                 type="text"
                 required
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
               value="Update Profile"
             />
           </form>
         </div>
       </div>
     </div>
   );
};

export default MyProfile;