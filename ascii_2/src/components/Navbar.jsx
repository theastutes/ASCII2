import React from "react";

const Navbar = () => {
  return (
    <div className=" z-40 w-full bg-white/60 backdrop-blur-3xl flex flex-row justify-evenly items-center py-2">
      <a className="w-full border-r-[1px] flex items-center justify-center border-black px-2 pb-1 hover:bg-blue-900 cursor-pointer">
        <i className="fa-sharp fa-solid fa-house"></i>
      </a>
      <a className="w-full border-r-[1px] flex items-center justify-center border-black px-2 pb-1 hover:bg-blue-900 cursor-pointer">
        <i className="fa-solid fa-compass"></i>
      </a>
      <a className="w-full border-r-[1px] flex items-center justify-center border-black px-2 pb-1 hover:bg-blue-900 cursor-pointer">
        <i className="fa-solid fa-user-group"></i>
      </a>
      <a className="w-full border-r-[1px] flex items-center justify-center border-black px-2 pb-1 hover:bg-blue-900 cursor-pointer">
        <i className="fa-solid fa-bookmark"></i>
      </a>
      <a className="w-full border-r-[1px] flex items-center justify-center border-black px-2 pb-1 hover:bg-blue-900 cursor-pointer">
        <i className="fa-solid fa-vials"></i>
      </a>
      <a className="w-full border-r-[1px] flex items-center justify-center border-black px-2 pb-1 hover:bg-blue-900 cursor-pointer">
        <i className="fa-solid fa-file"></i>
      </a>
    </div>
  );
};

export default Navbar;
