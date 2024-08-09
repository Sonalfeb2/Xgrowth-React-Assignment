import { Container, Form, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../store";
function TaskFilter() {
  const isEmpty = useSelector(state => state.taskmanager.tasks);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(taskActions.filterTask(e));
  };
  return (
    <Container>
      <Row className="justify-content-md-center mb-4">
        <Col xs={2}>
          {isEmpty.length !== 0 &&
            <Form.Select onChange={e => handleChange(e.target.value)}>
              <option value="all">All</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </Form.Select>}
        </Col>
      </Row>
    </Container>
  );
}

export default TaskFilter;
