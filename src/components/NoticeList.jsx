import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/Config";

const NoticeList = () => {
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

  return (
    <div className="max-w-lg mx-auto p-6">
      {files.map((file) => (
        <div key={file.name}>
          <h3>
            <span className="block mt-4">{file.name}</span>
          </h3>
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            <img
              src={file.url}
              alt={file.name}
              className="w-20 h-20 mr-2 mb-2 md:w-32 md:h-32 md:mr-4 inline-block cursor-pointer"
            />
          </a>
          <div className="md:flex md:flex-col md:flex-grow md:items-start md:ml-2">
            <a
              href={file.url}
              download={file.name}
              className="mt-1 text-indigo-600 block md:inline-block"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoticeList;
