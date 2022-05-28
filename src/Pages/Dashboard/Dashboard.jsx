import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const Dashboard = () => {
   return (
      <div className='mt-5'>
         <DashboardSidebar>
            <h1 className='text-2xl text-primary font-semibold'>Welcome to Dashboard</h1>
            <Outlet/>
         </DashboardSidebar>
      </div>
   );
};

export default Dashboard;