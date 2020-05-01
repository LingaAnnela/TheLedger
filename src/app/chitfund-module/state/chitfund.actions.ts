import { createAction, props } from '@ngrx/store';

export const loadChitfundsOnInit = createAction(
  '[ChitFund] Load Chitfunds on Init'
);

export const loadChitfundsOnInitApiSuccess = createAction(
  '[ChitFund] Load Chitfunds on Api Success',
  props<{ chitfunds: any[] }>()
);

export const loadChitfundsOnInitApiFailed = createAction(
  '[ChitFund] Load Chitfunds on Api Failure',
  props<{ error: string }>()
);
