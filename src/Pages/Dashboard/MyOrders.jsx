import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
   const [user] = useAuthState(auth);
   const navigate = useNavigate();
   const [myOrders, setMyOrders] = useState([]);
   const url = `http://localhost:5000/orders?email=${user.email}`;
   useEffect(() => {
      if (user) {
        (async () => {
          const { data } = await axios.get(url,{
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
           if (data?.res?.status === 401 || data?.res?.status === 403) {
             signOut(auth);
             localStorage.removeItem("accessToken");
              navigate("/");
            return data?.res?.json();
           }
          
          if (!data?.success) {
            setMyOrders([]);
            return toast.error(data.error);
          }
          setMyOrders(data?.data);
        })();
    }
   }, [user,url,navigate]);
   

   return (
     <div class="overflow-x-auto">
       <table class="table table-zebra w-full">
         <thead>
           <tr>
             <th></th>
             <th>Name</th>
             <th>Email</th>
             <th>Products Name</th>
             <th>Quantity</th>
             <th>Price</th>
           </tr>
         </thead>
         <tbody>
           {myOrders?.map((a,i) => (
             <tr>
                 <th>{i+1}</th>
                 <td>{a.userName?.slice(0,8) }</td>
                 <td>{ a.email}</td>
               <td>{a.productName?a.productName:"No Product name found"}</td>
                 <td>{ a.quantity}</td>
                 <td>${ a.price}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
};

export default MyOrders;