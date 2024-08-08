import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Container, Row, Col ,Form, Button} from "react-bootstrap";

const TaskList = () => {
  const tasks = useSelector(state => state.taskmanager.tasks);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <ListGroup>
            {tasks.map(task =>
              <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
                <Form.Check
                  type="checkbox"
                  label={task.text}
                />
                <Button
                  variant="danger"
                >
                  Delete
                </Button>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;
