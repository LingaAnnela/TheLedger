import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromChitfunds from './chitfund.reducer';

const getChitfundsState = createFeatureSelector<fromChitfunds.State>(
    fromChitfunds.chitfundFeatureKey
);

export const clientsSelector = createSelector(
    getChitfundsState,
  state => state.chitfunds
);

/*
export const selectClientById = createSelector(
  clientsSelector,
  (state, props) => state.filter(c => c.id === props.id + 1) // Have to use id instead of index
);
*/
