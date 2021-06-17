import { Component, OnInit } from '@angular/core';
import { IDelivery } from 'src/app/model/delivery.model';
import { DeliveryService } from 'src/app/service/delivery.service';

@Component({
  selector: 'delivery',
  template:  `
  <body style="background-color:#C0C0C0">
      <div class="container">
          <h1 style="text-align: center;">Delivery Management</h1><hr/>
          <div *ngFor="let delivery of deliveries | paginate: {itemsPerPage: 3,currentPage:p}">
              <delivery-list [deliveryDetails]=delivery (customEvent)= "parentFunction($event)" ></delivery-list>
          </div>
          <div style="background-color:blue">
                  <pagination-controls (pageChange)="p=$event"></pagination-controls>
          </div>
      </div>
  </body>
              `
              ,
              styleUrls: ['./all-delivery.component.css'],
              
})
export class DeliveryComponent  implements OnInit {
    p: number=1;
  private deliveries : IDelivery[];
  constructor(private deliveryService : DeliveryService){
    console.log("delivery clicked....")
    // this.deliveries = this.deliveryService.getDelivery();

    this.deliveryService.getDelivery().subscribe(deliveryarr => this.deliveries=deliveryarr)

  }
  ngOnInit(): void {
    this.deliveryService.getDelivery().subscribe(deliveryarr => this.deliveries=deliveryarr)
  }
  parentFunction(event) {
    console.log(event);
  }

}