import React, { useEffect, useState } from "react";
import { imageDb } from "./Config";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { v4 } from "uuid";

function FirebaseImageList() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imgs = await listAll(ref(imageDb, "files"));

        const fetchedFiles = [];

        for (const val of imgs.items) {
          const url = await getDownloadURL(val);
          fetchedFiles.push({
            id: v4(),
            name: val.name,
            url: url,
            uploadDate: new Date().toLocaleString(),
          });
        }

        setFiles(fetchedFiles.reverse()); // Reverse the array to show the latest at the top
        setLoading(false);
      } catch (error) {
        console.error("Error fetching files:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const downloadImage = (url, name) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
  };

  return (
    <div className="container">
      <div className="w-full max-w-screen-lg mx-auto mt-8 mb-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">
                  Upload Date
                </th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Download</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {file.uploadDate}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                  <p className="mt-2">{file.name}</p>
                    <img
                      src={file.url}
                      alt={file.name}
                      onClick={() => downloadImage(file.url, file.name)}
                      className="max-w-full h-auto"
                      style={{ maxWidth: "150px" }} // Adjust the max width as needed
                    />
                     {/* Display File Name */}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => downloadImage(file.url, file.name)}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default FirebaseImageList;
