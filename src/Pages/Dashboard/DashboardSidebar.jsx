import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link} from "react-router-dom";
import auth from "../../firebase.init";

const DashboardSidebar = ({ children }) => {
  const [user] = useAuthState(auth);
  return (
    <div class="drawer drawer-mobile mt-16 bg-slate-100">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content p-4">
        <label
          for="my-drawer-2"
          class="btn btn-ghost drawer-button underline underline-offset-4 lg:hidden w-32 mt-2 mb-4 mx-auto text-lime-800"
        >
         Dashboard
        </label>
        {children}
      </div>
      <div class="drawer-side ">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">{user?.displayName?.slice(0,8)}'s Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/my-orders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/add-review">Add Review</Link>
          </li>
          <li>
            <Link to="/dashboard/all-orders">Manage All Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/all-user">All User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
