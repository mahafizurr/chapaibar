import React, { useState, useEffect } from "react";
import { ref, listAll, deleteObject, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/Config";

const NoticePanel = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const storageRef = ref(storage, "images");
        const filesList = await listAll(storageRef);
        const filesArray = await Promise.all(
          filesList.items.map(async (item) => {
            const downloadURL = await getDownloadURL(item);
            return {
              name: item.name,
              url: downloadURL,
              ref: item, // Store the reference to the file
            };
          })
        );
        setFiles(filesArray.reverse()); // Display files in LIFO style
      } catch (error) {
        console.error("Error fetching files: ", error);
      }
    };

    fetchFiles();
  }, []);

  const handleDelete = async (file) => {
    try {
      await deleteObject(file.ref); // Delete the file from Firebase Storage
      // Filter out the deleted file from the files state
      setFiles(files.filter((f) => f.name !== file.name));
    } catch (error) {
      console.error("Error deleting file: ", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      {files.map((file) => (
        <div
          key={file.name}
          className="mb-4 md:flex md:items-center md:justify-between"
        >
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            <img
              src={file.url}
              alt={file.name}
              className="w-20 h-20 mr-2 mb-2 md:w-32 md:h-32 md:mr-4 inline-block cursor-pointer"
            />
          </a>
          <div className="md:flex md:flex-col md:flex-grow md:items-start md:ml-2">
            <span className="block">{file.name}</span>
            <button
              onClick={() => handleDelete(file)}
              className="mt-1 text-red-600 block md:inline-block"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticePanel;
