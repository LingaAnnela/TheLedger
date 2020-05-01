import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  map,
  switchMap,
  catchError,
} from 'rxjs/operators';
import * as fromActions from './chitfund.actions';
import { of } from 'rxjs';
import { ChitfundService } from '../services/chitfund.service';

@Injectable()
export class ChitfundEffects {
  constructor(private actions$: Actions, private service: ChitfundService) {}

  onLoadChitfunds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadChitfundsOnInit),
      switchMap(() =>
        this.service.getChitfunds().pipe(
          // Save it to the store!!
          map((res) =>
            fromActions.loadChitfundsOnInitApiSuccess({
              chitfunds: res && res.chitfunds,
            })
          ),
          catchError((error) => of(fromActions.loadChitfundsOnInitApiFailed({ error })))
        )
      )
    )
  );
}
