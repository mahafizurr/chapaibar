import React, { useState } from 'react';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    setImageUrl(data.url);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && <image src={imageUrl} alt="Uploaded Image" />}
    </div>
  );
}


export default ImageUpload;
