import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/storage";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const storageRef = firebase.storage().ref(`images/${file.name}`);
    const uploadTask = storageRef.put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress tracking (optional)
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle errors during upload
        console.error(error.message);
      },
      () => {
        // Upload complete, get the download URL
        storageRef.getDownloadURL().then((downloadURL) => {
          setUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
};

export default FileUpload;
