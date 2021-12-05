import axios from "axios";
import { Button } from "react-bootstrap";
const LogoutButton = () => {
    const handleLogout = () => {
        axios.post("http://localhost:8080/auth/logout",null,{withCredentials: true})
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