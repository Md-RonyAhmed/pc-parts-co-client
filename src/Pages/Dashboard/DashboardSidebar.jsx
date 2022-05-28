import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const DashboardSidebar = ({ children }) => {
  const [user] = useAuthState(auth);
   const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile mt-16 bg-slate-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-4">
        <label
          for="my-drawer-2"
          className="btn btn-ghost drawer-button underline underline-offset-4 lg:hidden w-32 mt-2 mb-4 mx-auto text-lime-800"
        >
          Dashboard
        </label>
        {children}
      </div>
      <div className="drawer-side ">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">
              {user?.displayName?.slice(0, 8)}'s Profile
            </Link>
          </li>
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/my-orders">My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/add-review">Add Review</Link>
              </li>
            </>
          )}
          {admin && (
            <>
              <li>
                <Link to="/dashboard/all-orders">Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/all-user">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/add-product">Add a New Product</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-products">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
