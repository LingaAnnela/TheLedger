import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClients from './clients.reducer';

const getClientsState = createFeatureSelector<fromClients.State>(fromClients.clientsFeatureKey);

export const clientsSelector = createSelector(
    getClientsState,
    state => state.clients
);

export const selectClientById = createSelector(
    clientsSelector,
    (state, props) => state.filter(c => c.id === props.id + 1) // Have to use id instead of index
);
