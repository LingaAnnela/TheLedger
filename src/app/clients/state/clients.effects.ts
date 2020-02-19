import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, exhaustMap } from 'rxjs/operators';
import * as fromActions from '../state/clients.actions';
import { ClientsService } from '../services/client.service';

@Injectable()
export class ClientsEffects {
  constructor(private actions$: Actions, private service: ClientsService) {}

  openManageClientDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.openManageClientModal),
      exhaustMap(action =>
        this.service
          .showManageClientDialogWithClosedRef(
              { type: action.typeOfOperation, id: action.id, client: action.client })
          .pipe(map(() => fromActions.closeManageClientModal()))
      )
    )
  );
}
