'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import signup from '../../../../public/signup.jpg'
import Image from 'next/image';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [close, setClose] = useState(true);

  
    const submitHandler = async (e:any) => {
      e.preventDefault();
  
    //   try {
    //     await axios.post(`${API_BASE_URL}/auth/users/`, {
    //       username,
    //       password,
    //       email,
    //     });
    //     setMsg("");
    //     navigate('/login')
    //   } catch (error) {
    //     console.log(error)
    //     const errResponse = error?.response?.data;
    //     if (errResponse) {
    //       const fields = Object.keys(errResponse);
    //       const field = fields[0];
    //       const errMsg = errResponse[field][0];
    //       setMsg(`${errMsg}`);
    //     } else {
    //       console.error(error.message);
    //       setMsg(error.message);
    //     }
    //   }
    };

    return (
        <div>
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <div
          className=" flex  bg-white h-96  rounded-lg
         shadow-md w-5/6 sm:w-2/6 md:w-2/6 lg:w-3/6"
        >
            <Image 
            src={signup}
            className="object-cover hidden lg:block w-72 shadow-xl rounded-l-lg"
            alt="signup"
            />
          {/* <img
            src={loginImg}
            className="object-cover hidden lg:block w-72 shadow-xl rounded-l-lg"
            alt=""
          /> */}
          <div className="content space-y-6 text-center">
            {msg && close ? (
              <div
                id="alert-4"
                className="flex p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium">{msg}</div>
                <button
                  onClick={() => setClose(false)}
                  type="button"
                  className="ml-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-yellow-300 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-4"
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            ) : (
              ""
            )}
            <h1 className="mt-10 mb-4 text-center font-bold text-lg text-sky-500">
              SIGNUP
            </h1>
            <form action="" onSubmit={submitHandler} className=" space-y-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=" w-8/12 text-xs px-3 bg-gray-100  rounded-sm py-2 border-b-2 border-gray-200 pl-4 focus:border-2 focus:border-gray-200 transform focus:scale-105  duration-500"
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
                className=" w-8/12 text-xs px-3 bg-gray-100  rounded-sm py-2 border-b-2 border-gray-200 pl-4 focus:border-2 focus:border-gray-200 transform focus:scale-105  duration-500"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className=" w-8/12 text-xs px-3 bg-gray-100  rounded-sm py-2 border-b-2 border-gray-200 pl-4 focus:border-2 focus:border-gray-200 transform focus:scale-105  duration-500"
              />
              <button
                type="submit"
                className="w-8/12 bg-sky-400 font-extralight text-sm rounded-md text-white py-2 px-2"
              >
                SIGNUP
              </button>
            </form>
            <p className="text-xs">
              Don't have an account?
              <span className="text-sky-400 mx-1">
                <Link href="/auth">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Signup;