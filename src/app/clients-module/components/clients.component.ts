import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ClientsService } from '../services/client.service';
import { Client } from '../../models/client.model';
import * as fromSelectors from '../state/clients.selectors';
import * as fromActions from '../state/clients.actions';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  clientsSelector$ = this.store.pipe(select(fromSelectors.selectClientsArr));
  public clients: Client[];

  constructor(
    private store: Store<{}>,
    public dialog: MatDialog,
    private clientSvc: ClientsService
  ) {}

  ngOnInit() {
    // this.store.dispatch(fromActions.loadClients({ clients: mockClients }));
    this.store.dispatch(fromActions.loadClientsOnInit());
    const sub = this.clientsSelector$.subscribe((res) => {
      this.clients = res;
    });
    this.subscriptions.push(sub);
    /* this.clientSvc.getClients();
    this.clientSvc.getClientsUpdatedListener().subscribe((res) => {
      console.log(res);
    }); */
  }

  onViewClient(data: Client, index) {
    this.store.dispatch(
      fromActions.openManageClientModal({
        typeOfOperation: 'VIEW',
        id: index,
        client: data,
      })
    );
  }

  onAddClient() {
    this.store.dispatch(
      fromActions.openManageClientModal({ typeOfOperation: 'NEW', id: 0 })
    );
  }

  onEditClient(data: Client, index) {
    this.store.dispatch(
      fromActions.openManageClientModal({
        typeOfOperation: 'EDIT',
        id: index,
        client: data,
      })
    );
  }

  onDeleteClient(data: Client, index) {
    this.store.dispatch(
      fromActions.openManageClientModal({
        typeOfOperation: 'DELETE',
        id: index,
        client: data,
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
