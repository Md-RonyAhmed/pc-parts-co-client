import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AllOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [allOrders, setAllOrders] = useState([]);
  const url = `https://pc-parts-co-server.onrender.com/order?email=${user.email}`;
  useEffect(() => {
    if (user) {
      (async () => {
        const { data } = await axios.get(url, {
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
          setAllOrders([]);
          return toast.error(data.error);
        }
        setAllOrders(data?.data);
      })();
    }
  }, [user, url, navigate]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
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
          {allOrders?.length ? (
            allOrders?.map((a, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{a.userName?.slice(0, 8)}</td>
                <td>{a.email}</td>
                <td>
                  {a.productName ? a.productName : "No Product name found"}
                </td>
                <td>{a.quantity}</td>
                <td>${a.price}</td>
              </tr>
            ))
          ) : (
            <div className="ml-[300px] mt-0">
              <Loading />
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
