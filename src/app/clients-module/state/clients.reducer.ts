import { createReducer, Action, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Client } from 'src/app/models/client.model';
import * as fromActions from './clients.actions';

export const clientsFeatureKey = 'clients';

export interface State extends EntityState<Client> {
  // clients: Client[];
  isLoading: boolean;
  loaded: boolean;
  error: string;
}

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>();

// export const initialState: State = {
//   clients: [],
//   isLoading: false,
//   loaded: false,
//   error: null,
// };

export const initialState: State = adapter.getInitialState({
  // clients: [],
  isLoading: false,
  loaded: false,
  error: null,
});

const clientsReducer = createReducer(
  initialState,
  on(fromActions.loadClients, (state: State, { clients }) => ({
    ...state,
    clients,
    loaded: true,
  })),
  on(fromActions.loadClientsOnInitApiSuccess, (state: State, { clients }) => adapter.addAll(clients, state)),
  on(fromActions.saveClientApiSuccess, (state: State, { client }) => adapter.addOne(client, state)),
  on(fromActions.updateClientApiSuccess, (state: State, { client }) => adapter.upsertOne(client, state)),
  on(fromActions.deleteClientApiSuccess, (state: State, { id }) => adapter.removeOne(id, state)),
  /* on(fromActions.saveClient, (state: State, { client }) => {
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
  }) */
);

export function reducer(state: State | undefined, action: Action) {
  return clientsReducer(state, action);
}
