import { Component, OnInit, Inject, Output, EventEmitter, ViewChild, SimpleChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClientsComponent } from '../clients.component';
import { Client } from 'src/app/models/client.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manageclient-dialog',
  templateUrl: './manageclient-dialog.component.html',
  styleUrls: ['./manageclient-dialog.component.scss']
})

export class ManageclientDialogComponent implements OnInit {

  @ViewChild('form', { static: false }) clientForm: NgForm;
  // Reactive forms!
  editForm: FormGroup;

  isViewClicked!: boolean;
  isEditClicked: boolean;
  isDeleteClicked: boolean;
  isNewClicked: boolean;
  isChanged: boolean;
  public clientData: Client;

  @Output() clientDetails = new EventEmitter<Client>();

  @Output()
  public deleteClient = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<ClientsComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData) { }

  ngOnInit() {
    this.isChanged = false;
    // Have to handle other cases
    this.isEditClicked = (this.dialogData.type === 'editClicked') ? true : false;
    this.isNewClicked = (this.dialogData.type === 'newClicked') ? true : false;
    this.isDeleteClicked = (this.dialogData.type === 'deleteClicked') ? true : false;
    this.isViewClicked = (this.dialogData.type === 'viewClicked') ? true : false;

    this.clientData = this.dialogData.data;
    console.log('this client : ' + JSON.stringify(this.clientData));

    if (this.isEditClicked) {
      this.editForm = new FormGroup({
        // if using nested controls, then use form group inside of this fromgroup.
        id: new FormControl(this.clientData.id, Validators.required),
        firstName: new FormControl(this.clientData.firstName, Validators.required),
        lastName: new FormControl(this.clientData.lastName, Validators.required),
        phoneNo: new FormControl(this.clientData.phoneNo, Validators.required),
        email: new FormControl(this.clientData.email, [Validators.required, Validators.email])
      });
    }
  }

  onSubmit() {
    if (this.isDeleteClicked) {
      this.dialogRef.close(this.clientData);
    } else {
      if (!this.clientForm.valid) {
        console.error('The form is invalid');
      } else {
        this.dialogRef.close(this.clientForm);
      }
    }

  }

  onEditAndSubmit() {
    if (!this.editForm.valid) {
      console.error('The form is invalid');
    } else {
      this.dialogRef.close(this.editForm);
    }
  }

  onCancelDialog(): void {
    this.dialogRef.close();
  }

}
