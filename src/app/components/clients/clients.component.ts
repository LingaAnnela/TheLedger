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

  openDialog(): void {
    const dialogRef = this.dialog.open(ManageclientDialogComponent, {
      height: '400px',
      width: '600px',
      data: {id: "12345", firstName: "Linga", lastName: "Annela", email : "alreddy@ashta.com", phoneNo: "987-987-1230" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
