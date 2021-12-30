import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Axios from '../Axios';
import { useNavigate } from 'react-router-dom';
const SearchBar = (props) => {
    const [productName,setProductName] = useState("");
    const nevigate = useNavigate();
    const handleSubmit = () => 
        Axios.get("/product/search", {params:{name:productName}})
        .then((response) => {props.handleSearchResult(response.data);});
    useEffect(() => handleSubmit(), []);
    const handleSetProductName = (e) => {
        setProductName(e.target.value);
    }
    return (
        <Form className='searchBar' onSubmit={(e) => {handleSubmit().then(() => nevigate("/"));e.preventDefault();}}>
            <Form.Group controlId="productName" onChange={handleSetProductName} style={{marginRight:"1vw"}} >
                <Form.Control type="text" placeholder="Search for something"/>
            </Form.Group>
            <Button type="submit" className='redColorBorder'>
                Search
            </Button>
        </Form>
    );
};
export default SearchBar;
