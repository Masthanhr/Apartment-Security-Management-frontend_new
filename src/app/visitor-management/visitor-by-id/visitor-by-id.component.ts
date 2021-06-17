import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Visitor } from 'src/app/model/visitor.model';
import { VisitorService } from 'src/app/service/visitor.service';




@Component({
  selector: 'visitor',
  template: `
  <body style="background-color:#C0C0C0">
  <div class="container">
  <div class= "row-auto">
  <div class="well hoverwell thumnail">
   <table class="table table-bordered">
              <tr>
              <th>Flat No</th>
              <th>Owner Name</th>
              <th>Name</th>
              <th>Arrival Time</th>
              <th>Departure Time</th>
              <th>Date</th>
              </tr>
              
              <tr>    

              
              <td>{{visitorinfo?.flatNo}}</td>
              <td>{{visitorinfo?.ownerName}}</td>
             <td> {{visitorinfo?.name}}</td>


              <td [ngSwitch]="visitorinfo?.arrivalTime">
              {{visitorinfo?.arrivalTime}} <span *ngSwitchCase="'10:00 am'">(Entry Time)</span>
              <span *ngSwitchDefault>(No Entry)</span></td>

              <td [ngSwitch]="visitorinfo?.departureTime">
              {{visitorinfo?.departureTime}} <span *ngSwitchCase="'5:00 pm'">(Exit Time)</span>
              <span *ngSwitchDefault>(Exit)</span>
              </td>


              <td *ngIf="visitorinfo?.datepost">
              {{visitorinfo?.datepost | date}}</td>
        

            
              <td>
               <button class="btn btn-primary" title="delete visitor" (click)=delete(visitorinfo.flatNo) >Delete</button>
              <!--<button class="btn btn-danger" title="delete visitor"  [routerLink]="['/navbar/visitor-management/visitors',visitorinfo?.flatNo]">Delete</button>-->
            </td>
           
           <td>
           <button class="btn btn-primary" title="update visitor" (click)=updateVisitor(visitorinfo.flatNo)>Update</button>
            </td>
            </tr>
               
              </table>
        </div>
  
              </div> 
   </div> 
   </body>
`,
})


export class VisitorByIdComponent {

  private visitorinfo: Visitor;

  // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
  constructor(private visitorService: VisitorService, private activatedRoute: ActivatedRoute, private router: Router) {
    //  this.visitorService.getVisitorById(+activatedRoute.snapshot.params['fno']).subscribe(c => this.visitorinfo =c); // Capture id from URL and passit to service
  }
  ngOnInit(): void {
    console.log("in a visitor Id init method****" + (this.activatedRoute.snapshot.params['fno']))
    this.visitorService.getVisitorById(this.activatedRoute.snapshot.params['fno']).subscribe(c => this.visitorinfo = c);

  }
  isDisabled = true;
  buttonStyle = "btn btn-primary btn-lg ";

  public i: number = 10;

  onClick() {
    // this.customEvent.emit(this.visitorinfo)
    alert("Verify your Id")
    console.log("message is printed")


  };


  delete(flatNo: string) {
    console.log(flatNo);
    this.visitorService.delete(flatNo).subscribe(data => this.visitorinfo = data);
    this.router.navigate(['/navbar/visitor-management/visitors']);
  }
  updateVisitor(fno) {
    console.log(fno);

    this.router.navigateByUrl("/navbar/visitor-management/updatevisitors/" + fno)
  }



}