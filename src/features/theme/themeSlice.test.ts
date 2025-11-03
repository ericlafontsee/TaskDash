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

  it('should return the same state for unknown actions', () => {
    const state = { mode: 'light' };
    const nextState = themeReducer(state, { type: 'unknown' });

    expect(nextState.mode).toEqual(state.mode);
  });
});
