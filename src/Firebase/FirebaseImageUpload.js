import React, { useEffect, useState } from "react";
import { imageDb } from "./Config";
import { getDownloadURL, listAll, ref, uploadBytes, deleteObject } from "firebase/storage";
import { v4 } from "uuid";
import { Link } from "react-router-dom";

function FirebaseImageUpload() {
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState(""); // State to store the title
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
              title: title, // Store the title
            },
            ...prevFiles,
          ]);
        });
      });
    }
  };

  const handleDelete = async (id, name) => {
    try {
      await deleteObject(ref(imageDb, `files/${name}`));
      setFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    } catch (error) {
      console.error("Error deleting file:", error.message);
    }
  };

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
            title: "", // Initialize title as empty
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
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
        className="mb-4 px-4 py-2 border border-gray-300 rounded-md"
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
                <th className="border border-gray-300 px-4 py-2">Title</th> {/* Add title column */}
                <th className="border border-gray-300 px-4 py-2">Actions</th> {/* Add actions column */}
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
                  <td className="border border-gray-300 px-4 py-2">
                    {file.title}
                  </td> {/* Display title */}
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDelete(file.id, file.name)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td> {/* Add delete button */}
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
