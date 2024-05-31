import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/Config";

const NoticeList = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const storageRef = ref(storage, "images");
        const filesList = await listAll(storageRef);
        const filesArray = await Promise.all(
          filesList.items.map(async (item) => {
            const downloadURL = await getDownloadURL(item);
            // Extract original file name (assuming format: originalname-id.extension)
            const originalName = item.name
              .replace(/-\w+\./, ".")
              .split("/")
              .pop();
            return {
              name: originalName,
              url: downloadURL,
            };
          })
        );
        setFiles(filesArray.reverse()); // Display files in LIFO style
      } catch (error) {
        setError("Error fetching files. Please try again later.");
        console.error("Error fetching files: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Notice List
      </h2>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {files.map((file) => (
          <div
            key={file.name}
            className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold truncate">{file.name}</h3>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              <img
                src={file.url}
                alt={file.name}
                className="w-full h-40 object-cover mt-2 rounded-md"
              />
            </a>
            <div className="mt-2 text-right">
              <a
                href={file.url}
                download={file.name}
                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
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
