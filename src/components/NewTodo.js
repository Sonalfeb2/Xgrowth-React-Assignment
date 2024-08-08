import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useRef } from 'react';
const NewTodo = () => {
 const newTodoInput = useRef("");
 const handleSubmit = (e) =>{
    e.preventDefault();

    console.log(newTodoInput.current.value)
    newTodoInput.current.value= ""
 }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form  className="d-flex mb-4" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Enter a new task..."
              value={newTodoInput.current.value}
              ref={newTodoInput}
              required
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
