import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
    const [user] = useAuthState(auth);
   return (
      <div className='mt-5'>
         <DashboardSidebar>
            <h1 className='text-2xl text-primary font-semibold text-center'>Welcome "{user?.displayName}" to your Dashboard</h1>
            <Outlet/>
         </DashboardSidebar>
      </div>
   );
};

export default Dashboard;