import "./App.css";
import Header from "./components/layouts/Header";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/Filters";
function App() {
  return <div>
    <Header/>
    <NewTask/>
    <TaskFilter/>
    <TaskList/>

  </div>;
}

export default App;
