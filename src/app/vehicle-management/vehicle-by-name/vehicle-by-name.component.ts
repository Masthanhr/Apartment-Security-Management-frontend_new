import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { cvehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service';


@Component({
  selector: 'vehiclebyname',
  template:` 
  <body style="background-color:#C0C0C0">
  <div *ngIf="errorMessage" class="alert alert-danger">
  {{errorMessage | json}}
  </div>

  <div class="container">
  <div  class= "row row-cols-3">
  <div *ngIf="vehicledata" class="well hoverwell thumbnail py-3 my-3">
  <div > NAME : {{vehicledata?.name | titlecase}} </div>
      <div> DATE : {{vehicledata?.date | date}} </div>
      <div> VEHICLE NO : {{vehicledata?.vehicleNo | titlecase}} </div>
      <div> VEHICLE TYPE : {{vehicledata?.vehicleType | titlecase}} </div>
      <div> DEPARTURE TIME : {{vehicledata?.departureTime}} </div>
      <div> ARRIVAL TIME : {{vehicledata?.arrivalTime}} </div> 
      <div> PARKING TIME : {{vehicledata?.parkingTime}} </div>

      <div class="row">
      <div class="col-md-1">
      <button class="btn btn-danger" title="delete vehicle"  [routerLink]="['/navbar/vehicle-management/deletevehicle',vehicledata?.name]">Delete</button>
      
      </div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <div class="col-md-1">
      <button class="btn btn-primary" title="update vehicle" (click)="updateVehicle(vehicledata.name)">Update</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </body>`,
})
export class VehicleByNameComponent implements OnInit{
    
    private vehicledata: cvehicle;
    private errorMessage;
  
    constructor(private vehicleService : VehicleService, private activatedRoute: ActivatedRoute , private router : Router){
        
      //this.vehicledata =this.vehicleService.getVehicleById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service
    }

  ngOnInit(){
    this.vehicleService.getVehicleByName(this.activatedRoute.snapshot.params['vname']).subscribe(
      (vehicle) => {this.vehicledata = vehicle},
      (error) => {this.errorMessage = error},


);
    }

    updateVehicle(vname){
      this.router.navigateByUrl("/navbar/vehicle-management/updateVehicle/"+vname)
  }


}