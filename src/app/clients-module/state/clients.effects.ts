import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  mergeMap,
  map,
  exhaustMap,
  switchMap,
  catchError,
  tap,
} from 'rxjs/operators';
import * as fromActions from './clients.actions';
import { ClientsService } from '../services/client.service';
import { of } from 'rxjs';

@Injectable()
export class ClientsEffects {
  constructor(private actions$: Actions, private service: ClientsService) {}

  openManageClientDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.openManageClientModal),
      exhaustMap((action) =>
        this.service
          .showManageClientDialogWithClosedRef(
            action.typeOfOperation,
            action.id,
            action.client,
          )
          .pipe(map(() => fromActions.closeManageClientModal()))
      )
    )
  );

  onLoadClients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadClientsOnInit),
      switchMap(() =>
        this.service.getClients().pipe(
          // Save it to the store!!
          map((res) =>
            fromActions.loadClientsOnInitApiSuccess({
              clients: res && res.clients,
            })
          ),
          catchError((error) => of(fromActions.saveClientApiFailed({ error })))
        )
      )
    )
  );

  onSaveClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.saveClient),
      switchMap((action) =>
        this.service.saveClient(action.client).pipe(
          // Save it to the store!!
          // tap(() => console.log(res)),
          map(({client, request }) => fromActions.saveClientApiSuccess({
            client,
            request
          })),
          catchError((error) => of(fromActions.saveClientApiFailed({ error })))
        )
      )
    )
  );

  onUpdateClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateClient),
      switchMap((action) =>
        this.service.updateClient(action.id, action.client).pipe(
          // Save it to the store!!
          // tap(() => console.log(res)),
          map(({client, request }) => fromActions.updateClientApiSuccess({
            client,
            request
          })),
          catchError((error) => of(fromActions.saveClientApiFailed({ error })))
        )
      )
    )
  );

  onDeleteClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteClient),
      switchMap((action) =>
        this.service.deleteClient(action.id).pipe(
          // Save it to the store!!
          map((res) => fromActions.deleteClientApiSuccess( { id: action.id })),
          catchError((error) => of(fromActions.saveClientApiFailed({ error })))
        )
      )
    )
  );
}
