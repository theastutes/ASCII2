import React from "react";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const PostUpload = () => {
  const [url, setUrl] = React.useState("");

  const handelPost = async (e) => {
    e.preventDefault();

    // get the file input element
    const fileInput = e.target.elements["post-image"];

    // check if a file is selected
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];

      try {
        // create a storage reference with a unique filename
        const storageRef = ref(storage, `images/${file.name}`);

        // upload the file to firebase cloud storage
        const snapshot = uploadBytes(storageRef, file);

        //get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef);

        // set the URL in the state
        setUrl(downloadURL);
        localStorage.setItem("url", downloadURL);
        console.log(downloadURL);
      } catch (error) {
        console.error("Error uploading image: ", error.message);
      }
    }
  };

  return (
    <div>
      <div className="bg-white px-4 py-2 rounded-lg border-[1px] border-gray-300 m-8">
        <form
          className="flex flex-row items-center justify-between gap-2 "
          action="submit"
          onSubmit={(e) => handelPost(e)}
        >
          <div className="flex flex-col gap-1">
            <input className="" type="file" name="post-image" />
            <input required={true} type="text" />
          </div>
          <button className="border-black border-[1px] px-4 h-16 rounded-xl bg-white/90 active:bg-white">
            Post
          </button>
        </form>
      </div>
      <div className="m-2 border-2 border-red-400 p-2">URL : {url}</div>
    </div>
  );
};

export default PostUpload;
