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
  public type: string;

  constructor(public dialog: MatDialog) { }

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {

    const data = [
      { id: 1, firstName: 'Linga', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: 2, firstName: 'Sruthi', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: 3, firstName: 'Linga', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: 4, firstName: 'Sruthi', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: 5, firstName: 'Linga', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' },
      { id: 6, firstName: 'Sruthi', lastName: 'Annela', email: 'alreddy@ashta.com', phoneNo: '987-987-1230' }
    ];
    let availClients = localStorage.getItem('clients');

    if(!availClients){
      localStorage.setItem('clients', JSON.stringify(data));
    } else {
      console.log('LocalStorage : '+JSON.parse(availClients));
    }

    this.clients = JSON.parse(localStorage.getItem('clients'));
 
  }

  openDialog(data, type, height, width, index): void {
    const dialogRef = this.dialog.open(ManageclientDialogComponent, {
      height: (height) ? height : '400px',
      width: (width) ? width : '600px',
      data: { data, type }
    });

    // const sub = dialogRef.componentInstance.clientDetails.subscribe((res) => {
    //   console.log('The dialog was closed emitted value : '+res);
    // });

    dialogRef.afterClosed().subscribe((res) => {
      console.log('The dialog was closed : ' + type);
      console.log('The dialog was closed res: ' + res);

      if(res && type == "viewClicked"){
        console.log(type);
      } else if(res && type == "newClicked") {
        this.saveClient(res);
      } else if(res && type == "editClicked") {
        this.editClient(res, index);
      } else if(res && type == "deleteClicked") {
        this.deleteClient(index);
      }

    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed : '+result);
    // });
  }

  saveClient(res) {
    let id = 1;
    if(this.clients) {
      id = this.clients[this.clients.length - 1].id;
      let newClient = {
        'id' : id+1,
        'firstName' : res.value.clientName.firstName,
        'lastName' : res.value.clientName.lastName,
        'phoneNo' : res.value.phoneNo,
        'email' : res.value.email
      }
      this.clients.push(newClient);
      localStorage.setItem('clients', JSON.stringify(this.clients));
    }
  } 

  editClient(res, index) {
    let id = 1;
    this.clients = this.clients.map(val => {
      if(val.id == res.value.id){
        return {
          'id' : res.value.id,
          'firstName' : res.value.firstName,
          'lastName' : res.value.lastName,
          'phoneNo' : res.value.phoneNo,
          'email' : res.value.email
        };
      } else {
        return val;
      }
    });
    if(this.clients) {
      localStorage.setItem('clients', JSON.stringify(this.clients));
    }
  }

  deleteClient(index) {
    this.clients.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(this.clients));
  }

  onViewClient(data: Client) {
    this.height = '390px';
    this.width = '600px';
    // Need to send the information as well.
    this.type = 'viewClicked';
    this.thisClient = data;
    this.openDialog(this.thisClient, this.type, this.height, this.width, undefined);
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

}
