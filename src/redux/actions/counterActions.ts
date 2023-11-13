// src/redux/actions/counterActions.ts
// This acts as a template...
export enum CounterActionTypes {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

interface IncrementAction {
  type: CounterActionTypes.INCREMENT;
}

interface DecrementAction {
  type: CounterActionTypes.DECREMENT;
}

export type CounterAction = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({
  type: CounterActionTypes.INCREMENT,
});

export const decrement = (): DecrementAction => ({
  type: CounterActionTypes.DECREMENT,
});
