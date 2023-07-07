import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import React, { useEffect } from "react";

const Post = () => {
  const [u, setU] = React.useState("");
  useEffect(() => {
    setU(() => {
      return localStorage.getItem("url");
    });
    console.log(u);
  }, []);

  return (
    <div className="w-[95%] absolute top-60 left-4 bg-white rounded-md border-[1px] border-gray-400">
      <div className="top-bar w-full flex flex-row justify-between px-6 p-4 items-center">
        <div className="flex flex-row gap-2 items-center">
          <i className="fa-solid fa-user text-4xl bg-gray-500 p-2 "></i>
          <div className="flex flex-col ">
            <p className="text-sm font-semibold">JavaScript</p>
            <p className="text-sm text-gray-500">2,000 Followers</p>
            <p className="text-sm text-gray-500">4h ago.</p>
          </div>
        </div>
        <h1 className="font-bold mb-3 text-gray-500">...</h1>
      </div>
      <img
        className="max-h-[600px] w-[100%] object-contain"
        src={`${() => {
          return localStorage.getItem("url");
        }}`}
        alt="POst-Image-Here!!"
      />
      <div className="bottom-bar">
        {/* <div className="flex flex-row justify-between px-3 py-4">
          <FavoriteBorderOutlinedIcon />
          <p className="text-xs">7 comments . 6 reposts</p>
        </div> */}
        <hr />
        <div className=" flex flex-row justify-between items-center p-4 py-7">
          <FavoriteBorderOutlinedIcon />
          <CommentIcon />
          <SendIcon />
          <BookmarkBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
