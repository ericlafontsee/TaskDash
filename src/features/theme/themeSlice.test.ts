import themeReducer, { toggleMode } from './themeSlice';

describe('themeSlice', () => {
  it('should toggle mode from light to dark', () => {
    const initialState = { mode: 'light' };
    const nextState = themeReducer(initialState, toggleMode());

    expect(nextState.mode).toBe('dark');
  });

  it('should toggle mode from dark to light', () => {
    const initialState = { mode: 'dark' };
    const nextState = themeReducer(initialState, toggleMode());

    expect(nextState.mode).toBe('light');
  });
});
