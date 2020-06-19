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
  '[Clients] Client Saved Requested',
  props<{ client: Client }>()
);

export const saveClientApiSuccess = createAction(
  '[Clients] Save Client Api Succeeded',
  props<{ client: Client, request: any}>()
);

export const saveClientApiFailed = createAction(
  '[Clients] Save Client Api Failed',
  props<{ error: string }>()
);

export const updateClient = createAction(
  '[Clients] Update Client Requested',
  props<{ id: number; client: Client }>()
);
export const updateClientApiSuccess = createAction(
  '[Clients] Update Client Api Succeeded',
  props<{ client: Client, request: any}>()
);

export const updateClientApiFailed = createAction(
  '[Clients] Update Client Api Failed',
  props<{ error: string }>()
);

export const deleteClient = createAction(
  '[Clients] Client Deleted Requested',
  props<{ id: number }>()
);
export const deleteClientApiSuccess = createAction(
  '[Clients] Delete Client Api Succeeded',
  props<{ id: number }>()
);

export const deleteClientApiFailed = createAction(
  '[Clients] Delete Client Api Failed',
  props<{ error: string }>()
);

export const openManageClientModal = createAction(
  '[Clients] Manage Client Modal Opened',
  props<{ id: any; typeOfOperation: string; client?: Client }>()
);
export const closeManageClientModal = createAction(
  '[Clients] Manage Client Modal Closed'
);
