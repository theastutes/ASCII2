import React, { useState } from "react";
import { auth, provider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// import { toast } from "react-hot-toast";

const Login = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await signInWithEmailAndPassword(auth, email, password).then(
  //         (response) => {
  //           console.log(response?.user);
  //         }
  //       );
  //       toast.success("Logged in successfully!");
  //       setEmail("");
  //       setPassword("");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider).then((response) => {
        localStorage.setItem("user", response.user);
        console.log(response.user);
      });
      //   toast.success("Logged in with Google successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  //   const handleCreateUser = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await createUserWithEmailAndPassword(auth, email, password).then(
  //         (response) => {
  //           console.log(response.user);
  //         }
  //       );
  //       toast.success("Account Created successfully!");
  //       setEmail("");
  //       setPassword("");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <div className="bg-gray-200 fixed left-0 right-0 top-0 bottom-0 p-2 flex  flex-col gap-4 items-center justify-center">
      <h2 className=" font-bold uppercase underline">ASCII-2.0</h2>
      {/* <form className="flex flex-col gap-4"> */}
      {/* <input
          className="p-2 border-[1px] border-black rounded-3xl text-sm"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          tabIndex={1}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              document.querySelector('input[type="password"]').focus();
            }
          }}
        /> */}
      {/* <input
          className="p-2 border-[1px] border-black rounded-3xl text-sm"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          tabIndex={2}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
        /> */}
      {/* <button
          onClick={handleLogin}
          className="bg-black border-[1px] border-black text-white pb-[5px] rounded-md text-sm font-semibold p-1 hover:bg-gray-400 active:bg-white hover:text-black hover:border-[1px] hover:border-black"
          type="submit"
        >
          AAYO
        </button> */}
      <button
        onClick={handleGoogleLogin}
        className="bg-red-500 border-[1px] border-red-500 text-white pb-[5px] rounded-md text-sm font-semibold p-1 hover:bg-red-400 active:bg-white hover:text-red-500 hover:border-[1px] hover:border-red-500"
        type="button"
      >
        Login with Google
      </button>
      {/* <button
          onClick={handleCreateUser}
          className="bg-black border-[1px] border-black text-white pb-[5px] rounded-md text-sm font-semibold p-1 hover:bg-gray-400 active:bg-white hover:text-black hover:border-[1px] hover:border-black"
          type="submit"
        >
          Create New Account
        </button> */}
      {/* </form> */}
    </div>
  );
};

export default Login;
