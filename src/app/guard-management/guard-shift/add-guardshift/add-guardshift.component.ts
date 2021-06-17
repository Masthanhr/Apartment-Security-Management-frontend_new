import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { GuardShift } from 'src/app/model/guardshift.model';
import { GuardService } from 'src/app/service/guard.service';

@Component({
  selector: 'createguardshift',
  template: `
  <body style="background-color:#C0C0C0">

  <div  class = "container" style="width:550px"> 
        <div style="text-align:center;">
          <h3><b>New GuardShift Registration</b></h3>
        </div>
    
        <form [formGroup]="newGuardShiftForm" autocomplete="on" novalidate (ngSubmit)="addGuardShift(newGuardShiftForm.value)">
  

        <div class="form-group" >
          <label for="userId">User Id:</label>
          <em *ngIf="newGuardShiftForm.controls.userId?.errors?.pattern">Negative userId not allowed</em>
          <em *ngIf="(newGuardShiftForm.controls.userId?.invalid) && (newGuardShiftForm.controls.userId?.touched)">Required</em>
              <input  id="userId" required [pattern] = "'^[1-9][0-9]*$'" type="number" class="form-control" formControlName="userId"  (ngModel)=guardShift.userId placeholder="Enter User Id..." />
        </div>
      
        <div class="form-group" >
          <label for="name">Name:</label>
          <em *ngIf="newGuardShiftForm.controls.name?.errors?.minlength">Enter Full Guard Number</em> 
          <em *ngIf="(newGuardShiftForm.controls.name?.invalid) && (newGuardShiftForm.controls.name?.touched)">Required</em>
              <input  id="name" required type="text" class="form-control" formControlName="name"  (ngModel)=guardShift.name placeholder="Enter Guard Name..." minlength="3"/>
        </div>
      
        <div class="form-group" >
          <label for="time">Time:</label>
          <em *ngIf="(newGuardShiftForm.controls.time?.invalid) && (newGuardShiftForm.controls.time?.touched)">Required</em>
              <input  id="time" required type="time"   class="form-control" formControlName="time"  (ngModel)=guardShift.time placeholder="Enter Time..." />
        </div>
      
        <div class="form-group" >
          <label for="date">date:</label>
        <em *ngIf="newGuardShiftForm.controls.date?.invalid && (newGuardShiftForm.controls.date?.touched)">Required</em>
        <input  id="date"  required type="date" class="form-control" formControlName="date" (ngModel)=guardShift.date placeholder="Enter date ..." />
      </div>
        <button type="submit"  (click)=" on_click()" [disabled]=newGuardShiftForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
      </form>
    </div>
  </body>`,
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
}
)
export class AddGuardShiftComponent {
  newGuardShiftForm: FormGroup;

  
  guardShift: GuardShift = new GuardShift(0,"","","");
  constructor(private router: Router, private guardService:  GuardService) {
  }

  addGuardShift(newGuardShift) {
    this.guardService.addGuardShift(newGuardShift).subscribe(guard => this.guardShift = guard);
    this.router.navigate(['/navbar/guard-management/GuardShift'])
    console.log(newGuardShift)
  }
  on_click()
  {
  alert('Added Successfully');
  }
  ngOnInit(){

    console.log("* create flat *")

    this.newGuardShiftForm = new FormGroup
    ({
          userId : new FormControl(),
          name : new FormControl(),
          time: new FormControl(),
          date: new FormControl(),
    });
    
  }

 

  cancel() {
    this.router.navigate(['/navbar/guard-management/GuardShift'])
  }

}