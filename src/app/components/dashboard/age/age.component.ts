import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit, OnChanges {
  @Input() criteriaForm : FormGroup;


  get criteriaArr() {
    return (this.criteriaArr.get('criteriaArr') as FormArray).controls
  }
  


  @Output() formReady = new EventEmitter<FormGroup>()
  billingForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.billingForm = this.fb.group({
      cardNumber: null,
      cvv: null,
      expirationMonth: null,
      exporationYear: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.billingForm);
  }

  ngOnChanges(){
    // this.control = <FormArray>this.criteriaForm.controls.criteriaArr    
    // this.controlG = <FormGroup>this.control.controls[this.index]
  }

  validate(){
    this.formReady.emit(this.billingForm);
  }

}
