import React from 'react';
import logo from "../../Assets/Logo/logo.png";
import { NavLink } from "react-router-dom";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import img from '../../Assets/Images/images.png'
const Navbar = ({ children }) => {
  
  const [user] = useAuthState(auth);

   const handleSignOut = () => {
     signOut(auth);
     toast.warn("Oopps! you are Logged Out!");
   };

  const navbar = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <a href="/#parts">PC Parts</a>
      </li>
      <li>
        <a href="/#reviews">Reviews</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">My Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      {user ? (
        <>
          <button
            className="btn btn-ghost btn-outline ml-1"
            onClick={handleSignOut}
          >
            LogOut
          </button>
          {user.photoURL ? (
            <img
              width="30px"
              alt=""
              className="w-12 ml-1 hidden md:block rounded-full cursor-pointer"
              src={user?.photoURL}
            />
          ) : (
            <img
              width="30px"
              alt=""
              className="w-12 ml-1 hidden md:block rounded-full cursor-pointer"
              src={img}
            />
          )}
        </>
      ) : (
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
      )}
    </>
  );
   return (
     <div class="drawer drawer-end">
       <input id="sidebar" type="checkbox" class="drawer-toggle" />
       <div class="drawer-content flex flex-col">
         <div class="w-full flex navbar bg-slate-200 justify-between shadow-md fixed top-0 z-50">
           <div>
             <img width="70" src={logo} alt="" />
             <div class="flex mr-8 text-2xl text-primary font-bold">
               PC parts Co.
             </div>
           </div>

           <div class="lg:hidden flex-1 justify-end">
             <label for="sidebar" class="btn btn-square btn-ghost">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 24 24"
                 class="inline-block w-6 h-6 stroke-current"
               >
                 <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   stroke-width="2"
                   d="M4 6h16M4 12h16M4 18h16"
                 ></path>
               </svg>
             </label>
           </div>

           <div class="flex-none hidden lg:block">
             <ul class="menu menu-horizontal p-0 m-0">{navbar}</ul>
           </div>
         </div>
         {children}
       </div>

       <div class="drawer-side">
         <label for="sidebar" class="drawer-overlay"></label>
         <ul class="menu p-4 overflow-y-auto w-72 bg-base-300">{navbar}</ul>
       </div>
     </div>
   );
};

export default Navbar;