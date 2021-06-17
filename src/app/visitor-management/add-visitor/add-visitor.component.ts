  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  // import { FormsModule } from '@angular/forms';
  import { Router } from '@angular/router';
import { Visitor } from 'src/app/model/visitor.model';
import { VisitorService } from 'src/app/service/visitor.service';
 
  
  @Component({
    selector: 'create-visitor',
    template: `
    <body style="background-color:#C0C0C0">
    <div class = "container" style= "width:550px">
    <div style ="text-align:center;">
    <h2><b>New Visitor Registeration</b></h2>
    </div>
    <form [formGroup]="createForm" autocomplete="on" novalidate (ngSubmit)="addVisitor(createForm.value)">
    
    <div class="form-group" >
      <label for="flatNo">Flat No:</label>
      <em *ngIf="createForm.controls.flatNo?.invalid && (createForm.controls.flatNo?.touched)">Required</em>
      <em *ngIf="createForm.controls.flatNo?.pattern">Special Characters are not allowed babe</em>
      <em *ngIf="createForm.controls.flatNo?.errors?.minlength">Enter Full Flat Number</em>
      <input  id="flatNo" type="text" required class="form-control" formControlName="flatNo" min="0" required minlength="1" required maxlength="10" [pattern]="'^[a-zA-Z0-9]+$'" 
      ngModel placeholder="flat no ..." />
    </div>
  
    <div class="form-group" >
      <label for="ownerName">Owner Name:</label>
      <em *ngIf="(createForm.controls.ownerName?.invalid) && (createForm.controls.ownerName?.touched)">Required</em>
      <input  id="ownerName" required type="text"   class="form-control" formControlName="ownerName"  ngModel placeholder="Enter Owner Name..." />
    </div>
  
    <div class="form-group" >
      <label for="name">Name:</label>
      <em *ngIf="createForm.controls.name?.invalid && (createForm.controls.name?.touched)">Required</em>
      <input  id="name" type="text" required class="form-control" formControlName="name"  ngModel placeholder="Name of your Course..." />
    </div>
  
    <div class="form-group" >
      <em *ngIf="createForm.controls.datepost?.invalid && (createForm.controls.datepost?.touched)">Required</em>
      <label for="datepost"> Date:</label>
      <input id="date" required type="date" class="form-control" formControlName="datepost" ngModel placeholder="format (yyyy-mm-dd)..." />
    </div>
  
    <div class="form-group" >
    <label for="arrivalTime">Arrival Time:</label>
    <em *ngIf="createForm.controls.arrivalTime?.invalid && (createForm.controls.arrivalTime?.touched)">Required</em>
    <em *ngIf="createForm.controls.arrivalTime?.errors?.minlength">Enter Full Time</em>  
    <input  id="arrivalTime"  required type="text" class="form-control" formControlName="arrivalTime" required minlength="4" required maxlength="10" ngModel  placeholder="start and end time..." />
  </div>

  <div class="form-group" >
    <label for="departureTime">Departure Time:</label>
    <em *ngIf="createForm.controls.departureTime?.invalid && (createForm.controls.departureTime?.touched)">Required</em>
    <em *ngIf="createForm.controls.departureTime?.errors?.minlength">Enter Full Time</em>  
    <input  id="departureTime"  required type="text" class="form-control" formControlName="departureTime"  required minlength="4" required maxlength="10"  ngModel placeholder="start and end time..." />
  </div>
    
    
      <button type="submit" (click)=" on_click()"  [disabled]=createForm.invalid class="btn btn-primary">Save</button>
      <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
      </form>
    </div>
    </body>`,
    styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
  })
  
  export class AddVisitorComponent implements OnInit {
  
   visitor : Visitor;
   createForm: FormGroup;
   
   constructor(private router: Router, private visitorService: VisitorService) {
    }
    ngOnInit(){
  
      console.log("* create flat *")
  
      this.createForm = new FormGroup
      ({
           
          
            flatNo : new FormControl(),
            ownerName : new FormControl(),
            name : new FormControl(),
            datepost: new FormControl(),
            arrivalTime : new FormControl(),
            departureTime : new FormControl()
  
      });
      
    }
  
    
  addVisitor(newVisitor) {
      this.visitorService.addVisitor(newVisitor).subscribe(visitor => this.visitor = visitor);
      this.router.navigate(['/navbar/visitor-management/visitors'])
      console.log(newVisitor)
      console.log("added new visitor")
      
    }
  
    cancel() {
      this.router.navigate(['/navbar/visitor-management/visitors'])
    }

    on_click()
    {
    alert('Added Successfully');
    }
  }
