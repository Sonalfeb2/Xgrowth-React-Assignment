import "./App.css";
import Header from "./components/layouts/Header";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
function App() {
  return <div>
    <Header/>
    <NewTask/>
    <TaskList/>
  </div>;
}

export default App;
