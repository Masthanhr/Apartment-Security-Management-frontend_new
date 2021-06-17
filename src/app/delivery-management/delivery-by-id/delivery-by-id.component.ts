import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDelivery } from 'src/app/model/delivery.model';
import { DeliveryService } from 'src/app/service/delivery.service';


@Component({
  selector: 'delivery-details',
  template:  `
  <body style="background-color:#C0C0C0">
  <div *ngIf="errorMessage" class="alert alert-danger">
  {{errorMessage?.error?.details | json}}
  </div>

  <div>
  <div class = "container" style="text-align: center; width:1100px;">
  <div *ngIf="delivery" class="well hoverwell thumbnail py-3 my-3">
  <table class="table table-bordered">
  <tr style="background-color: yellowgreen;">
  <th>Delivery Id</th>
  <th>Owner Name</th>
  <th>Time</th>
  <th>Date</th>
  <th>Status1</th>
  </tr>
  
  <tr>    
  <td>{{delivery?.deliveryId}} </td>
  <td>{{delivery?.ownerName | titlecase}}</td>
  <td>{{delivery?.time1}}</td>
  <td>{{delivery?.date | date:'mediumDate'}}</td>
  <td>{{delivery?.status1}}</td>
  <td>
  <button class="btn btn-danger" (click)=" on_click()" [routerLink]="['/navbar/delivery-management/deliveries',delivery?.deliveryId]">Delete</button>
  <button class="btn btn-primary" (click)="updateDelivery(delivery.deliveryId)">Update</button>
  
  </td>
  </tr>
  
 
  
  </table>
</div>
</div>
</div>
</body>`
              ,
})
export class DeliveryByIdComponent {

  private delivery : IDelivery;
  private errorMessage;
  
  constructor(private deliveryService : DeliveryService, private activatedRoute: ActivatedRoute,private router: Router){
    // this.delivery = this.deliveryService.getDeliveryById(+activatedRoute.snapshot.params['did']);
    this.deliveryService.getDeliveryById(+activatedRoute.snapshot.params['did']).subscribe(d => {this.delivery = d},
                                                                              (error) => {this.errorMessage = error},
  );

  }

  updateDelivery(did){
    this.router.navigateByUrl("/navbar/delivery-management/updatedelivery/"+did);
  }

  // deleteDelivery(deliveryId : number){
  //   console.log(deliveryId);
  //   this.deliveryService.deleteDelivery(deliveryId).subscribe(data=> this.delivery=data);
  //   this.router.navigate(['/deliveries']);
  // }

  on_click()
    {
    alert('Deleted Successfully');
    }
 
}