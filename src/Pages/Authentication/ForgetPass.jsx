import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const ForgetPass = () => {
   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
   const emailRef = useRef("");
   
  if (sending) {
    return <Loading></Loading>;
   }
   const resetPassword = async () => {
     const email = emailRef.current.value;
     if (email) {
       await sendPasswordResetEmail(email);
       toast.success("Verification email sent!");
     } else {
       toast.warn("Please enter your email address");
     }
   };
   return (
     <div className="">
       <div className="bg-slate-50 w-full py-16 px-4">
         <div className="bg-white shadow-2xl rounded lg:w-2/5  md:w-1/2 w-full h-auto p-10 mt-16 mx-auto">
           <p
             tabIndex="0"
             className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 mb-4"
           >
             Forget Password
           </p>
           <div>
             <label
               id="email"
               className="text-sm font-medium leading-none text-gray-800"
             >
               Email
             </label>
             <input
               ref={emailRef}
               aria-labelledby="email"
               name="email"
               type="email"
               className="bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
               placeholder="Enter your email"
               required
             />
           </div>
           <div className="mt-5">
             <button onClick={resetPassword} type="submit" className="btn btn-primary w-full">
               Send verification email
             </button>
           </div>
         </div>
       </div>
     </div>
   );
};

export default ForgetPass;