import React from 'react';
import ReactStars from "react-rating-stars-component";
const ReviewDetails = ({ review, setRating }) => {
    const { photo, userName, rev, rating } = review;
  const secondExample = {
    size: 25,
    count: 5,
    color: "gray",
    activeColor: "orange",
    value: rating,
    a11y: true,
     isHalf: true,
    edit:false,
    onChange: (newValue) => {
      setRating(review);
    },
  };
 
  return (
    <div>
      <div class="mb-12 md:mb-0 border rounded p-2">
        <div class="flex justify-center mb-6">
          {photo ? (
            <img width="100px" alt="" className="rounded-full" src={photo} />
          ) : (
            <img
              width="100px"
              alt=""
              className="rounded-full"
              src="https://picsum.photos/200"
            />
          )}
        </div>
        <h5 class="text-lg font-bold mb-4">{userName}</h5>
        <h6 class="font-medium text-blue-600 mb-4">"{rev}"</h6>
        <h6 class="font-medium text-blue-600 mb-4">{rating}</h6>
        <div className="mx-auto w-full bg-slate-200">
          <div className='w-32 mx-auto'>
            <ReactStars {...secondExample} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;