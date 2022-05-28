import React from 'react';

const UserRow = ({ user, refetch,i }) => {
   const { email,_id } = user;
   return (
     <tr>
       <th>{i + 1}</th>
       <td>{_id}</td>
       <td>{email}</td>
       <td>
         
           <button class="btn btn-xs">
             Make Admin
           </button>
         
       </td>
       <td>
         <button class="btn btn-xs">Remove User</button>
       </td>
     </tr>
   );
};

export default UserRow;