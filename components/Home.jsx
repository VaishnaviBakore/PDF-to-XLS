import React, { useState } from 'react';
import CloudUploadRoundedIcon from '@mui/icons-material/CloudUploadRounded';
import '../styles.css';
import  {useNavigate} from 'react-router-dom';

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [err,setErr]=useState(false);
    const navigate=useNavigate();
    const handleFileUpload = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileSubmit = () => {
        if (selectedFile) {
        // Perform file upload logic here (e.g., send file to server)
            navigate("/File");
            console.log('Uploading file:', selectedFile);
        }else{
            setErr(true);
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
            {selectedFile ? null : (
              <label htmlFor="file" className="filelabel">
                Choose file
              </label>
            )}
            <div>{selectedFile && selectedFile.name}</div>

            </div>
            <br></br>
            <div><button type="button" class="btn btn-primary" onClick={handleFileSubmit}>upload</button></div>
            {err && <span>Please try selecting file again!</span>}
        </center>

      </div>  
      {/* <div className='download'>
        <button type="button" class="btn btn-primary"> Download Excel File</button>
      </div> */}
    </div>
    );
}

export default Home;