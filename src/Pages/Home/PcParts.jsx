import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import Parts from './Parts';
const PcParts = () => {
   const [limit, setLimit] = useState(6);
   const [parts, setParts] = useState([]);
    const url = `https://pc-parts-co.herokuapp.com/parts?limit=${limit}`;
    useEffect(() => {
      (async () => {
        const { data } = await axios.get(url);
        if (!data?.success) {
          setParts([]);
          return toast.error(data.error);
        }
         setParts(data?.data);
         setLimit(limit)
      })();
    }, [url,limit,parts]);
   return (
     <div id="products" className="container px-6 mt-6">
       <div className="mb-6 p-1 md:w-3/6 mx-auto">
         <h1 className="text-4xl font-bold text-center mx-auto text-primary my-6 border-b-4 border-black pb-1 font-mono md:w-1/2  w-5/6">
           Latest Pc Parts
         </h1>
       </div>
       <div className="container mx-auto p-6 grid md:grid-cols-3 gap-4">
         {parts?.length ? (
           parts.map((part) => <Parts key={part._id} parts={part}></Parts>)
         ) : (
           <div>
             <Loading></Loading>
           </div>
         )}
       </div>
       <div className="md:w-1/6 mt-2 w-1/2 md:mx-6 mx-auto">
         <Link
           to="/"
           type="button"
           className="btn btn-primary w-48"
         >
           Load more...
         </Link>
       </div>
     </div>
   );
};

export default PcParts;