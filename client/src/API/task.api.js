import axios from "axios";

const createTaskRequest = async (task) => {
  await axios.post("http://localhost:4000/task", task);
};

export default createTaskRequest;
