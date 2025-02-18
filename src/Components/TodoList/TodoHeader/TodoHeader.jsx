import { useTheme } from "../../Theme/Theme";

const TodoHeader = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <div
        className="header title text-slate-400"
        style={{
          color: isDark ? "#ffffff" : "#ccc ",
          background: isDark ? "black" : "#475569",
        }}
      >
        To Do List
      </div>
      <button onClick={toggleTheme}>change theme</button>
    </>
  );
};

export default TodoHeader;
