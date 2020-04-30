import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ManageclientDialogComponent } from '../components/manageclient-dialog/manageclient-dialog.component';
import { Client } from 'src/app/models/client.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientsService {
  private clients: any;
  private clientsUpdated = new Subject<any[]>();

  manageClientDialog: MatDialogRef<ManageclientDialogComponent>;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  showManageClientDialogWithClosedRef({
    type,
    id,
    client,
  }: {
    type: string;
    id: any;
    client: Client;
  }) {
    let height = '';
    let width = '';

    if (type === 'NEW') {
      height = '580px';
      width = '600px';
    } else if (type === 'EDIT') {
      height = '520px';
      width = '600px';
    } else if (type === 'DELETE') {
      height = '200px';
      width = '300px';
    } else if (type === 'VIEW') {
      height = '390px';
      width = '600px';
    }

    this.manageClientDialog = this.dialog.open(ManageclientDialogComponent, {
      height,
      width,
      data: { data: client, type, id },
    });

    return this.manageClientDialog.afterClosed();
  }

  closeManageClientDialog() {
    this.manageClientDialog.close();
  }

  getClients() {
    return this.http.get<{ count: any; clients: Client[] }>(
      'http://localhost:3000/api/clients'
    );
  }

  /* getClients() {
    this.http.get('http://localhost:3000/api/clients').subscribe((res) => {
      if (res) {
        this.clients =  res;
        console.log(res);
        this.clientsUpdated.next([res]);
      }
    });
  } */

  getClientsUpdatedListener() {
    return this.clientsUpdated.asObservable();
  }

  saveClient(client: any) {
    return this.http.post('http://localhost:3000/api/clients', client);
  }
}
