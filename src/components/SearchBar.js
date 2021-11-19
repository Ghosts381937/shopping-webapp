import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
const SearchBar = () => {
    const [productName,setProductName] = useState("");
    const handleSubmit = () => {
        console.log(productName);
    };
    const handleSetProductName = (e) => setProductName(e.target.value);
    return (
        <Form className='searchBar' onSubmit={handleSubmit}>
            <Form.Group controlId="productName" onChange={handleSetProductName}>
                <Form.Control type="text" placeholder="Search for something"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
};
export default SearchBar;

