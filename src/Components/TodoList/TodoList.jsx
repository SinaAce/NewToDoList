import { ThemeProvider } from "../Theme/Theme";
import TodoBody from "./TodoBody/TodoBody";
import TodoHeader from "./TodoHeader/TodoHeader";

 
const TodoList = () => {

  return (
    <ThemeProvider>
      <div className="container">
        <TodoHeader />
        <TodoBody />
      </div>
    </ThemeProvider>
  );
};
export default TodoList;
