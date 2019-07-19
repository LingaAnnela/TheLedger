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

  openDialog(data, height, width): void {
    const dialogRef = this.dialog.open(ManageclientDialogComponent, {
      height: (height) ? height : '400px',
      width: (width) ? width : '600px',
      data: (data) ? data : 'viewClicked'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  onNewClientAdd(){
    this.height = '400px';
    this.width = '600px';
    // Need to send the information as well.
    let data = 'newClicked';
    this.openDialog(data, this.height, this.width);
  }

  onEditClient() {
    this.height = '400px';
    this.width = '600px';
    // Need to send the information as well.
    let data = 'editClicked';
    this.openDialog(data, this.height, this.width);
  }

  onDeleteClient() {
    this.height = '400px';
    this.width = '400px';
    // Need to send the information as well.
    let data = 'deleteClicked';
    this.openDialog(data, this.height, this.width);
  }

}
