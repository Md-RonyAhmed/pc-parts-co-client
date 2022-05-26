import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import Blog from './Blog';
import Loading from '../Shared/Loading';


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const url = `http://localhost:5000/blogs`;
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      if (!data?.success) {
        setBlogs([]);
        return toast.error(data.error);
      }
      setBlogs(data?.data);
    })();
  }, [url]);    
  
  return (
    <div className="container my-24 px-6 mx-auto mt-24">
      <div className="mb-0 p-1 md:w-3/4 mx-auto">
        <h1 className="text-4xl font-bold text-center mx-auto text-primary my-6 border-b-4 border-black pb-1 font-mono md:w-1/2 w-5/6">
          Our Latest Blogs
        </h1>
      </div>
      <section className="mb-32 text-gray-800">
        {blogs?.length ? (
          blogs.map((blog) => (
            <Blog key={blog._id} blog={blog}></Blog>
          ))
        ) : (
          <div className="md:ml-[500px]">
            <Loading></Loading>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blogs;