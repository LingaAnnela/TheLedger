import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() index;

  constructor() { }

  ngOnInit() {
    console.log('INDEX : ', this.index);
  }

  get criteriaArr(){
    return (this.parentForm.get("criteriaArr") as FormArray).controls
  }
  
  get subGroup(){
    return (this.parentForm.get("criteriaArr") as FormArray).get("subGroup") as FormGroup
  }

}
