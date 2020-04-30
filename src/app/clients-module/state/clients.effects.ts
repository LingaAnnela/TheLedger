import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  mergeMap,
  map,
  exhaustMap,
  switchMap,
  catchError,
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
          .showManageClientDialogWithClosedRef({
            type: action.typeOfOperation,
            id: action.id,
            client: action.client,
          })
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
          map((res) => fromActions.saveClientApiSuccess()),
          catchError((error) => of(fromActions.saveClientApiFailed({ error })))
        )
      )
    )
  );
}
