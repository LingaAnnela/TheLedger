import { createAction, props } from '@ngrx/store';
import { Client } from 'src/app/models/client.model';

export const loadClients = createAction(
  '[Clients] Mock Clients Loaded',
  props<{ clients: Client[] }>()
);
export const saveClient = createAction(
  '[Clients] Client Saved',
  props<{ client: Client }>()
);
export const updateClient = createAction(
    '[Clients] Client Updated',
    props<{ index: number, client: Client }>()
);
export const deleteClient = createAction(
    '[Clients] Client Deleted',
    props<{ index: number }>()
);
