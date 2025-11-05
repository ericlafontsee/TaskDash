import { useAppDispatch, useAppSelector } from '../app/store';
import { toggleMode } from '../features/theme/themeSlice';
import { Button, Typography } from '@mui/material';

function ThemeToggle() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <Button variant="contained" color="secondary" onClick={() => dispatch(toggleMode())}>
      <Typography>Switch to {mode === 'light' ? 'dark' : 'light'} mode</Typography>
    </Button>
  );
}

export default ThemeToggle;
