import axios from "../Axios";
import { Button } from "react-bootstrap";
const LogoutButton = () => {
    const handleLogout = () => {
        axios.post("/auth/logout",null,{withCredentials: true})
        .then((response) => {
            alert(response.data);response.data === "Success!" ? window.location.replace("/") : window.location.reload()
            }
        )
    }
    return (
        <Button className='redColorNoBorder' onClick={handleLogout}>登出</Button>
    )
}
export default LogoutButton;