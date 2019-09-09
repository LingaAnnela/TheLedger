import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

export interface SubType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-chitfunds',
  templateUrl: './chitfunds.component.html',
  styleUrls: ['./chitfunds.component.scss']
})
export class ChitfundsComponent implements OnInit {

  criteriaForm: FormGroup;
  newCriteriaForm: FormGroup;
  ctx = {subType: 'Age'};
  subTypes: SubType[] = [
    {value: 'age', viewValue: 'Age'},
    {value: 'gender', viewValue: 'Gender'},
    {value: 'radius', viewValue: 'Radius'}
  ];

  checkoutForm: FormGroup;


  /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    debugger;
    this.checkoutForm.setControl(name, form);
    console.log(this.checkoutForm);
  }
  
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {

    this.checkoutForm = this.formBuilder.group({
      fullName: null
    });

    this.criteriaForm = this.formBuilder.group({
      'criteriaArr' : new FormArray([
        new FormGroup({
          'innCriteriaArr' : new FormArray([      
            new FormGroup({
              type  : new FormControl(null),
              subType : new FormControl(null)
            })
          ])
        })        
      ])
    }); 
    
    this.newCriteriaForm = this.formBuilder.group({
      'criteriaArr' : new FormArray([
        new FormGroup({
          type  : new FormControl(null),
          subType : new FormControl(null),
          subGroup : this.createAgeForm(),
        })
      ])
    }); 
  }

  createAgeForm() : FormGroup{
    return new FormGroup({
      'condition'  : new FormControl(null),
      'value' : new FormControl(null),
      'min' : new FormControl(null),
      'max' : new FormControl(null),
      'units' : new FormControl(null)
    });
  }

  onSubTypeChange(event, index) {
    console.log(event)
    this.ctx.subType = event.value;
   
    var control = <FormArray>this.criteriaForm.controls.criteriaArr    
    if(this.ctx.subType == 'Age'){
      let controlG = <FormGroup>control.controls[index]
      // controlG.addControl('subGroup',this.createAgeForm());
      
    }


  }

  get criteriaArr(){
    return  this.criteriaForm.get('criteriaArr') as FormArray;
  }

  get innerCriteriaArr(){
    // return  (<FormArray>this.criteriaForm.get('criteriaArr')).get('innCriteriaArr') as FormArray;
    return  (<FormArray>this.criteriaArr.get('innCriteriaArr')).controls;
  }

  // get innerCriteriaGrp(){
  //   return  (<FormArray>(<FormArray>this.criteriaForm.get('criteriaArr')).get('innCriteriaArr')).get('')
  //   // return  this.criteriaArr.get('innCriteriaArr') as FormArray;
  // }

  onCriteriaSubmit() {
    console.log(this.criteriaForm);
    console.log(this.newCriteriaForm);
    //this.criteriaForm.reset();
  }

}
