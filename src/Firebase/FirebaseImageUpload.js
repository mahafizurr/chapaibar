import React, { useEffect, useState } from "react";
import { imageDb } from "./Config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

function FirebaseImageUpload() {
  const [img, setImg] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    if (img !== null) {
      const fileName = img.name; // Get the original file name
      const uploadDate = new Date().toLocaleString(); // Get the current upload date

      const imgRef = ref(imageDb, `files/${v4()}`);

      // Upload the file
      uploadBytes(imgRef, img).then((value) => {
        console.log(value);
        getDownloadURL(value.ref).then((url) => {
          setFiles((prevFiles) => [
            {
              id: v4(),
              name: fileName,
              url: url,
              uploadDate: uploadDate,
            },
            ...prevFiles,
          ]);
        });
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const imgs = await listAll(ref(imageDb, "files"));
        console.log(imgs);

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

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 shadow-lg rounded-md">
      <input
        type="file"
        onChange={(e) => setImg(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Upload
      </button>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">
                  Upload Date
                </th>
                <th className="border border-gray-300 px-4 py-2">File Name</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {file.uploadDate}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      to={file.url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {file.name}
                    </Link>
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

export default FirebaseImageUpload;
