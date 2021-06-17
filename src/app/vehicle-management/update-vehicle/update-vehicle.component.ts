import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { cvehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service';




@Component({
  selector: 'updatevehicle',
  template: `<body style="background-color:#C0C0C0">
  <div  class = "container" style="width:550px" > 
 
  <form [formGroup]="updateForm" autocomplete="on" novalidate (ngSubmit)="updateVehicle(updateForm.value)">
        

  <div class="form-group" >
    <label for="name"> NAME:</label>
    <em *ngIf="(updateForm.controls.name?.invalid) && (updateForm.controls.name?.touched)">Required</em>
    <em *ngIf="updateForm.controls.name?.errors?.minlength">Enter Full Name</em> 
        <input  id="name" required type="text" class="form-control" formControlName="name" required minlength="4" required maxlength="15"  [ngModel]=vehi?.name placeholder="Enter Name..." />
  </div>

  <div class="form-group" >
    <label for="date"> DATE:</label>
    <em *ngIf="(updateForm.controls.date?.invalid) && (updateForm.controls.date?.touched)">Required</em>
        <input  id="date" required type="date"   class="form-control" formControlName="date"  [ngModel]=vehi?.date placeholder="Enter Date..." />
  </div>

  <div class="form-group" >
    <label for="vehicleNo"> VEHICLE NO:</label>
    <em *ngIf="(updateForm.controls.vehicleNo?.invalid) && (updateForm.controls.vehicleNo?.touched)">Required</em>
    <em *ngIf="updateForm.controls.vehicleNo?.errors?.minlength">Enter Full Vehicle Number</em> 
        <input  id="vehicleNo" required type="text"   class="form-control" formControlName="vehicleNo" required minlength="4" required maxlength="15" [ngModel]=vehi?.vehicleNo placeholder="Enter Vehicle No..." />
  </div>

  <div class="form-group" >
    <label for="vehicleType"> VEHICLE TYPE:</label>
  <em *ngIf="updateForm.controls.vehicleType?.invalid && (updateForm.controls.vehicleType?.touched)">Required</em>
  <em *ngIf="updateForm.controls.vehicleType?.errors?.minlength">Enter Full Vehicle Type</em> 
  <input  id="vehicleType"  required type="text" class="form-control" formControlName="vehicleType" required minlength="4" required maxlength="15" [ngModel]=vehi?.vehicleType placeholder="Enter Vehicle Type..." />
</div>

  <div class="form-group" >
    <label for="arrivalTime"> ARRIVAL TIME:</label>
    <em *ngIf="updateForm.controls.arrivalTime?.invalid && (updateForm.controls.arrivalTime?.touched)">Required</em>
    <em *ngIf="updateForm.controls.arrivalTime?.errors?.minlength">Enter Detailed Time</em> 
    <input  id="arrivalTime"  required type="time" class="form-control" formControlName="arrivalTime" required minlength="4" [ngModel]=vehi?.arrivalTime placeholder="Enter Arrival Time..." />
  </div>

 
<div class="form-group" >
<label for="parkingTime"> PARKING TIME:</label>
<em *ngIf="updateForm.controls.parkingTime?.invalid && (updateForm.controls.parkingTime?.touched)">Required</em>
<em *ngIf="updateForm.controls.parkingTime?.errors?.minlength">Enter detailed time</em> 
<input  id="parkingTime"  required type="time" class="form-control" formControlName="parkingTime" required minlength="4" [ngModel]=vehi?.parkingTime placeholder="Enter Parking Time..." />
</div>

<div class="form-group" >
<label for="departureTime"> DEPARTURE TIME:</label>
<em *ngIf="updateForm.controls.departureTime?.invalid && (updateForm.controls.departureTime?.touched)">Required</em>
<em *ngIf="updateForm.controls.departureTime?.errors?.minlength">Enter Detailed Time</em> 
<input  id="departureTime"  required type="time" class="form-control" formControlName="departureTime" required minlength="4" [ngModel]=vehi?.departureTime placeholder="Enter Departure Time..." />
</div>


  <button type="submit"  [disabled]=updateForm.invalid class="btn btn-primary">Update</button>
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  </div>
  </body>

  `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class UpdateVehicleComponent implements OnInit {
 
  vname : string;
    vehi: cvehicle;
    updateForm: FormGroup;

  constructor(private router: Router, private vehicleService: VehicleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.updateForm = new FormGroup
    ({
      name : new FormControl(),
      date : new FormControl(),
      vehicleNo : new FormControl(),
      vehicleType : new FormControl(),
      departureTime : new FormControl(),
      arrivalTime : new FormControl(),
      parkingTime : new FormControl(),

});
    
    this.vehicleService.getVehicleByName(this.activatedRoute.snapshot.params['vname']).subscribe(vehicle => this.vehi = vehicle);

    // console.log(vehiclename)
    // this.vehicleService.deleteVehicle(vehiclename).subscribe(data => console.log(data));
    // this.router.navigate(['/co(urses']);
  }

  updateVehicle(vehi: cvehicle){
    console.log("*update**");
       this.vehicleService.updateVehicle(vehi).subscribe(vehicle => this.vehi = vehicle);
       this.router.navigate(['/navbar/vehicle-management/vehicle']);


      
       }
  }