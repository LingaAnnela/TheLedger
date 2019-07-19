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

  constructor(
    public dialogRef: MatDialogRef<ClientsComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    // Have to handle other cases
    this.isEditClicked = (this.data == 'editClicked') ? true : false;
    this.isNewClicked = (this.data == 'newClicked') ? true : false;
    this.isDeleteClicked = (this.data == 'deleteClicked') ? true : false; 
    this.isViewClicked = (this.data == 'viewClicked') ? true : false; 
    
  }

  onCancelDialog(): void {
    this.dialogRef.close();
  }

}
