import React from 'react';
import  {useNavigate} from 'react-router-dom';

const File = () => {
    const navigate=useNavigate();
    const hancleClick=()=>{
        navigate("/ExtractedData");
    }
    return (
        <div>
            <div className='bullets'>
                <div className="red-circle"></div>&nbsp;Keys<br></br>
            </div>
            <div className='bullets'>
                <div className="blue-circle"></div>&nbsp;values<br>
                </br>
            </div>
            <div className='bullets'>
                <div className="green-circle"></div>&nbsp;Description
            </div>
            
            <div className='download'>
                <button type="button" class="btn btn-primary" onClick={hancleClick}> Extract data</button>
            </div>
        </div>
    );
}

export default File;