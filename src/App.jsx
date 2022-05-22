import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./Pages/Authentication/LogIn";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import HomeParts from "./Pages/Home/HomeParts";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Reviews from "./Pages/Reviews/Reviews";
import Navbar from "./Pages/Shared/Navbar";
function App() {
  return (
    <div className="mt-20 pt-4">
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/parts" element={<HomeParts></HomeParts>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route
            path="/portfolio"
            element={<MyPortfolio></MyPortfolio>}
          ></Route>
          <Route path="/login" element={<LogIn></LogIn>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
