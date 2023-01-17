import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch,i }) => {
   const { email,role, _id } = user;
   const makeAdmin = () => {
     fetch(`https://pc-parts-co-server.vercel.app/user/admin/${email}`, {
       method: "PUT",
       headers: {
         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
       },
     })
       .then((res) => {
         if (res.status === 403) {
           toast.error("Failed to Make an admin");
         }
         return res.json();
       })
       .then((data) => {
         if (data.modifiedCount > 0) {
           refetch();
           toast.success(`Successfully made an admin`);
         }
       });
   };
   return (
     <tr>
       <th>{i + 1}</th>
       <td>{_id}</td>
       <td>{email}</td>
       <td>
         {role !== "admin" && (
           <button onClick={makeAdmin} className="btn btn-xs">
             Make Admin
           </button>
         )}
       </td>
       <td>
         <button className="btn btn-xs">Remove User</button>
       </td>
     </tr>
   );
};

export default UserRow;