import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Container, Form, Button } from "react-bootstrap";
import { taskActions } from "../store";

const TaskList = () => {
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
  const dispatch = useDispatch();
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
                  onChange={() => {
                    dispatch(taskActions.completeTask(task.id));
                    dispatch(
                      taskActions.showNotification("Marked Completed")
                    );
                    setTimeout(
                      () => dispatch(taskActions.hideNotification()),
                      2000
                    );
                  }}
                />
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(taskActions.deleteTask(task.id));
                    dispatch(
                      taskActions.showNotification("Deleted Successfully")
                    );
                    setTimeout(
                      () => dispatch(taskActions.hideNotification()),
                      2000
                    );
                  }}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            )}
          </ListGroup>}
    </Container>
  );
};

export default TaskList;
