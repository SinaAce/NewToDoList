import { useEffect } from "react";
import { ThemeProvider, useTheme } from "../../Theme/Theme";
import TodoBody from "./TodoBody/TodoBody";
import TodoHeader from "./TodoHeader/TodoHeader";

const TodoList = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#334155" : "";
  }, [isDark]);

  return (
    <div className="container">
      <TodoHeader />
      <TodoBody />
    </div>
  );
};
export default TodoList;
