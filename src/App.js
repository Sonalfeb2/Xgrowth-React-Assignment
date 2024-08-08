import "./App.css";
import Header from "./components/layouts/Header";
import NewTodo from "./components/NewTodo";
import TaskList from "./components/TaskList";
function App() {
  return <div>
    <Header/>
    <NewTodo/>
    <TaskList/>
  </div>;
}

export default App;
