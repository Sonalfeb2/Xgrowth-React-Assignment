import "./App.css";
import Header from "./components/layouts/Header";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/Filters";
import Message from "./components/Message";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
function App() {
  const showMessage = useSelector(state => state.taskmanager.showMessage);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Header />
          <NewTask />
          {showMessage && <Message />}
          <TaskFilter />
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
