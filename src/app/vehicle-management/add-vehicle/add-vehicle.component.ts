import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { cvehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'createvehicle',
  template: `
  <body style="background-color:#C0C0C0">
  <div  class = "container" style="width:550px" > 
        <div style="text-align:center;">
          <h3><b>New Vehicle Registration</b></h3>
        </div>
    
        <form [formGroup]="createForm" autocomplete="on" novalidate (ngSubmit)="addVehicle(createForm.value)">
        

        <div class="form-group" >
          <label for="name"> NAME:</label>
          <em *ngIf="(createForm.controls.name?.invalid) && (createForm.controls.name?.touched)">Required</em>
          <em *ngIf="createForm.controls.name?.errors?.minlength">Enter Full Name</em> 
          <input  id="name" required type="text" class="form-control" formControlName="name" required minlength="4" required maxlength="15" (ngModel)=vehicle?.name placeholder="Enter Name..." />
        </div>
      
        <div class="form-group" >
          <label for="date"> DATE:</label>
          <em *ngIf="(createForm.controls.date?.invalid) && (createForm.controls.date?.touched)">Required</em>
              <input  id="date" required type="date"   class="form-control" formControlName="date" (ngModel)=vehicle?.date placeholder="Enter Date..." />
        </div>

        <div class="form-group" >
          <label for="vehicleNo"> VEHICLE NO:</label>
          <em *ngIf="(createForm.controls.vehicleNo?.invalid) && (createForm.controls.vehicleNo?.touched)">Required</em>
          <em *ngIf="createForm.controls.vehicleNo?.errors?.minlength">Enter Full Vehicle Number</em> 
              <input  id="vehicleNo" required type="text"   class="form-control" formControlName="vehicleNo" required minlength="4" required maxlength="15" (ngModel)=vehicle?.vehicleNo placeholder="Enter Vehicle No..." />
        </div>

        <div class="form-group" >
          <label for="vehicleType"> VEHICLE TYPE:</label>
        <em *ngIf="createForm.controls.vehicleType?.invalid && (createForm.controls.vehicleType?.touched)">Required</em>
          <em *ngIf="createForm.controls.vehicleType?.errors?.minlength">Enter Full Vehicle Type</em> 
        <input  id="vehicleType"  required type="text" class="form-control" formControlName="vehicleType" required minlength="4" required maxlength="15" (ngModel)=vehicle?.vehicleType placeholder="Enter Vehicle Type..." />
      </div>

   

        <div class="form-group" >
          <label for="arrivalTime"> ARRIVAL TIME:</label>
          <em *ngIf="createForm.controls.arrivalTime?.invalid && (createForm.controls.arrivalTime?.touched)">Required</em>
          <em *ngIf="createForm.controls.arrivalTime?.errors?.minlength">Enter Detailed Time</em> 
          <input  id="arrivalTime"  required type="time" class="form-control" formControlName="arrivalTime" required minlength="4" (ngModel)=vehicle?.arrivalTime placeholder="Enter Arrival Time..." />
        </div>

       
      <div class="form-group" >
      <label for="parkingTime"> PARKING TIME:</label>
      <em *ngIf="createForm.controls.parkingTime?.invalid && (createForm.controls.parkingTime?.touched)">Required</em>
      <em *ngIf="createForm.controls.parkingTime?.errors?.minlength">Enter detailed time</em> 
      <input  id="parkingTime"  required type="time" class="form-control" formControlName="parkingTime" required minlength="4" (ngModel)=vehicle?.parkingTime placeholder="Enter Parking Time..." />
    </div>

    <div class="form-group" >
    <label for="departureTime"> DEPARTURE TIME:</label>
    <em *ngIf="createForm.controls.departureTime?.invalid && (createForm.controls.departureTime?.touched)">Required</em>
    <em *ngIf="createForm.controls.departureTime?.errors?.minlength">Enter Detailed Time</em> 
    <input  id="departureTime"  required type="time" class="form-control" formControlName="departureTime" required minlength="4" (ngModel)=vehicle?.departureTime placeholder="Enter Departure Time..." />
  </div>

        <button type="submit" (click)=" on_click()"  [disabled]=createForm.invalid class="btn btn-primary">Save</button>
        <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
  </div>
  </body>`,
  styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
}
)
export class AddVehicleComponent implements OnInit {

  private vehicle: cvehicle;
  createForm: FormGroup;
  constructor(private router: Router, private vehicleService: VehicleService) {
  }

  ngOnInit(){

    console.log("* create vehicle *")

    this.createForm = new FormGroup
    ({
          name : new FormControl(),
          date : new FormControl(),
          vehicleNo : new FormControl(),
          vehicleType : new FormControl(),
          departureTime : new FormControl(),
          arrivalTime : new FormControl(),
          parkingTime : new FormControl(),

    });
    
  }

  addVehicle(newVehicle) {
    this.vehicleService.addVehicle(newVehicle).subscribe(vehicle => this.vehicle = vehicle);
    this.router.navigate(['/navbar/vehicle-management/vehicle'])
    console.log(newVehicle)
    }
    on_click()
    {
    alert('Added Successfully');
    }
  cancel() {
    this.router.navigate(['/navbar/vehicle-management/vehicle'])
  }

}