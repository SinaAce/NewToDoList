import { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";

const TodoBody = () => {
  const [task, setTask] = useState([]);
  // const task = [
  //   { id: 1, name: "listen music", date: "12/11/2025", status: "important" },
  //   { id: 2, name: "read book", date: "1/7/2025", status: "normal" },
  //   { id: 3, name: "go biking", date: "2/14/2025", status: "event" },
  //   { id: 4, name: "study english", date: "12/1/2024", status: "important" },
  // ];
  console.log(task);
  const handleSubmit = (newTask) => {
    setTask((pervius) => [...pervius, newTask]);
  };
  return (
    <div className="body flexCenter">
      <div className="bg-slate-400 w-11/12 h-5/6 shadow-2xl border-2 border-slate-500 flexCenterCol gap-5">
        <AddTask whenSub={handleSubmit} />
        <Task task={task} />
      </div>
    </div>
  );
};

export default TodoBody;
