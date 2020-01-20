import * as fromActions from './counter.actions';
import * as fromReducer from './counter.reducer';

describe('Counter reducer', () => {
  const { initialState } = fromReducer;

  it('should return the default state', () => {
    const action = {} as any;
    const state = fromReducer.counterReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should increment counter', () => {
    const action = new fromActions.Increment();
    let state = fromReducer.initialState;
    state = fromReducer.counterReducer(undefined, action);
    expect(state).toBe(1);
  });
  it('should increment counter', () => {
    const action = new fromActions.Decrement();
    let state = 5;
    state = fromReducer.counterReducer(state, action);
    expect(state).toBe(4);
  });
  it('should increment counter', () => {
    const action = new fromActions.Reset();
    let state = 5;
    state = fromReducer.counterReducer(state, action);
    expect(state).toBe(0);
  });
});

