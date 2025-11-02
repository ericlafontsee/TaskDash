import { useAppDispatch, useAppSelector } from '../app/store';
import { toggleMode } from '../features/theme/themeSlice';

function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <button onClick={() => dispatch(toggleMode())}>
      Switch to {mode === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}

export default ThemeToggle;
