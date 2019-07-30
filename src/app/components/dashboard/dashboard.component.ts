import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  clinicalSearchForm: FormGroup;

  constructor() { }

  ngOnInit() {
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

}
