import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { GuardShift } from 'src/app/model/guardshift.model';
import { GuardService } from 'src/app/service/guard.service';




@Component({
  selector: 'updateguardshift',
  template: `
  <body style="background-color:#C0C0C0">
  <div  class = "container" style="width:550px"> 
 
  <form [formGroup]="newGuardForm" autocomplete="on" novalidate (ngSubmit)="updateGuardShift(newGuardForm.value)">
        

  <div class="form-group" >
    <label for="userId">UserId: </label>
    <em *ngIf="newGuardForm.controls.userId?.errors?.pattern">Negative userId not allowed</em>
    <em *ngIf="(newGuardForm.controls.userId?.invalid) && (newGuardForm.controls.userId?.touched)">Required</em>
        <input  readonly id="userId" required  type="number" class="form-control" formControlName="userId"  [(ngModel)]=guard.userId placeholder="Enter UserId..." />
  </div>

  <div class="form-group" >
  <label for="name">name: </label>
  <em *ngIf="newGuardForm.controls.name?.errors?.minlength">Enter Full Guard Number</em> 
  <em *ngIf="(newGuardForm.controls.name?.invalid) && (newGuardForm.controls.name?.touched)">Required</em>
      <input  id="name" required type="text" class="form-control" formControlName="name"  [(ngModel)]=guard.name placeholder="Enter name..." minlength="3"/>
</div>

<div class="form-group" >
<label for="time">time: </label>
<em *ngIf="(newGuardForm.controls.time?.invalid) && (newGuardForm.controls.time?.touched)">Required</em>
    <input  id="time" required type="time" class="form-control" formControlName="time"  [(ngModel)]=guard.time placeholder="Enter Time..." />
</div>

<div class="form-group" >
<label for="date">date: </label>
<em *ngIf="(newGuardForm.controls.date?.invalid) && (newGuardForm.controls.date?.touched)">Required</em>
    <input  id="date" required type="date" class="form-control" formControlName="date"  [(ngModel)]=guard.date placeholder="Enter date..." />
</div>


  <button type="submit"  (click)=" on_click1()" [disabled]=newGuardForm.invalid class="btn btn-primary">Update</button>
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  </div>
</body>
  `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class UpdateGuardShiftComponent implements OnInit {
  newGuardForm: FormGroup;
 
  fid : number;
  guard: GuardShift;

  constructor(private router: Router, private guardService: GuardService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
   this.guardService.getGuardShiftById(this.activatedRoute.snapshot.params['fid']).subscribe(guarddata => this.guard = guarddata);

    // console.log(vehiclename)
    // this.vehicleService.deleteVehicle(vehiclename).subscribe(data => console.log(data));
    // this.router.navigate(['/co(urses']);

    this.newGuardForm = new FormGroup
    ({
      userId : new FormControl(),
      name : new FormControl(),
      time: new FormControl(),
      date: new FormControl(),

    });
  }

  
  on_click1()
  {
  alert('Updated Id Successfully');
  }

  updateGuardShift(guard){
    console.log("***");
       this.guardService.updateGuardShift(this.guard).subscribe(pipe());
       this.router.navigate(['/navbar/guard-management/GuardShift']);
  }

  cancel() {
    this.router.navigate(['/navbar/guard-management/GuardShift'])
  }
}