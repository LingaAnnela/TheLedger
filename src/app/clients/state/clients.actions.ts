import { createAction, props } from '@ngrx/store';
import { Client } from 'src/app/models/client.model';

export const loadClients = createAction(
  '[Clients] Mock Clients Loaded',
  props<{ clients: Client[] }>()
);

export const loadClientsOnInit = createAction(
  '[Clients] Clients loaded on Container Init'
);

export const loadClientsOnInitApiSuccess = createAction(
  '[Clients] Clients loaded on Container Init Api Success',
  props<{ clients: any[] }>()
);

export const loadClientsOnInitApiFailed = createAction(
  '[Clients] Clients loaded on Container Init Api Failer',
  props<{ error: string }>()
);

export const saveClient = createAction(
  '[Clients] Client Saved',
  props<{ client: Client }>()
);

export const saveClientApiSuccess = createAction(
  '[Clients] Client Api Success'
);

export const saveClientApiFailed = createAction(
  '[Clients] Client Api Failed',
  props<{ error: string }>()
);

export const updateClient = createAction(
  '[Clients] Client Updated',
  props<{ id: number; client: Client }>()
);
export const deleteClient = createAction(
  '[Clients] Client Deleted',
  props<{ id: number }>()
);
export const openManageClientModal = createAction(
  '[Clients] Manage Client Modal Opened',
  props<{ id: any; typeOfOperation: string; client?: Client }>()
);
export const closeManageClientModal = createAction(
  '[Clients] Manage Client Modal Closed'
);
