import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Visitor } from 'src/app/model/visitor.model';
import { VisitorService } from 'src/app/service/visitor.service';




@Component({
  selector: 'visitor',
  template: `
  <body style="background-color:#C0C0C0">
  <div class= "row-auto">
  <div class="well hoverwell thumnail">
   <table class="table table-bordered">
              <tr>
             
              <th>Owner Name</th>
              <th>Name</th>
              <th>Flat No</th>
              <th>Arrival Time</th>
              <th>Departure Time</th>
              <th>Date</th>
              </tr>
              
              <tr>    

              
             
              <td><h3>{{visitorinfo?.ownerName}}</h3></td>
             <td> {{visitorinfo?.name}}</td>
             <td>{{visitorinfo?.flatNo}}</td>


              <td [ngSwitch]="visitorinfo?.arrivalTime">
              {{visitorinfo?.arrivalTime}} <span *ngSwitchCase="'10:00 am'">(Entry Time)</span>
              <span *ngSwitchDefault>(No Entry)</span></td>

              <td [ngSwitch]="visitorinfo?.departureTime">
              {{visitorinfo?.departureTime}} <span *ngSwitchCase="'5:00 pm'">(Exit Time)</span>
              <span *ngSwitchDefault>(Exit)</span>
              </td>


              <td *ngIf="visitorinfo?.datepost">
              {{visitorinfo?.datepost | date}}</td>
              </tr>
               
              </table>

   </div> 

   </div> 
   </body>
`,
})


export class VisitorByNameComponent {

  private visitorinfo : Visitor;

  // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
  constructor(private visitorService : VisitorService, private activatedRoute: ActivatedRoute , private router : Router) {
      //  this.visitorService.getVisitorById(+activatedRoute.snapshot.params['fno']).subscribe(c => this.visitorinfo =c); // Capture id from URL and passit to service
  }
  ngOnInit(): void {
    console.log("in a visitor Id init method****" +(this.activatedRoute.snapshot.params['vname']))
    this.visitorService.getVisitorByName(this.activatedRoute.snapshot.params['vname']).subscribe(c => this.visitorinfo =c);
 
   }
  isDisabled = true;
  buttonStyle = "btn btn-primary btn-lg ";

  public  i : number = 10;

  onClick() {
    // this.customEvent.emit(this.visitorinfo)
    alert("Do u want to see details?")
    console.log("message is printed")

  }
}