import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReviewDetails from "./ReviewDetails";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
  const url = `http://localhost:5000/reviews`;
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      if (!data?.success) {
        setReviews([]);
        return toast.error(data.error);
      }
      setReviews(data?.data);
    })();
  }, [url,reviews]);
  return (
    <div id="reviews" class="container my-24 px-6 mx-auto">
      <section class="mb-32 text-gray-800 text-center">
        <div className="mb-6 p-1 md:w-3/6 mx-auto">
          <h1 className="text-4xl font-bold text-center mx-auto text-primary my-6 border-b-4 border-black pb-1 font-mono md:w-1/2  w-5/6">
            Reviews ({reviews.length})
          </h1>
        </div>
        <div class="grid md:grid-cols-3 gap-x-6 gap-y-6 lg:gap-x-12">
          {reviews?.map((review) => (
            <ReviewDetails key={review._id} setRating={setReviews} review={review}></ReviewDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
