import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import LogIn from "./Pages/Authentication/LogIn";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Home/Contact";
import Home from "./Pages/Home/Home";
import HomeParts from "./Pages/Home/PcParts";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";
import "react-toastify/dist/ReactToastify.css";
import Registration from "./Pages/Authentication/Registration";
import ForgetPass from "./Pages/Authentication/ForgetPass";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SingleBlog from "./Pages/Blogs/SingleBlog";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import AllOrders from "./Pages/Dashboard/AllOrders";
import AllUser from "./Pages/Dashboard/AllUser";
function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/parts" element={<HomeParts></HomeParts>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/portfolio" element={<MyPortfolio />}></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile />}></Route>
            <Route path="my-orders" element={<MyOrders/>}></Route>
            <Route path="add-review" element={<AddReview/>}></Route>
            <Route path="all-orders" element={<AllOrders/>}></Route>
            <Route path="all-user" element={<AllUser/>}></Route>
          </Route>
          <Route
            path="/orders/:id"
            element={
              <RequireAuth>
                <PlaceOrder />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/signup" element={<Registration></Registration>}></Route>
          <Route path="/blogs/:id" element={<SingleBlog></SingleBlog>}></Route>
          <Route path="/forget" element={<ForgetPass></ForgetPass>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </Navbar>
    </div>
  );
}

export default App;
