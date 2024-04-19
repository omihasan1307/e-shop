'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import loginImg from '../../../public/login.jpg'
import Image from 'next/image';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");


    const submitHandler = async (e : any) => {
        e.preventDefault();
    
        // try {
        //   const response = await axios.post(
        //     `${API_BASE_URL}/auth/jwt/create/`,
        //     {
        //       username,
        //       password,
        //     }
        //   );
        //   if (response) {
        //     const token = response.data.access;
        //     localStorage.setItem("access_token", token);
        //     const decoded_token = jwt_decode(token);
        //     localStorage.setItem("user_id", decoded_token.user_id);
        //     localStorage.setItem("username", decoded_token.username);
        //     setMsg("");
   
        //   }
        // } catch (error) {
        //   console.error(error?.response?.data?.detail || error?.message);
        //   setMsg(error?.response?.data?.detail || error?.message);
        // }
      };

    return (

     <div>
      <div className="h-screen bg-gray-100 flex justify-center items-center">
        <div
          className=" flex bg-white h-96 w-8/12 sm:w-auto text-center  rounded-lg
         shadow-md"
        >
            <Image
             src={loginImg}
             className="w-72 hidden sm:block shadow-xl rounded-l-lg"
             alt='img'
             />
    
          <div className="content p-8 px-2 space-y-6 text-center">
            <h1 className="mt-10 mb-4 text-center font-bold text-lg text-sky-500 my-3">
              LOGIN
            </h1>
            {msg ? (
              <p className="bg-red-200 px-2 py-3 text-xs rounded-md">{msg}</p>
            ) : (
              ""
            )}
            <form action="" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className=" w-8/12 text-xs px-3 my-3 bg-gray-100  rounded-sm py-2 border-b-2 border-gray-200 pl-4 focus:border-2 focus:border-gray-200 transform focus:scale-105  duration-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className=" w-8/12 text-xs px-3 my-3 bg-gray-100  rounded-sm py-2 border-b-2 border-gray-200 pl-4 focus:border-2 focus:border-gray-200 transform focus:scale-105  duration-500"
              />
              <button
                type="submit"
                className="w-8/12 bg-sky-400 font-extralight text-sm rounded-md text-white py-2 px-2"
              >
                LOGIN
              </button>
            </form>
            <p className="text-xs">
              Don't have an account?
              <span className="text-sky-400 mx-1 ">
                <Link href="/auth/signup">Signup</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
   
    );
};

export default LoginPage;