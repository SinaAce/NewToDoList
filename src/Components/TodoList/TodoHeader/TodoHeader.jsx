import { useTheme } from "../../../Theme/Theme";

const TodoHeader = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <div
        className="header title"
        style={{
          color: isDark ? "#CBD5E1" : "#94a3b8",
          background: isDark ? "#0f172a" : "#475569",
        }}
      >
        To Do List
      </div>
      <button onClick={toggleTheme}>change theme</button>
    </>
  );
};

export default TodoHeader;
