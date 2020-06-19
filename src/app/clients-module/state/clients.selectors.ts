import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClients from './clients.reducer';
import { Client } from 'src/app/models/client.model';

const getClientsState = createFeatureSelector<fromClients.State>(
  fromClients.clientsFeatureKey
);

export const { selectAll, selectEntities, selectIds, selectTotal } = fromClients.adapter.getSelectors();

// export const clientsSelector = createSelector(
//   getClientsState,
//   state => state.clients
// );

export const selectClientsEntities = createSelector(
  getClientsState,
  state => state.entities
);

export const selectClientsArr = createSelector(
  selectClientsEntities,
  entities => entities && Object.keys(entities).map(id => entities[id])
);

export const selectClientEntityById = createSelector(
  selectClientsEntities,
  (entities: {[key: string]: Client}, props: {id: string}) => entities[props.id] // Have to use id instead of index
);

// export const selectClientById = createSelector(
//   clientsSelector,
//   (state, props) => state.filter(c => c.id === props.id + 1) // Have to use id instead of index
// );
