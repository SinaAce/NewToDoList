import { useReducer, useState } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";
import { useTheme } from "../../../Theme/Theme";
import {
  ActionHandler,
  initialState,
} from "../../ActionsHandler/ActionHandler";

const TodoBody = () => {
  // const [task, setTask] = useState([]);
  const { isDark } = useTheme();

  const [state, dispatch] = useReducer(ActionHandler, initialState);
  // const task = [
  //   { id: 1, name: "listen music", date: "12/11/2025", status: "important" },
  //   { id: 2, name: "read book", date: "1/7/2025", status: "normal" },
  //   { id: 3, name: "go biking", date: "2/14/2025", status: "event" },
  //   { id: 4, name: "study english", date: "12/1/2024", status: "important" },
  // ];
  const handleSubmit = (newTask) => {
    dispatch({ type: "add", payload: newTask });
  };
  return (
    <div
      className="body flexCenter"
      style={{
        background: isDark ? "#1e293b" : "#94a3b8",
      }}
    >
      <div
        className="bg-slate-400 w-11/12 h-5/6 shadow-2xl border-2 border-slate-500 flexCenterCol gap-5"
        style={{
          background: isDark ? "#475569" : "",
        }}
      >
        <AddTask whenSub={handleSubmit} />
        <Task task={state.task} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default TodoBody;
