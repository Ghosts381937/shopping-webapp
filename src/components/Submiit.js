import { useState } from "react";
import axios from "./Axios";
const Subnit = () => {
    const [myImg,setImage] = useState({});
    const handleSetImage = (e) => {
        let image_as_url = URL.createObjectURL(e.target.files[0]);
        let image_as_file = e.target.files[0];
        setImage({"image_preview":image_as_url,"image_file":image_as_file});
    }
    const handleUploadImage = () => {
        let formData = new FormData();
        formData.append("file",myImg.image_file);
        axios.post("/upload",formData,{
            headers: {
              "Content-Type": "multipart/form-data"
            }
        });
    } 
    return (
        <div>
            {/* image preview */}
            <img src={myImg.image_preview} alt="preview"/>

            {/* image input field */}
            <input
                type="file"
                onChange={handleSetImage}
            />
            <label>Upload file</label>
            <input type="submit" value="Submit" onClick={handleUploadImage}/>
        </div>
    );
}
export default Subnit;