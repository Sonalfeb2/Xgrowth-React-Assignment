import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Container, Form, Button } from "react-bootstrap";
import { taskActions } from "../store";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => {
    const { tasks, filter } = state.taskmanager;
    if (filter === "active") {
      return tasks.filter(list => list.completed === false);
    } else if (filter === "completed") {
      return tasks.filter(list => list.completed === true);
    } else {
      return tasks;
    }
  }); ///Filtering All task with respective options
  const handleChange = (e, id) => {
    const message = e.target.checked
      ? "Marked Completed"
      : "Marked Incompleted";
    dispatch(taskActions.completeTask(id));
    dispatch(taskActions.showNotification(message));
    setTimeout(() => dispatch(taskActions.hideNotification()), 2000);
  };
  const handleDelete = id => {
    dispatch(taskActions.deleteTask(id));
    dispatch(taskActions.showNotification("Deleted Successfully"));
    setTimeout(() => dispatch(taskActions.hideNotification()), 2000);
  };
  return (
    <Container>
      {tasks.length === 0
        ? <p>No Task Present....</p> ///If no task present in the list
        : <ListGroup>
            {tasks.map(task =>
              <ListGroup.Item
                key={task.id}
                className="d-flex justify-content-between align-items-center"
              >
                <Form.Check
                  type="checkbox"
                  label={task.text}
                  checked={task.completed}
                  onChange={e => handleChange(e, task.id)}
                />
                <Button variant="danger" onClick={() => handleDelete(task.id)}>
                  Delete
                </Button>
              </ListGroup.Item>
            )}
          </ListGroup>}
    </Container>
  );
};

export default TaskList;
