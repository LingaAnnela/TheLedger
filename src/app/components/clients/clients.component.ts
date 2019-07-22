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
  public clients : Client[];
  public height: string;
  public width: string;
  public thisClient: Client;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    this.clients = [
      {id: "12345", firstName: "Linga", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" },
      {id: "12345", firstName: "Sruthi", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" },
      {id: "12345", firstName: "Linga", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" },
      {id: "12345", firstName: "Sruthi", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" },
      {id: "12345", firstName: "Linga", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" },
      {id: "12345", firstName: "Sruthi", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" }
    ];

  }

  openDialog(data, type, height, width): void {
    const dialogRef = this.dialog.open(ManageclientDialogComponent, {
      height: (height) ? height : '400px',
      width: (width) ? width : '600px',
      data: {data, type}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  onViewClient(data:Client) {
    this.height = '450px';
    this.width = '600px';
    // Need to send the information as well.
    let type = 'viewClicked';
    this.thisClient = data;
    this.openDialog(this.thisClient, type, this.height, this.width);
  }

  onAddClient() {
    this.height = '450px';
    this.width = '600px';
    // Need to send the information as well.
    let type = 'newClicked';
    this.openDialog(undefined, type, this.height, this.width);
  }

  onEditClient(data:Client) {
    this.height = '400px';
    this.width = '600px';
    // Need to send the information as well.
    let type = 'editClicked';
    this.thisClient = data;
    this.openDialog(this.thisClient, type, this.height, this.width);
  }

  onDeleteClient(data:Client) {
    this.height = '400px';
    this.width = '400px';
    // Need to send the information as well.
    let type = 'deleteClicked';
    this.thisClient = data;
    this.openDialog(this.thisClient, type, this.height, this.width);
  }

}
