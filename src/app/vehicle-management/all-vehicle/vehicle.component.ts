import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { cvehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service';


@Component({
  selector: 'vehicle',
  template: `
  <body style="background-color:#C0C0C0">
  <div class="container" >
                <h1>Vehicle Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let vehicles of vehicles | paginate: {itemsPerPage: 5,currentPage:p}" class="col-md-4 ">  
                        <allvehicles #allvehicle [vehicledata] = vehicles  (customEvent)="parentFunction($event)" ></allvehicles>    
                      <!-- <div>
                          {{allvehicle.i}}
                      </div> -->

                </div>
                </div>
                <div style="background-color:green">
                <pagination-controls (pageChange)="p=$event"></pagination-controls>
                </div>
              </div>
              </body>`

})
export class VehicleComponent {
  p: number=1;
  parentFunction(event) {
    console.log(event);
  }

  
  private vehicles: cvehicle[];

  constructor(private vehicleService : VehicleService){
    console.log("*all vehicles**");
    /* let obs : Observable<cvehicle[]> =this.vehicleService.getAllvehicles()
    obs.subscribe(allvehicles => this.vehicles = data) */

    this.vehicleService.getAllvehicles().subscribe(vehicledata => this.vehicles = vehicledata)
  }

  
}