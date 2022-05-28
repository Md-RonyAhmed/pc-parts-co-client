import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const AddReview = () => {

   const [user] = useAuthState(auth);
   const [rating,setRating]=useState(0)
     const handleSubmit = async (event) => {
       event.preventDefault();
       const review = {
         photo: user?.photoURL,
         userName: event.target.uname.value,
         email: event.target.email.value,
         rev: event.target.address.value,
         rating: secondExample?.value,
         
       };
        try {
         const { data } = await axios.post(
           `http://localhost:5000/reviews`,
           review
         );
         if (!data.success) {
           return toast.error(data.error);
         }

         toast.success(data.message);
         event.target.reset();
       } catch (error) {
         toast.error(error.message);
        }
   };
   const secondExample = {
     size: 25,
     count: 5,
     color: "gray",
     activeColor: "orange",
     value: rating,
     a11y: true,
     isHalf: true,
     onChange: (newValue) => {
        setRating(newValue);
     },
   };
   
    


   return (
     <>
       <h1 className="text-2xl text-center">Add a Review</h1>
       <div className="md:w-2/5 w-full mx-auto">
         <div class="mb-12 md:mb-0 border-2 rounded p-2">
           <div class="flex justify-center mb-6">
             {user.photoURL ? (
               <img
                 width="100px"
                 alt=""
                 className="rounded-full"
                 src={user?.photoURL}
               />
             ) : (
               <img
                 width="100px"
                 alt=""
                 className="rounded-full"
                 src="https://picsum.photos/200"
               />
             )}
           </div>
           <form onSubmit={handleSubmit}>
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
             <p className="mb-2">Review:</p>
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
               placeholder="Enter your review"
             />
             <div className="flex justify-center items-center">
               <p className="mr-2">Rating: </p>
               <span className="w-full">
                 <ReactStars {...secondExample} />
               </span>
             </div>

             <input
               className="btn btn-outline btn-primary block w-full"
               type="submit"
               value="Send Review"
             />
           </form>
         </div>
       </div>
     </>
   );
};

export default AddReview;