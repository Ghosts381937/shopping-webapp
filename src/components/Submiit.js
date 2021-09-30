import { useState } from "react";
const Subnit = () => {
    const [myImg,setImage] = useState({});
    const handleSetImage = (e) => {
        let image_as_url = URL.createObjectURL(e.target.files[0]);
        let image_as_file = e.target.files[0];
        setImage({"image_preview":image_as_url,"image_file":image_as_file});
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
            <input type="submit" value="Submit"/>
        </div>
    );
}
export default Subnit;