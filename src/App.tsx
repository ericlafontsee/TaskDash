import { useAppDispatch, useAppSelector } from './app/store';
import { increment } from './features/app/appSlice';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.app.value);

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <ThemeToggle />
    </div>
  );
}

export default App;
