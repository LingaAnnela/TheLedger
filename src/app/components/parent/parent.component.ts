import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';


export interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  parentForm: FormGroup;
  ctx = {subType: ''};
  types: Type[] = [
    {value: 'demographics', viewValue: 'Demographics'},
    // {value: 'gender', viewValue: 'Gender'},
    {value: 'demographics', viewValue: 'Demographics'}
  ];
  subTypes: Type[] = [
    {value: 'age', viewValue: 'Age'},
    // {value: 'gender', viewValue: 'Gender'},
    {value: 'radius', viewValue: 'Radius'}
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.parentForm = this.formBuilder.group({
      'criteriaArr' : new FormArray([
        this.basicForm()        
      ])
    });
  }

  basicForm(): FormGroup{
    return new FormGroup({
      type  : new FormControl(null),
      subType : new FormControl(null)        
    }) 
  }

  addCriteria(){
    this.ctx.subType = '';
    (this.parentForm.get("criteriaArr") as FormArray).push(this.basicForm())
    console.log(this.parentForm);
  }

  selectedSubType (index = 0) {
    return ((this.parentForm.get("criteriaArr") as FormArray).controls[index] as FormGroup).get("subType").value;
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

  createRadiusForm() : FormGroup{
    return new FormGroup({
      'condition'  : new FormControl(null),
      'radius' : new FormControl(null),
      'min' : new FormControl(null),
      'max' : new FormControl(null),
      'units' : new FormControl(null)
    });
  }

  createGenderForm() : FormGroup{
    return new FormGroup({
      'male'  : new FormControl(null),
      'female' : new FormControl(null)
    });
  }

  get criteriaArr(){
    return (this.parentForm.get("criteriaArr") as FormArray).controls
  }

  set subGroup(subGroup : FormGroup){
      //(this.parentForm.get("criteriaArr") as FormArray).set("subGroup")
  }

  onSubTypeChange(event, index) {
    console.log(event)
    this.ctx.subType = event.value;
   
    // var control = <FormArray>this.parentForm.controls.criteriaArr    
    // let controlG = (<FormGroup>control.controls[index]).valueChanges

    var innerGroup: FormGroup = ((this.parentForm.get("criteriaArr") as FormArray).controls[index] as FormGroup);
    if(innerGroup.get("subGroup")){
      innerGroup.removeControl("subGroup");
    }
    
    if(this.ctx.subType == 'Age'){
      innerGroup.addControl("subGroup", this.createAgeForm())
    } else if(this.ctx.subType == 'Gender'){
      innerGroup.addControl("subGroup", this.createGenderForm())      
    } else if(this.ctx.subType == 'Radius'){
      innerGroup.addControl("subGroup", this.createRadiusForm())      
    }

    

  }

  onSubmit(){
    console.log(this.parentForm);
  }

}
