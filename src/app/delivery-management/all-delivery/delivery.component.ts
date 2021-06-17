
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SELECT_VALUE_ACCESSOR } from '@angular/forms/src/directives/select_control_value_accessor';

@Component({
  selector: 'delivery-list',
  templateUrl: './delivery.component.html',
 
})
export class DeliveryListComponent {
  @Input() deliveryDetails;

  @Output() customEvent=new EventEmitter();

  isDisabled= true;
  buttonStyle="btn btn-primary";

  myFunction() {
    this.isDisabled = false;
    this.buttonStyle= "btn btn-success";
  }

  onClick() {
    console.log("Name Calling..");
    this.customEvent.emit(this.deliveryDetails.ownerName)
  }

  on_click1()
   {
   alert('Delivery By Id');
   }

   on_click2()
   {
   alert('Delivery By Name');
   }
}






  

  
 
