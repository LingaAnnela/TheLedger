import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';


export interface SubType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  clinicalSearchForm: FormGroup;
  criteriaForm: FormGroup;
  subGroup: any;
  ageForm: FormGroup;
  ctx = {subType: 'Age'};
  form: FormGroup;

  subTypes: SubType[] = [
    {value: 'age', viewValue: 'Age'},
    {value: 'gender', viewValue: 'Gender'},
    {value: 'radius', viewValue: 'Radius'}
  ];


  constructor(private formBuilder : FormBuilder) { }
 

  ngOnInit() {

    this.criteriaForm = this.formBuilder.group({
      'criteriaArr' : new FormArray([        
        new FormGroup({
          type  : new FormControl(null),
          subType : new FormControl(null),
          subGroup : this.createAgeForm(),
          // 'units' : new FormControl(null)
        })
      ])
    });

    // this.form = new FormGroup({
    //   optionA: new FormControl(false),
    //   optionB: new FormControl(false)
    // });

    // this.form.get('optionB').valueChanges.subscribe(checked => {
    //   if (checked) {
    //     const validators = [Validators.required, Validators.minLength(5)];
    //     this.form.addControl('optionBExtra', new FormControl('', validators));
    //   } else {
    //     this.form.removeControl('optionBExtra');
    //   }
    //   this.form.updateValueAndValidity();
    // });



    this.clinicalSearchForm = new FormGroup({
      'patientDetailsArr' : new FormArray([        
          new FormGroup({
            'andOr'  : new FormControl(null),
            'minAge' : new FormControl(null),
            'maxAge' : new FormControl(null),
            'gender' : new FormControl(null)
          })
        ]),
        'labTestAndOricdCode' : new FormControl('and'),
        'labTestArr' : new FormArray([      
          new FormGroup({
            'andOr'  : new FormControl(null),
            'labTestLookup' : new FormControl(null),
            'condition' : new FormControl(null),
            'value' : new FormControl(null),
            'units' : new FormControl(null),
            'fasting' : new FormControl(null)
          })
        ]),
        'patientAndOrLabTest' : new FormControl('and'),
        'icdCodeArr' : new FormArray([      
          new FormGroup({
            'andOr'  : new FormControl(null),
            'condition' : new FormControl(null),
            'icdCodePartI' : new FormControl(null),
            'icdCodePartII' : new FormControl(null),
            'icdCodeSet' : new FormControl(null)
          })
        ])
    });
  }

   
  onSubTypeChange(event, index) {
    console.log(event)
    this.ctx.subType = event.value;
  
    // this.criteriaForm.controls.criteriaArr.controls[0].controls.subType.valueChanges.subscribe(checked => {
    //   console.log('optionBExtra');
    //   if (checked) {
    //     const validators = [Validators.required, Validators.minLength(5)];
    //     this.form.addControl('optionBExtra', new FormControl('', validators));
    //   } else {
    //     this.form.removeControl('optionBExtra');
    //   }
    //   this.form.updateValueAndValidity();
    // });

 


    var control = <FormArray>this.criteriaForm.controls.criteriaArr    
    if(this.ctx.subType == 'Age'){
      let controlG = <FormGroup>control.controls[index]
      controlG.addControl('subGroup',this.createAgeForm());
      // controlG.addControl('condition',new FormControl(null));
      // controlG.addControl('value',new FormControl(null));
      // controlG.addControl('min',new FormControl(null));
      // controlG.addControl('max',new FormControl(null));
      // controlG.addControl('units',new FormControl(null));
      // this.subGroup = controlG.controls.subGroup
      //this.criteriaForm.addControl('subGroup', new FormGroup(this.createAgeForm());
      //control.push(this.createAgeForm());
    }


  }

  // get optionB() {
  //   return this.form.get('optionB') as FormControl;
  // }

  // get optionBExtra() {
  //   return this.form.get('optionBExtra') as FormControl;
  // }

  createAgeForm() : FormGroup{
    return new FormGroup({
      'condition'  : new FormControl(null),
      'value' : new FormControl(null),
      'min' : new FormControl(null),
      'max' : new FormControl(null),
      'units' : new FormControl(null)
    });
  }

  
  validateMaxAge(index) {
    if(this.clinicalSearchForm.get('patientDetailsArr').value[index].minAge) {
      if(this.clinicalSearchForm.get('patientDetailsArr').value[index].minAge > this.clinicalSearchForm.get('patientDetailsArr').value[index].maxAge) {
        alert('Max age is less the Min age');
      }
    }
  }

  onAddPatientDettails() {
    console.log('onAddPatientDettails');
    let patientDet = new FormGroup({
      'andOr'  : new FormControl(null),
      'minAge' : new FormControl(null),
      'maxAge' : new FormControl(null),
      'gender' : new FormControl(null)
    });
    (<FormArray>this.clinicalSearchForm.get('patientDetailsArr')).push(patientDet);

  }

  onRemovePatientDettails(index) {
    console.log('onRemovePatientDettails' +index);
    (<FormArray>this.clinicalSearchForm.get('patientDetailsArr')).removeAt(index);
  }

  onAddLabTest() {
    console.log('onAddLabTest');
    let labTest = new FormGroup({
      'andOr'  : new FormControl(null),
      'labTestLookup' : new FormControl(null),
      'condition' : new FormControl(null),
      'value' : new FormControl(null),
      'units' : new FormControl(null),
      'fasting' : new FormControl(null)
    });
    (<FormArray>this.clinicalSearchForm.get('labTestArr')).push(labTest);
  }

  onRemoveLabTest(index) {
    console.log('onRemoveLabTest' +index);
    (<FormArray>this.clinicalSearchForm.get('labTestArr')).removeAt(index);
  }

  onAddIcdCode() {
    console.log('onAddIcdCode');
    let icdCode = new FormGroup({
      'andOr'  : new FormControl(null),
      'condition' : new FormControl(null),
      'icdCodePartI' : new FormControl(null),
      'icdCodePartII' : new FormControl(null),
      'icdCodeSet' : new FormControl(null)
    });
    (<FormArray>this.clinicalSearchForm.get('icdCodeArr')).push(icdCode);
  }

  onRemoveIcdCode(index) {
    console.log('onRemoveIcdCode' +index);
    (<FormArray>this.clinicalSearchForm.get('icdCodeArr')).removeAt(index);
  }

  onSubmit() {
    console.log(this.clinicalSearchForm);
    this.clinicalSearchForm.reset();
  }

  onCriteriaSubmit() {
    console.log(this.criteriaForm);
    //this.criteriaForm.reset();
  }

}
