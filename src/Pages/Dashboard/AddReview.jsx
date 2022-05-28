import React from 'react';
import ReactStars from "react-rating-stars-component";
const AddReview = () => {
   const secondExample = {
     size: 25,
     count: 5,
     color: "gray",
     activeColor: "orange",
     value: 3.5,
     a11y: true,
     isHalf: true,
     onChange: (newValue) => {
       console.log(`Example 2: new value is ${newValue}`);
     },
   };
   return (
     <div>
       <h1>Add a Review</h1>
       <h1>Add a Review</h1>
       <h1>Add a Review</h1>
       <ReactStars {...secondExample} />
     </div>
   );
};

export default AddReview;