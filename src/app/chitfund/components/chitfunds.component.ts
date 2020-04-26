import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { chitDetails } from '../mock.data';

export interface SubType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-chitfunds',
  templateUrl: './chitfunds.component.html',
  styleUrls: ['./chitfunds.component.scss']
})
export class ChitfundsComponent {

  chitDetails = chitDetails;

}
