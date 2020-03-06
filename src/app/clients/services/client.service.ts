import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ManageclientDialogComponent } from '../components/manageclient-dialog/manageclient-dialog.component';
import { Client } from 'src/app/models/client.model';

@Injectable()
export class ClientsService {
  manageClientDialog: MatDialogRef<ManageclientDialogComponent>;

  constructor(private dialog: MatDialog) {}

  showManageClientDialogWithClosedRef({
    type,
    id,
    client
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
      data: { data: client, type, id }
    });

    return this.manageClientDialog.afterClosed();
  }

  closeManageClientDialog() {
    this.manageClientDialog.close();
  }
}
