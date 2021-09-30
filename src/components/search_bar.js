import { Button, Form, Col,Row } from 'react-bootstrap';
import { useState } from 'react';
const SearchBar = () => {
    const [productName,setProductName] = useState("");
    const handleSubmit = () => {
        console.log(productName);
    };
    const handleSetProductName = (e) => setProductName(e.target.value);
    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs="7">
                    <Form.Group className="mb-3" controlId="productName" onChange={handleSetProductName}>
                        <Form.Control type="text" placeholder="Search for something"/>
                    </Form.Group>
                </Col>
                <Col xs="auto">
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};
export default SearchBar;

