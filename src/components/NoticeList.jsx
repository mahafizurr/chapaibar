import React, { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/Config";

const NoticeList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        // Get a reference to the images directory in Firebase Storage
        const storageRef = ref(storage, "images");

        // List all files in the images directory
        const listResult = await storageRef.listAll();

        // Iterate over each file in the directory
        const filePromises = listResult.items.map(async (item) => {
          // Get the download URL for each file
          const url = await getDownloadURL(item);
          // Encode the file name to ensure URL validity
          const fileName = encodeURIComponent(item.name);
          // Return an object containing the file's URL and name
          return { url, name: item.name, encodedName: fileName };
        });

        // Wait for all file URLs to be fetched
        const fileData = await Promise.all(filePromises);
        // Set the state with the file data
        setFiles(fileData);
      } catch (error) {
        console.error("Error fetching files: ", error);
      }
    };

    // Call the fetchFiles function when the component mounts
    fetchFiles();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Notices</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {files.map((file, index) => (
          <div key={index} className="relative">
            <img
              src={file.url}
              alt={file.name}
              className="w-full h-auto cursor-pointer"
              onClick={() => window.open(file.url, "_blank")}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 text-white p-2">
              <p className="truncate">{file.name}</p>
              <a
                href={file.url}
                download={file.encodedName} // Use the encoded file name for download
                className="text-blue-500 hover:underline"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeList;
