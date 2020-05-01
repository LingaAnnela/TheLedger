import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../../state/chitfund.actions';

@Component({
  selector: 'app-chitfund-list',
  templateUrl: './chitfund-list.component.html',
  styleUrls: ['./chitfund-list.component.scss']
})
export class ChitfundListComponent implements OnInit {

  constructor(private store: Store<{}>, ) { }

  ngOnInit() {
    this.store.dispatch(fromActions.loadChitfundsOnInit());
  }

}
