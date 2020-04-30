import { createReducer, Action, on } from '@ngrx/store';
import { Client } from 'src/app/models/client.model';
import * as fromActions from './clients.actions';

export const clientsFeatureKey = 'clients';

export interface State {
  clients: Client[];
  isLoading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: State = {
  clients: [],
  isLoading: false,
  loaded: false,
  error: null,
};

const clientsReducer = createReducer(
  initialState,
  on(fromActions.loadClients, (state: State, { clients }) => ({
    ...state,
    clients,
    loaded: true,
  })),
  on(fromActions.loadClientsOnInitApiSuccess, (state: State, { clients }) => ({
    ...state,
    clients,
    loaded: true,
  })),
  on(fromActions.saveClient, (state: State, { client }) => {
    return {
      ...state,
      id: state.clients.length,
      clients: [...state.clients, client],
      loaded: true,
    };
  }),
  on(fromActions.updateClient, (state: State, { id, client }) => {
    const clientsCopy = Object.assign([], state.clients);
    clientsCopy[id] = client;
    return { ...state, clients: clientsCopy, loaded: true };
  }),
  on(fromActions.deleteClient, (state: State, { id }) => {
    const clientsCopy = Object.assign([], state.clients);
    clientsCopy.splice(id, 1);
    return { ...state, clients: clientsCopy, loaded: true };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return clientsReducer(state, action);
}
