import React from "react";
import img from '../../Assets/Images/businesswoman-using-tablet-analysis-graph-company-finance-s-min.jpg';
import img4 from "../../Assets/Images/finance.png";
import img2 from "../../Assets/Images/rating.png";
import img5 from "../../Assets/Images/team.png";
import img3 from "../../Assets/Images/technical-support.png";

const BusinessStats = () => {
  return (
    <div className="container my-0 mt-0 px-6 mx-auto">
      <div className="mb-0 p-1 md:w-3/4 mx-auto">
        <h1 className="text-4xl font-bold text-center mx-auto text-primary my-6 border-b-4 border-black pb-1 font-mono md:w-1/2  w-5/6">
          Our Business Summary
        </h1>
      </div>
      <section className="mb-0 pt-8 text-gray-800 text-center h-full">
        <div
          className="overflow-auto bg-no-repeat bg-cover"
          style={{
            backgroundPosition: `${50}%`,
            backgroundImage: `url(${img})`,
            height: `${320}px`,
          }}
        >
        </div>
        <div className="container text-gray-800 px-4 md:px-12">
          <div
            className="block rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6"
            style={{
              marginTop: `${-100}px`,
              background: "hsla(0, 0, 100, 0.8)",
              backdropFilter: `blur(${30}px)`,
            }}
          >
            <div className="grid lg:gap-x-12 lg:grid-cols-4">
              <div className="mb-12 lg:mb-0">
                <div className="rounded-lg shadow-lg h-full block bg-white">
                  <div className="flex justify-center">
                    <div className="p-4 bg-slate-50 rounded-full shadow-lg inline-block -mt-8"><img src={img3} alt="" /></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">70000+</h3>
                    <h5 className="text-lg font-medium mb-4">Parts We Delivered</h5>
                    <p className="text-gray-500">
                      We delivered successfully 70000+ parts around the world to make your business in the next laval. 
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 lg:mb-0">
                <div className="rounded-lg shadow-lg h-full block bg-white">
                  <div className="flex justify-center">
                    <div className="p-4 bg-slate-50 rounded-full shadow-lg inline-block -mt-8">
                      <img src={img2} alt="" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">5000+</h3>
                    <h5 className="text-lg font-medium mb-4">Customer Reviews</h5>
                    <p className="text-gray-500">
                      We are happy to our client that they have given 700+ reviews. Thats a huge respect for us. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 lg:mb-0">
                <div className="rounded-lg shadow-lg h-full block bg-white">
                  <div className="flex justify-center">
                    <div className="p-4 bg-slate-50 rounded-full shadow-lg inline-block -mt-8">
                      <img src={img4} alt="" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">100M+</h3>
                    <h5 className="text-lg font-medium mb-4">Annual Revenue</h5>
                    <p className="text-gray-500">
                     We are successfully earned 100M+ annual revenue and also grow our service.
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="rounded-lg shadow-lg h-full block bg-white">
                  <div className="flex justify-center">
                    <div className="p-4 bg-slate-50 rounded-full shadow-lg inline-block -mt-8">
                      <img src={img5} alt="" />
                    
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-600 mb-4">1000+</h3>
                    <h5 className="text-lg font-medium mb-4">Clients</h5>
                    <p className="text-gray-500">
                      We delivered 10000+ clients around the earth. This the create the new era of time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessStats;
