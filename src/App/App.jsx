import { ThemeProvider, useTheme } from "./../Theme/Theme";
import TodoList from "../Components/TodoList/TodoList";
import "@fontsource/work-sans";

function App() {
  return (
    <ThemeProvider>
      <TodoList />
    </ThemeProvider>
  );
}

export default App;
