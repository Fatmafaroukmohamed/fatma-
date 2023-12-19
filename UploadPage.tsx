import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';



const UploadPage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    // Your upload logic here
    if (selectedFile) {
      console.log(`Uploading file: ${selectedFile.name}`);
      // You can perform further actions like sending the file to a server.
    } else {
      console.log('Please select a file to upload.');
    }
  };

  return (
    
    <div style={{ position: 'relative' }}>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                      type="submit"
                      onClick={handleUpload}
                    >
                      <FontAwesomeIcon icon={faUpload} /> Upload
                    </button>
    </div>

  );
 
};

export default UploadPage;





