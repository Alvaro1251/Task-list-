import { Route, Routes } from "react-router-dom";
import TasksPage from "./components/Pages/TasksPage";
import TaskForm from "./components/Pages/TaskForm";
import NotFound from "./components/Pages/NotFound";
import Navbar from './components/body/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
