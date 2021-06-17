  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  import { Router } from '@angular/router';
import { IDelivery } from 'src/app/model/delivery.model';
import { DeliveryService } from 'src/app/service/delivery.service';

  
  @Component({
    selector: 'create-delivery',
    template:  `
    <body style="background-color:#C0C0C0">
    <div  class = "container" style="width:550px;"> 
        <div style="text-align:center;">
          <h3><b>New Delivery Registration</b></h3>
        </div>
      
        <form [formGroup]="createForm"  autocomplete="on" novalidate (ngSubmit)="addDelivery(createForm.value)">
                  <div class="form-group" >
                    <label for="deliveryId">Delivery Id:</label>
                    <em *ngIf="createForm.controls.deliveryId?.invalid && (createForm.controls.deliveryId?.touched)">Required</em>
                    <em *ngIf="createForm.controls.deliveryId?.errors?.pattern">INVALID Delivery Id</em>
                    <input  id="deliveryId" type="number" min="0" required [pattern]="'^[0-9]+$'"  class="form-control"  formControlName="deliveryId"  (ngModel)=delivery?.deliveryId placeholder="Enter delivery Id..." />
                  </div>


                    <div>
                      <label for="DeliveryName">Owner Name:</label>
                      <em *ngIf="createForm.controls.ownerName?.invalid && (createForm.controls.ownerName?.touched)">Required</em>
                      <em *ngIf="createForm.controls.ownerName?.errors?.pattern">Special Characters are not allowed</em>
                      <em *ngIf="createForm.controls.ownerName?.errors?.minlength">Enter Full Owner Name</em>

                      <input  id="ownerName" type="text" required class="form-control" required minlength="4" required maxlength="10" [pattern]="'^[a-zA-Z]+$'" formControlName="ownerName"  (ngModel)=delivery?.ownerName placeholder="Enter delivery Owner Name..." />
                    </div>


                      <div class="form-group" >
                        <em *ngIf="createForm.controls.date?.invalid && (createForm.controls.date?.touched)">Required</em>
                        <label for="DeliveryDate">Delivery Date:</label>
                        <input id="DeliveryeDate" required type="date" name="datemin" min="2020-01-02" max="2021-06-30" class="form-control" formControlName="date" (ngModel)=delivery?.date placeholder="format (mm/dd/yyyy)..." />
                      </div>


                        <div class="form-group" >
                          <label for="DeliveryTime">Delivery Time:</label>
                           <em *ngIf="createForm.controls.time1?.invalid && (createForm.controls.time1?.touched)">Required</em>
                           <em *ngIf="createForm.controls.time1?.errors?.minlength">Enter Full Time</em>
                            <input  id="DeliveryTime"  required type="time" class="form-control" formControlName="time1" required minlength="4" required maxlength="10"  (ngModel)=delivery?.time1 placeholder="Enter time..." />
                        </div>

                            <div class="form-group" >
                              <label for="DeliveryStatus">Delivery Status:</label>
                              <em *ngIf="createForm.controls.status1?.invalid && (createForm.controls.status1?.touched)">Required</em>
                              <em *ngIf="createForm.controls.status1?.errors?.pattern">Special Characters are not allowed</em>
                              <input  id="DeliveryStatus"  required type="text" class="form-control" [pattern]="'^[a-zA-Z]+$'" formControlName="status1" (ngModel)=delivery?.status1 placeholder="Delivery Status..." />
                            </div>
                            
                            <button type="submit" (click)=" on_click()"   [disabled]=createForm.invalid class="btn btn-primary">Save</button>
                            <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
                      </form>
          
  
    </div>
    </body>`,
    styleUrls: ['./add-delivery.component.css'],               
    styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
  
  })
  export class AddDeliveryComponent implements OnInit {
    private delivery : IDelivery;
    createForm : FormGroup;
    // delivery : IDelivery=new IDelivery(0,null,null,null,null)
    constructor(private router: Router, private deliveryService: DeliveryService) {
    }
  
    ngOnInit(){
  
      console.log("* create delivery *")
  
      this.createForm = new FormGroup
      ({
        deliveryId  : new FormControl(),
        ownerName   : new FormControl(),
        time1       : new FormControl(),
        date        : new FormControl(),
        status1     : new FormControl()
  
      });
      
    }
  
  
    addDelivery(newdelivery) {
      this.deliveryService.addDelivery(newdelivery).subscribe(delivery => this.delivery=delivery);
      this.router.navigate(['/navbar/delivery-management/deliveries']);
      console.log(newdelivery);
    }
  
    on_click()
    {
    alert('Added Successfully');
    }
  
  
    cancel() {
      this.router.navigate(['/navbar/delivery-management/deliveries'])
    }
  
  
  }