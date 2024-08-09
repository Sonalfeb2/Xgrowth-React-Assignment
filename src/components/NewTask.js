import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../store";

const NewTask = () => {
  const dispatch = useDispatch();
  const [isError, setError] = useState(false);
  const newTaskInput = useRef("");
  const inputValidation = /[a-zA-Z0-9]+/;
  const handleSubmit = e => {
    e.preventDefault();
    const text = newTaskInput.current.value;
    if (!inputValidation.test(text)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 6000);
      return;
    }
    dispatch(taskActions.addTask(text));
    newTaskInput.current.value = "";
  };
  return (
    <Container className="mb-4">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Form className="d-flex  needs-validation " onSubmit={handleSubmit} noValidate>
            <Form.Control
              className = {"rounded-0 " + (isError ? 'border-danger' : '')}
              type="text"
              placeholder="Enter a new task..."
              value={newTaskInput.current.value}
              ref={newTaskInput}
            />
            <Button type="submit" variant="primary" className="ml-2 rounded-0">
              Add
            </Button>
          </Form>
        </Col>
      </Row>
      <div className={isError?'d-block text-danger text-center mb-1':'d-none'}>
        Task should have alteast one character or number.
      </div>
    </Container>
  );
};

export default NewTask;
