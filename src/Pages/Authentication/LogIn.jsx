import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast} from "react-toastify";
import img from "../../Assets/Logo/logo.png";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";


const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
     const {
       register,
       formState: { errors },
       handleSubmit,
     } = useForm();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
    toast.success(`Log In Successfully`, {
      toastId: "success1",
    });
  }

  if (error) {
    errorElement = <p className="text-red-600">Error: {error?.message}</p>;
  }

   const onSubmit = (data) => {
     signInWithEmailAndPassword(data.email, data.password);
   };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Verification email sent!");
    } else {
      toast.warn("Please enter your email address");
    }
  };

  return (
    <div>
      <div className="h-full bg-slate-50 w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-2xl bg-transparent rounded lg:w-2/5  md:w-1/2 w-full h-auto p-10 mt-16"
          >
            <div className="flex items-center justify-center">
              <img
                className="mr-0"
                height="70px"
                width="70px"
                src={img}
                alt=""
              />
            </div>
            <p
              tabIndex="0"
              className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Login to your account
            </p>
            <p
              tabIndex="0"
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
            >
              Dont have account?{" "}
              <Link
                to="/signup"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
              >
                {" "}
                Sign up here
              </Link>
            </p>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="email"
                className="bg-gray-100 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3"
                placeholder="Enter your email"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="mt-0 w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type="password"
                  className="bg-gray-100 border rounded text-xs
                font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  placeholder="Enter your password"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                      fill="#71717A"
                    />
                  </svg>
                </div>
              </div>
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex justify-between items-center my-3">
              <div className="form-group form-check">
                <input
                  className="cursor-pointer mx-2"
                  type="checkbox"
                  name=""
                  defaultChecked
                />
                Remember me
              </div>
              <button
                onClick={resetPassword}
                className="text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
              >
                Forget password?
              </button>
            </div>
            <div className="mt-5">
              {errorElement}
              <button type="submit" className="btn btn-primary w-full">
                LOGIN
              </button>
            </div>
            <div class="divider">OR</div>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
