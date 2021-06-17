import { Component,Input,Output, EventEmitter} from '@angular/core';
import { cvehicle } from 'src/app/model/vehicle.model';



@Component({
  selector: 'allvehicles',
  template:`<div class="container">   
                                
  <div class="well hoverwell thumbnail py-3 my-3" [routerLink]="['./',vehicledata.name]">
  
    <div > NAME : {{vehicledata?.name | titlecase}} </div>
      <div> DATE : {{vehicledata?.date | date}} </div>
      <div> VEHICLE NO : {{vehicledata?.vehicleNo | titlecase}} </div>
      <div> VEHICLE TYPE : {{vehicledata?.vehicleType | titlecase}} </div>
      <div> PARKING TIME : {{vehicledata?.parkingTime | titlecase}} </div>
      <div> ARRIVAL TIME : {{vehicledata?.arrivalTime | titlecase}} </div>
      <div> DEPARTURE TIME : {{vehicledata?.departureTime | titlecase}} </div>
      <div>
         
          <span> <button [class]=buttonStyle (click)="onButtonClick()"  [routerLink]="['./',vehicledata.name]"> View </button></span>
      </div>
  </div>
</div>`,
})
export class AllVehicleComponent {
  @Input() vehicledata: cvehicle[];  // property receiving the data from parent using property binding
  // We can create custom event 
   @Output() customEvent =  new EventEmitter(); //   (customEvent) = "someFunction"
 
   isDisabled = true ;  
   buttonStyle = "btn btn-primary";
    
   myFunction(){
     this.isDisabled = false
     this.buttonStyle = "btn btn-success";
   }
 
   onButtonClick(){
     this.customEvent.emit(this.vehicledata);  // what ever is send  by default get stored into one javascript '$event'
   }
   on_click1()
   {
   alert('Vehicle By Id');
   }

   on_click2()
   {
   alert('Vehicle By Name');
   }
  

  

}