import React, { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase/Config";

const NoticeUpload = () => {
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    // Reset success message when a new file is selected
    setSuccessMessage("");
  };

  const handleUpload = async () => {
    if (!file) return alert("File not selected");

    try {
      // Upload image to Firebase Storage
      const imageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(imageRef, file);
      // Set success message
      setSuccessMessage("File uploaded successfully!");
      // Reset file input
      setFile(null);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      />
      <button
        onClick={handleUpload}
        className="block w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
      >
        Upload Image
      </button>
      {successMessage && (
        <p className="text-green-500 mt-2">{successMessage}</p>
      )}
    </div>
  );
};

export default NoticeUpload;
