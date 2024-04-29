import React from "react";

const NoticeUp = () => {
  return (
    <div>
      <h1>Notice Upload</h1>
      <div>
        <input type="file" name="" />
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white px-8 py-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NoticeUp;
