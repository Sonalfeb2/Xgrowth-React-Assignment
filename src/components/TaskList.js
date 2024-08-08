import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Container, Row, Col, Form, Button } from "react-bootstrap";
import { todoActions } from "../store";

const TaskList = () => {
  const tasks = useSelector(state => state.taskmanager.tasks);
  const dispatch = useDispatch();
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <ListGroup>
            {tasks.map(task =>
              <ListGroup.Item
                key={task.id}
                className="d-flex justify-content-between align-items-center"
              >
                <Form.Check
                  type="checkbox"
                  label={task.text}
                  checked={task.completed}
                  onChange={()=>dispatch(todoActions.completeTask(task.id))}
                />
                <Button variant="danger">Delete</Button>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;
