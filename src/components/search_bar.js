import { Button, Form, Col,Row } from 'react-bootstrap';
const SearchBar = () => (
    <Form>
        <Row>
            <Col xs="auto">
                <Form.Group className="mb-3" controlId="productName">
                    <Form.Control type="text" placeholder="Search for something" />
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
export default SearchBar;

