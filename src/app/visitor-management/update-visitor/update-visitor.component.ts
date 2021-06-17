import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Visitor } from 'src/app/model/visitor.model';
import { VisitorService } from 'src/app/service/visitor.service';




@Component({
  selector: 'update-visitor',
  template: `
  <body style="background-color:#C0C0C0">
  <div class = "container" style= "width:550px">
  <div style ="text-align:center;">
  <h2><b>Update Visitor Details</b></h2>
  </div>
  <form [formGroup]="updateForm" autocomplete="off" novalidate (ngSubmit)="updateVisitor(updateForm.value)">

    
    <div class="form-group" >
    <label for="flatNo">Flat No:</label>
    <em *ngIf="updateForm.controls.flatNo?.invalid && (updateForm.controls.flatNo?.touched)">Required</em>
    <input  id="flatNo" type="text" required class="form-control" formControlName="flatNo"  [ngModel]=visitor?.flatNo  placeholder="Name of your Course..." />
  </div>

  <div class="form-group" >
    <label for="ownerName">Owner Name:</label>
    <em *ngIf="(updateForm.controls.ownerName?.invalid) && (updateForm.controls.ownerName?.touched)">Required</em>
    <input  id="ownerName" required type="text"   class="form-control" formControlName="ownerName"  [ngModel]=visitor?.ownerName placeholder="Enter Owner Name..." />
  </div>

  <div class="form-group" >
    <label for="name">Name:</label>
    <em *ngIf="updateForm.controls.name?.invalid && (updateForm.controls.name?.touched)">Required</em>
    <input  id="name" type="text" required class="form-control" formControlName="name"  [ngModel]=visitor?.name placeholder="Name of your Course..." />
  </div>

  <div class="form-group" >
    <em *ngIf="updateForm.controls.datepost?.invalid && (updateForm.controls.datepost?.touched)">Required</em>
    <label for="datepost"> Date:</label>
    <input id="date" required type="date" class="form-control" formControlName="datepost" [ngModel]=visitor?.datepost placeholder="format (yyyy-mm-dd)..." />
  </div>

  <div class="form-group" >
    <label for="arrivalTime">Arrival Time:</label>
    <em *ngIf="updateForm.controls.arrivalTime?.invalid && (updateForm.controls.arrivalTime?.touched)">Required</em>
    <input  id="arrivalTime"  required type="text" class="form-control" formControlName="arrivalTime" [ngModel]=visitor?.arrivalTime  placeholder="start and end time..." />
  </div>

  <div class="form-group" >
    <label for="departureTime">Departure Time:</label>
    <em *ngIf="updateForm.controls.departureTime?.invalid && (updateForm.controls.departureTime?.touched)">Required</em>
    <input  id="departureTime"  required type="text" class="form-control" formControlName="departureTime" [ngModel]=visitor?.departureTime placeholder="start and end time..." />
  </div>
    
   
     <div>
     <button type="submit"  [disabled]=updateForm.invalid class="btn btn-primary">Update</button>
     <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>

     </div>
     </form>
   </div>
   </body>
   
`,
styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
})
export class UpdateVisitorComponent  implements OnInit {
 
  // fno : string
  visitor: Visitor; 
  updateForm : FormGroup;
  
  constructor(private router: Router, private visitorService: VisitorService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.updateForm = new FormGroup
    ({
      flatNo : new FormControl(),
      ownerName : new FormControl(),
      name : new FormControl(),
      datepost: new FormControl(),
      arrivalTime : new FormControl(),
      departureTime : new FormControl()


    });


   this.visitorService.getVisitorById(+this.activatedRoute.snapshot.params['fno']).subscribe(Visitor=> this.visitor= Visitor);
  }

  updateVisitor(newVisitor){
       this.visitorService.updateVisitor(newVisitor).subscribe(visitor => this.visitor = visitor );
       this.router.navigate(['/navbar/visitor-management/visitors']);
       console.log(newVisitor)
       console.log("updated visitor")
  }
}