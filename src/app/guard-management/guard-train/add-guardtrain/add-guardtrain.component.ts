import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { IGuard } from 'src/app/model/guardtrain.model';
import { GuardService } from 'src/app/service/guard.service';

@Component({
  selector: 'createguardtrain',
  template: `
  <body style="background-color:#C0C0C0">
  <div  class = "container" style="width:550px"> 
        <div style="text-align:center;">
          <h3><b>New GuardTraining Registration</b></h3>
        </div>
    
        <form #newGuardForm="ngForm" autocomplete="on" novalidate (ngSubmit)="addGuardTrain(newGuardForm.value)">


        <div class="form-group" >
          <label for="userId">User Id:</label>
          <input  id="userId" type="number" required  [pattern] = "'^[1-9][0-9]*$'" onkeypress="return !(event.charCode == 46)" class="form-control" name="userId"   [(ngModel)]=userId placeholder="Enter user Id" #idd="ngModel">
          <div *ngIf="idd.invalid && (idd.dirty || idd.touched)"
        class="alert">
        <em *ngIf="idd.errors?.required">
        id is required.
        </em>
        <em *ngIf="idd.errors?.pattern">Id Cant be negative
        </em>
         </div>
      </div>
    
      <div class="form-group" >
    
      <label for="name">Name:</label>
      <input  id="name" type="text" required minlength="4" class="form-control" name="name"  [(ngModel)]=name placeholder="Enter Guard Name" #dname="ngModel">
      <div *ngIf="dname.invalid && (dname.dirty ||dname.touched)"
      class="alert">
      <em *ngIf="dname.errors?.required">
      Name is required.
    </em>
    <em *ngIf="dname.errors?.minlength">
    Guard Name must be at least 4 characters long.
    </em>
    </div>
    </div>
    
    <div class="form-group" >
    
    <label for="date">Date:</label>
    <input  id="date" type="date" required class="form-control" name="date"  [(ngModel)]=date placeholder="Enter Date" #ddate="ngModel">
    <div *ngIf="ddate.invalid && (ddate.dirty ||ddate.touched)"
    class="alert">
    <em *ngIf="ddate.errors?.required">
    Date is required.
    </em>
    </div>
    </div>
    
    <div class="form-group">
      <label for="mobileNo"><h6>Mobile Number:</h6></label>
      <input type="text" class="form-control" name="mobileNo" pattern="[0-9]{10}" [(ngModel)]=mobileNo placeholder="Enter Phone Number" id="mobileNo" required maxlength="10" #dmobileNo="ngModel">
      <div *ngIf="dmobileNo.invalid && (dmobileNo.dirty ||dmobileNo.touched)"
    class="alert">
    <em *ngIf="dmobileNo.errors?.required">
    Phone number is required.
    </em>
    <em *ngIf="dmobileNo.errors?.pattern">Phone No should be 10 di 
    </em>
    </div>
    
    </div>
    
    <div class="form-group">
      <label for="status"><h6>Status:</h6></label>
      <input type="text" class="form-control" name="status" [(ngModel)]=status placeholder="Enter Status" id="status" required #dstatus="ngModel">
      <div *ngIf="dstatus.invalid && (dstatus.dirty ||dstatus.touched)"
    class="alert">
    <em *ngIf="dstatus.errors?.required">
    Status is required.
    </em>
    </div>
    
    </div>
    
    
    <div class="form-group">
      <label for="timeing"><h6>Time:</h6></label>
      <input type="time" class="form-control" name="timeing" pattern="[0-9]{10}" [(ngModel)]=timeing placeholder="Enter timeing" id="timeing" required #dtimeing="ngModel">
      <div *ngIf="dtimeing.invalid && (dtimeing.dirty ||dtimeing.touched)"
    class="alert">
    <em *ngIf="dtimeing.errors?.required">
    time is required.
    </em>
    </div>
    </div>
    

        
        <button type="submit"  (click)="on_click()" [disabled]=newGuardTrainForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
  <div>
  </div>
  </div>
  </body>`,
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
}
)
export class AddGuardTrainComponent implements OnInit {
  newGuardTrainForm: FormGroup;

  
  guardTrain: IGuard = new IGuard(0,"","","","","");
  constructor(private router: Router, private guardService:  GuardService) {
  }

  addGuardTrain(newGuardTrain) {
    this.guardService.addGuardTrain(newGuardTrain).subscribe(guard => this.guardTrain = guard);
    this.router.navigate(['/navbar/guard-management/GuardTraining'])
    console.log(newGuardTrain)
  }
  on_click()
  {
  alert('Added Successfully');
  }
  ngOnInit(){

    console.log("* create flat *")

    this.newGuardTrainForm = new FormGroup
    ({
          userId : new FormControl(),
          name : new FormControl(),
          date : new FormControl(),
          mobileNo : new FormControl(),
          status : new FormControl(),
          timeing: new FormControl(),

    });
    
  }

 

  cancel() {
    this.router.navigate(['/navbar/guard-management/GuardTraining'])
  }

}
 