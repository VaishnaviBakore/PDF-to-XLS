import React, { useState } from 'react';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import './styles.css';


const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileSubmit = () => {
    if (selectedFile) {
      // Perform file upload logic here (e.g., send file to server)
      console.log('Uploading file:', selectedFile);
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <div className='uploadFile'>
      <center>
        <div>
          <CloudUploadRoundedIcon className='image'/><br></br>
          <br></br>
          <input type='file' id='file' className="fileInp" onChange={handleFileUpload}/>
          <label htmlFor='file' className='filelabel'>
            Choose file
          </label>
          
        </div>
        <br></br>
        <div><button type="button" class="btn btn-primary" onClick={handleFileSubmit}>Upload</button></div>
        </center>
      </div>  
      <div className='download'>
        <button type="button" class="btn btn-primary"> Download Excel File</button>
      </div>
    </div>
  );
};

export default App;
