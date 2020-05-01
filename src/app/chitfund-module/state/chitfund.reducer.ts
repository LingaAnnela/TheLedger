import { createReducer, Action, on } from '@ngrx/store';
import * as fromActions from './chitfund.actions';

export const chitfundFeatureKey = 'chitfunds';

export interface State {
  chitfunds: any[];
  isLoading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: State = {
  chitfunds: [],
  isLoading: false,
  loaded: false,
  error: null,
};

const chitfundsReducer = createReducer(
  initialState,
  on(
    fromActions.loadChitfundsOnInitApiSuccess,
    (state: State, { chitfunds }) => ({
      ...state,
      chitfunds,
      loaded: true,
    })
  ),
  on(fromActions.loadChitfundsOnInitApiFailed, (state: State, { error }) => ({
    ...state,
    error,
    loaded: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return chitfundsReducer(state, action);
}
