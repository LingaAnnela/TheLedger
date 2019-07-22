import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientsComponent } from '../clients.component';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-manageclient-dialog',
  templateUrl: './manageclient-dialog.component.html',
  styleUrls: ['./manageclient-dialog.component.scss']
})

export class ManageclientDialogComponent implements OnInit {
  isViewClicked: boolean;
  isEditClicked: boolean;
  isDeleteClicked: boolean;
  isNewClicked: boolean;
  public client: Client;

  constructor(
    public dialogRef: MatDialogRef<ClientsComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData) { }

  ngOnInit() {
    // Have to handle other cases
    this.isEditClicked = (this.dialogData.type === 'editClicked') ? true : false;
    this.isNewClicked = (this.dialogData.type === 'newClicked') ? true : false;
    this.isDeleteClicked = (this.dialogData.type === 'deleteClicked') ? true : false;
    this.isViewClicked = (this.dialogData.type === 'viewClicked') ? true : false;

    this.client = this.dialogData.data;
    console.log('this client : ' + JSON.stringify(this.client));
  }

  onCancelDialog(): void {
    this.dialogRef.close();
  }

}
