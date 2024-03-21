import React, { useState } from "react";

const AdvocatePhotoUpload = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "advocate");
    formData.append("cloud_name", "");

    fetch("https://api.cloudinary.com/v1_1/dpnehdjkx/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to upload image");
        }
        return res.json();
      })
      .then((data) => {
        // Handle successful upload
        console.log("Image uploaded successfully:", data);
        setImage(null); // Clear input field
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        // Handle upload error
        console.error("Error uploading image:", err);
        setError("Failed to upload image. Please try again.");
      });
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <input
        type="file"
        className="border rounded-lg px-4 py-2 my-4"
        onChange={(e) => setImage(e.target.files[0])}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleImageUpload}
        disabled={!image} // Disable button if no image selected
      >
        Upload
      </button>
    </div>
  );
};

export default AdvocatePhotoUpload;
