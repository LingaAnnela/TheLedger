import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { MatDialog } from '@angular/material';
import { ManageclientDialogComponent } from './manageclient-dialog/manageclient-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})

export class ClientsComponent implements OnInit {
  public clients: Client[];
  public height: string;
  public width: string;
  public thisClient: Client;

  constructor(public dialog: MatDialog) { }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {

    this.clients = [
      { id: '12345', firstName: 'Linga', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: '12345', firstName: 'Sruthi', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: '12345', firstName: 'Linga', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: '12345', firstName: 'Sruthi', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: '12345', firstName: 'Linga', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: '12345', firstName: 'Sruthi', lastName: 'Annela', email: 'alreddyashta.com', phoneNo: '987-987-1230' }
    ];

  }

  openDialog(data, type, height, width): void {
    const dialogRef = this.dialog.open(ManageclientDialogComponent, {
      height: (height) ? height : '400px',
      width: (width) ? width : '600px',
      data: { data, type }
    });

    // const sub = dialogRef.componentInstance.clientDetails.subscribe((res) => {
    //   console.log('The dialog was closed emitted value : '+res);
    // });
    dialogRef.afterClosed().subscribe((res) => {
      //sub.unsubscribe();
      console.log('The dialog was closed : ' + res);
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed : '+result);
    // });
  }

  onViewClient(data: Client) {
    this.height = '390px';
    this.width = '600px';
    // Need to send the information as well.
    const type = 'viewClicked';
    this.thisClient = data;
    this.openDialog(this.thisClient, type, this.height, this.width);
  }

  onAddClient() {
    this.height = '580px';
    this.width = '600px';
    // Need to send the information as well.
    const type = 'newClicked';
    this.openDialog(undefined, type, this.height, this.width);
  }

  onEditClient(data: Client) {
    this.height = '520px';
    this.width = '600px';
    // Need to send the information as well.
    const type = 'editClicked';
    this.thisClient = data;
    this.openDialog(this.thisClient, type, this.height, this.width);
  }

  onDeleteClient(data: Client) {
    this.height = '200px';
    this.width = '300px';
    // Need to send the information as well.
    const type = 'deleteClicked';
    this.thisClient = data;
    this.openDialog(this.thisClient, type, this.height, this.width);
  }

}
