import {
  Component,
  OnInit,
  Inject,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Client } from 'src/app/models/client.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromSelectors from '../../state/clients.selectors';
import * as fromActions from '../../state/clients.actions';
import { Subscription } from 'rxjs';

export interface DialogData{
  data: any;
  type: string;
  id: any;
}
@Component({
  selector: 'app-manageclient-dialog',
  templateUrl: './manageclient-dialog.component.html',
  styleUrls: ['./manageclient-dialog.component.scss']
})
export class ManageclientDialogComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  @ViewChild('form', { static: false }) clientForm: NgForm;
  // Reactive forms!
  editForm: FormGroup;
  id: any = 0;
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
    private store: Store<{}>,
    public dialogRef: MatDialogRef<ManageclientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData
  ) {}

  ngOnInit() {
    this.isChanged = false;
    // Have to handle other cases
    this.id = this.dialogData.id;
    this.isEditClicked = this.dialogData.type === 'EDIT' ? true : false;
    this.isNewClicked = this.dialogData.type === 'NEW' ? true : false;
    this.isDeleteClicked = this.dialogData.type === 'DELETE' ? true : false;
    this.isViewClicked = this.dialogData.type === 'VIEW' ? true : false;
    const sub = this.store.select(fromSelectors.selectClientEntityById, { id: this.dialogData.id }).subscribe(res => {
      this.clientData = this.dialogData.data;
      if (this.isEditClicked) {
        this.editForm = new FormGroup({
          // if using nested controls, then use form group inside of this fromgroup.
          id: new FormControl(this.clientData.id, Validators.required),
          firstName: new FormControl(
            this.clientData.firstName,
            Validators.required
          ),
          lastName: new FormControl(
            this.clientData.lastName,
            Validators.required
          ),
          phoneNo: new FormControl(this.clientData.phoneNo, Validators.required),
          email: new FormControl(this.clientData.email, [
            Validators.required,
            Validators.email
          ])
        });
        // Could use set values or patch values.
      }
    });

    this.subscriptions.push(sub);
  }

  uploadFile(event: any) {
    const files: FileList = event.target.files;
    const file = files.item(0);
    console.log(file);
    // this.store$.dispatch(
    //   new fromFileUploadActions.UploadRequestAction({
    //     file
    //   })
    // );

    // clear the input form
    event.srcElement.value = null;
  }

  onSubmit() {
    if (this.isNewClicked) {
      const client: Client = {
        firstName: this.clientForm.value.clientName.firstName,
        lastName: this.clientForm.value.clientName.lastName,
        phoneNo: this.clientForm.value.phoneNo,
        email: this.clientForm.value.email
      };
      this.store.dispatch(
        fromActions.saveClient({ client })
      );
    } else if (this.isDeleteClicked){
      this.store.dispatch(fromActions.deleteClient({ id: this.dialogData.data.id }));
    }

    this.dialogRef.close();
  }

  onEditAndSubmit() {
    if (!this.editForm.valid) {
      console.error('The form is invalid');
    } else {
      this.store.dispatch(
        fromActions.updateClient({ id: this.dialogData.data.id, client: this.editForm.value })
      );
      this.dialogRef.close();
    }
  }

  onCancelDialog(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(){
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
