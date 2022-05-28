import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';
const AllUser = () => {
    const {
      data: users,
      isLoading,
      refetch,
    } = useQuery("users", () =>
      fetch("http://localhost:5000/user", {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
        return <Loading></Loading>
    }
   return (
      <div>
         <h2 className="text-2xl">All Users: {users.length}</h2>
         <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
               <thead>
                  <tr>
                     <th>Sno.</th>
                     <th>ID</th>
                     <th>Email</th>
                     <th></th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     users.map((user, i) => <UserRow
                        i={i}
                        key={user._id}
                        user={user}
                        refetch={refetch}
                     ></UserRow>)
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default AllUser;