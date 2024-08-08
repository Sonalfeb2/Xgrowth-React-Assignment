import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const NewTodo = () => {

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form  className="d-flex mb-4">
            <Form.Control
              type="text"
              placeholder="Enter a new task..."
            />
            <Button type="submit" variant="primary" className="ml-2">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewTodo;
