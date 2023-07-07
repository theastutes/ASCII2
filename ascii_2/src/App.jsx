import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import PostUpload from "./components/PostUpload";
import Login from "./components/Login";
import { auth } from "./firebase";
import Post from "./components/Post";

const App = () => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, []);

  return (
    <div className=" min-h-fit bg-gray-100 ">
      {user ? (
        <>
          <PostUpload />

          <div className="overflow-y-scroll">
            <Post />
          </div>

          <div className="fixed bottom-0 w-full">
            <Navbar />
          </div>
          <button
            className="absolute bottom-10 ml-[42%] mr-[49%] bg-black text-white px-4 pb-1 rounded-lg active:bg-gray-500 active:text-black"
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
