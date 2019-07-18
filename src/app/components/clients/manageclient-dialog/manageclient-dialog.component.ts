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


  constructor(
    public dialogRef: MatDialogRef<ClientsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
