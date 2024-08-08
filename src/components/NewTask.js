import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../store";

const NewTask = () => {
  const dispatch = useDispatch();
  const newTaskInput = useRef("");
  const handleSubmit = e => {
    e.preventDefault();
    const text = newTaskInput.current.value;
    dispatch(taskActions.addTask(text))
    newTaskInput.current.value = "";
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form className="d-flex mb-4" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Enter a new task..."
              value={newTaskInput.current.value}
              ref={newTaskInput}
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

export default NewTask;
