import React from "react";

const MyPortfolio = () => {
  return (
    <>
      <div className="mt-24 md:flex">
        <div className="avatar md:w-1/3 md:ml-11 ml-16  bg-white flex-col">
          <div className="md:w-4/5 w-3/5 bg-white rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto mt-6">
            <img
              className="mx-auto"
              src="https://i.ibb.co/6Rjt92g/MdRony.jpg"
              alt=""
            />
          </div>
          <div className="text-center w-2/4 md:ml-20 mx-auto mt-4">
            <p className=" text-2xl font-bold">Md. Rony</p>
            <p className=" text-lg text-blue-400">Software Engineer</p>
            <p className=" text-sm">Data Transformers Inc.</p>
          </div>
        </div>
        <div className="w-full bg-slate-100 flex-col p-5">
          <p>
            <a href="mailto:mdronyb313@gmail.com">
              Email: mdronyb313@gmail.com
            </a>
          </p>
          <p>
            {" "}
            <a href="tel:+8801792395386">Phone: 01792395386</a>
          </p>
          <p>Address: Mirpur-2, Dhaka-1216, Bangladesh</p>
          <p>
            Linked In:{" "}
            <a
              href="https://www.linkedin.com/in/md-rony-92bb62159/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/md-rony
            </a>
          </p>
          <p>
            Github:
            <a href="https://github.com/Md-RonyAhmed"> @github/Md.Rony</a>
          </p>
          <p>
            Objective:{" "}
            <small className="text-center text-sm">
              I'm an organized, punctual, honest and self-motivated employee,
              capable of time management and working under pressure in all
              environments. The biggest strength of mine is that I can
              effectively push myself to achieve my goals and learn new
              technology with in a short time.
            </small>
          </p>
          <p className="text-2xl underline text-blue-500">Personal Projects:</p>
          <p className=" text-xl">Barakah Product Stock Web Application</p>
          <ul>
            <li>
              Github Link Client:{" "}
              <a
                className="underline"
                href="https://github.com/Md-RonyAhmed/barakah-stock-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md-RonyAhmed/barakah-stock-client
              </a>
            </li>
            <li>
              Github Link Server:{" "}
              <a
                className="underline"
                href="https://github.com/Md-RonyAhmed/barakah-stock-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md-RonyAhmed/barakah-stock-server
              </a>
            </li>
            <li>
              Live Link:{" "}
              <a
                className="underline"
                href="https://barakah-stocks.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://barakah-stocks.web.app/
              </a>
            </li>
          </ul>
          <p className=" text-xl">TechTutor Service Provider Web Application</p>
          <ul>
            <li>
              Github Link:{" "}
              <a
                className="underline"
                href="https://github.com/Md-RonyAhmed/tech-tutor-react-firebase"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md-RonyAhmed/tech-tutor-react-firebase
              </a>
            </li>
            <li>
              Live Link:{" "}
              <a
                className="underline"
                href="https://tech-tutor-d11fb.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://tech-tutor-d11fb.web.app/
              </a>
            </li>
          </ul>
          <p className=" text-xl">Product Review Website</p>
          <ul>
            <li>
              Github Link:{" "}
              <a
                className="underline"
                href="https://github.com/Md-RonyAhmed/product-reviews-website-react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Md-RonyAhmed/product-reviews-website-react
              </a>
            </li>
            <li>
              Live Link:{" "}
              <a
                className="underline"
                href="https://review-site-react.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://review-site-react.netlify.app/
              </a>
            </li>
          </ul>
          <p className="flex-row md:flex gap-2">
            <img
              className="md:w-1/2 mt-2 w-full rounded-md"
              src="https://i.ibb.co/gZggvkF/exp.png"
              alt=""
            />
            <img
              className="md:w-1/2 mt-2 w-full rounded-md"
              src="https://i.ibb.co/7RWTcqx/skill.png"
              alt=""
            />
          </p>
          <p className="flex-row md:flex gap-2">
            <img
              className="md:w-1/2 w-full rounded-md mt-2"
              src="https://i.ibb.co/LPRXCJ9/edu.png"
              alt=""
            />
            <img
              className="md:w-1/2 w-full rounded-md mt-2"
              src="https://i.ibb.co/ZcDFG0Z/ref.png"
              alt=""
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default MyPortfolio;
