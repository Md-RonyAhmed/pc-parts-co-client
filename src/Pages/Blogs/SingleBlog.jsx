import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import BlogDetails from './BlogDetails';

const SingleBlog = () => {
const { id } = useParams();
const [singleBlog, setSingleBlog] = useState([]);
   const url = `http://localhost:5000/blogs/${id}`;
useEffect(() => {
  (async () => {
    const { data } = await axios.get(url);
    if (!data?.success) {
      setSingleBlog([]);
      return toast.error(data.error);
     }
    setSingleBlog(data?.data);
  })();
}, [url]);

   return (
     <div className="container my-16 px-6 mx-auto mt-3 md:w-5/6">
         {singleBlog.map((data) => (
            <BlogDetails key={id} blog={data}></BlogDetails>
       ))}
     </div>
   );
};

export default SingleBlog;