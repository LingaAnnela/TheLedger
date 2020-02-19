import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { mockClients } from 'src/app/mock.data';
import * as fromSelectors from '../state/clients.selectors';
import * as fromActions from '../state/clients.actions';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  clientsSelector$ = this.store.select(fromSelectors.clientsSelector);
  public clients: Client[];

  constructor(private store: Store<{}>, public dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(fromActions.loadClients({ clients: mockClients }));
    const sub = this.clientsSelector$.subscribe(res => {
      this.clients = res;
    });
    this.subscriptions.push(sub);
  }

  onViewClient(data: Client, index) {
    this.store.dispatch(fromActions.openManageClientModal({ typeOfOperation: 'VIEW', id: index, client: data }));
  }

  onAddClient() {
    this.store.dispatch(fromActions.openManageClientModal({ typeOfOperation: 'NEW', id: 0 }));
  }

  onEditClient(data: Client, index) {
    this.store.dispatch(fromActions.openManageClientModal({ typeOfOperation: 'EDIT', id: index, client: data }));
  }

  onDeleteClient(data: Client, index) {
    this.store.dispatch(fromActions.openManageClientModal({ typeOfOperation: 'DELETE', id: index, client: data }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
