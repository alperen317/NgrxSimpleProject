import * as fromActions from './counter.actions';

describe('Counter actions', () => {
  it('Action Icrement', () => {
    const action = new fromActions.Increment();
    expect({ ...action }).toEqual({ type: fromActions.ActionTypes.Increment });
  });
  it('Action Decrement', () => {
    const action = new fromActions.Decrement();
    expect({ ...action }).toEqual({ type: fromActions.ActionTypes.Decrement });
  });
  it('Action Reset', () => {
    const action = new fromActions.Reset();
    expect({ ...action }).toEqual({ type: fromActions.ActionTypes.Reset });
  });
});

