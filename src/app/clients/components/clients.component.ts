import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ManageclientDialogComponent } from './manageclient-dialog/manageclient-dialog.component';
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
  public height: string;
  public width: string;
  public thisClient: Client;
  public type: string;

  constructor(private store: Store<{}>, public dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(fromActions.loadClients({ clients: mockClients }));
    const sub = this.clientsSelector$.subscribe(res => {
      this.clients = res;
    });
    this.subscriptions.push(sub);
  }

  openDialog(data, type, height, width, index): void {
    const dialogRef = this.dialog.open(ManageclientDialogComponent, {
      height: height ? height : '400px',
      width: width ? width : '600px',
      data: { data, type }
    });

    const sub = dialogRef.afterClosed().subscribe(res => {
      if (res && type === 'viewClicked') {
      } else if (res && type === 'newClicked') {
        this.saveClient(res);
      } else if (res && type === 'editClicked') {
        this.editClient(res, index);
      } else if (res && type === 'deleteClicked') {
        this.deleteClient(index);
      }
    });

    this.subscriptions.push(sub);
  }

  saveClient(res) {
    let id = 0;
    if (this.clients.length !== 0) {
        id = this.clients[this.clients.length - 1].id;
      }
    const newClient = {
      id: id + 1,
      firstName: res.value.clientName.firstName,
      lastName: res.value.clientName.lastName,
      phoneNo: res.value.phoneNo,
      email: res.value.email
      };

    this.store.dispatch(fromActions.saveClient({ client: newClient}));
  }

  editClient(res, index) {
    const client: Client = {
      id: res.value.id,
      firstName: res.value.firstName,
      lastName: res.value.lastName,
      phoneNo: res.value.phoneNo,
      email: res.value.email
    };
    this.store.dispatch(fromActions.updateClient({ index, client}));
  }

  deleteClient(index) {
    this.store.dispatch(fromActions.deleteClient({ index }));
  }

  onViewClient(data: Client) {
    this.height = '390px';
    this.width = '600px';
    // Need to send the information as well.
    this.type = 'viewClicked';
    this.thisClient = data;
    this.openDialog(
      this.thisClient,
      this.type,
      this.height,
      this.width,
      undefined
    );
  }

  onAddClient() {
    this.height = '580px';
    this.width = '600px';
    // Need to send the information as well.
    this.type = 'newClicked';
    this.openDialog(undefined, this.type, this.height, this.width, undefined);
  }

  onEditClient(data: Client, index) {
    this.height = '520px';
    this.width = '600px';
    // Need to send the information as well.
    this.type = 'editClicked';
    this.thisClient = data;
    this.openDialog(this.thisClient, this.type, this.height, this.width, index);
  }

  onDeleteClient(data: Client, index) {
    this.height = '200px';
    this.width = '300px';
    // Need to send the information as well.
    this.type = 'deleteClicked';
    this.thisClient = data;
    this.openDialog(this.thisClient, this.type, this.height, this.width, index);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
