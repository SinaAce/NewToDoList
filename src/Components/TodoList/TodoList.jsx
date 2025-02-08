import TodoBody from "./TodoBody/TodoBody";
import TodoHeader from "./TodoHeader/TodoHeader";

const TodoList = () => {
  return (
    <div className="container">
      <TodoHeader />
      <TodoBody />
    </div>
  );
};

export default TodoList;
