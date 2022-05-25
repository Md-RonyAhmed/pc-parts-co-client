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
          ></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/signup" element={<Registration></Registration>}></Route>
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
