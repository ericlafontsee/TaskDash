import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./app/theme";
import { useAppDispatch, useAppSelector } from "./app/store";
import { increment } from "./features/app/appSlice";
import ThemeToggle from "./components/ThemeToggle";
import LoginForm from "./components/LoginForm";

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.app.value);
  const mode = useAppSelector((state) => state.theme.mode);
  const theme = getTheme(mode as "light" | "dark");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <h1>Value: {value}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <ThemeToggle />
        <div>
          <h1>Login Demo</h1>
          <LoginForm />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
