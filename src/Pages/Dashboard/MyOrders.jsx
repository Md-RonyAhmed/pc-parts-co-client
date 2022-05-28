import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyOrders = () => {
   const [user] = useAuthState(auth);
   const [myOrders, setMyOrders] = useState([]);
   const url = `http://localhost:5000/orders?email=${user.email}`;
   useEffect(() => {
      if (user) {
        (async () => {
          const { data } = await axios.get(url);
          if (!data?.success) {
            setMyOrders([]);
            return toast.error(data.error);
          }
          setMyOrders(data?.data);
        })();
    }
   }, [user,url]);
   

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