  import { Component, OnInit } from '@angular/core';
  import { FormsModule,FormGroup,FormControl } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
  import { pipe } from 'rxjs';
import { DomesticHelp } from 'src/app/Model/DomesticHelp.model';
import { DomesticService } from 'src/app/service/domestichelp.service';
  
  @Component({
    selector: 'update-Help',
    template: `
    <body style="background-color: #C0C0C0;">
    <h1 style="text-align: center;"><u>Update Domestic Help</u></h1>
    <div class="container">
   
    <form [formGroup]="newHelpForm" autocomplete="off" novalidate (ngSubmit)="updateHelp(newHelpForm.value)">
    <div class="form-group" >
      <label for="flatNo">Flat No:</label>
          <input id="flatNo" required type="text" class="form-control" formControlName="flatNo"  readonly [ngModel]=domHelp?.flatNo />
    </div>
    <div class="form-group" >
      <label for="ownerName">Owner Name:</label>
      <em *ngIf="newHelpForm.controls.ownerName?.invalid && (newHelpForm.controls.ownerName?.touched)">Required</em>
      <em *ngIf="newHelpForm.controls.ownerName?.errors?.pattern">Special Characters are not allowed</em>
      <em *ngIf="newHelpForm.controls.ownerName?.errors?.minlength">Enter Full Owner Name</em>    
      <input  id="ownerName" type="text" required class="form-control" formControlName="ownerName" required minlength="4" required maxlength="10" [pattern]="'^[a-zA-Z]+$'" [ngModel]=domHelp?.ownerName >
    </div>
    <div class="form-group" >
    <em *ngIf="newHelpForm.controls.name?.invalid && (newHelpForm.controls.name?.touched)">Required</em>
      <label for="name">Name:</label>
      <em *ngIf="newHelpForm.controls.name?.errors?.pattern">Special Characters are not allowed</em>
     <em *ngIf="newHelpForm.controls.name?.errors?.minlength">Enter Full Name</em>  
      <input id="name" required type="text" class="form-control" formControlName="name" required minlength="4" required maxlength="10" [pattern]="'^[a-zA-Z]+$'" [ngModel]=domHelp?.name >
    </div>
    <div class="form-group" >
      <label for="arrivalTime">Arrival Time:</label>
      <em *ngIf="newHelpForm.controls.arrivalTime?.invalid && (newHelpForm.controls.arrivalTime?.touched)">Required</em>
      <em *ngIf="newHelpForm.controls.arrivalTime?.errors?.minlength">Enter Full Time</em>
      <input  id="arrivalTime"  required type="time" class="form-control" formControlName="arrivalTime" required minlength="4"  [ngModel]=domHelp?.arrivalTime >
    </div>
    <div class="form-group" >
      <label for="departureTime"> Departure Time:</label>
      <em *ngIf="newHelpForm.controls.departureTime?.invalid && (newHelpForm.controls.departureTime?.touched)">Required</em>
      <em *ngIf="newHelpForm.controls.arrivalTime?.errors?.minlength">Enter Full Time</em>
      <input   id="departureTime" required type="time" formControlName="departureTime" required minlength="4" [ngModel]=domHelp?.departureTime class="form-control"  >
    </div>
  
    <div class="form-group" >
      <label for="helpType"> Help Type:</label>
      <em *ngIf="newHelpForm.controls.helpType?.invalid && (newHelpForm.controls.helpType?.touched)">Required</em>
      <em *ngIf="newHelpForm.controls.helpType?.errors?.pattern">Special Characters are not allowed</em>
      <em *ngIf="newHelpForm.controls.helpType?.errors?.minlength">Enter Full help Type</em> 
      <input   id="helpType" required type="text" formControlName="helpType" required minlength="4" required maxlength="10" [pattern]="'^[a-zA-Z]+$'" [ngModel]=domHelp?.helpType class="form-control" >
    </div>
  
    <div class="form-group" >
      <label for="dat"> Date:</label>
      <em *ngIf="newHelpForm.controls.dat?.invalid && (newHelpForm.controls.dat?.touched)">Required</em>
      
    <em *ngIf="newHelpForm.controls.dat?.errors?.minlength">Enter Full Date</em>  
      <input   id="dat" required type="date" formControlName="dat" required minlength="4" required maxlength="10"  [ngModel]=domHelp?.dat class="form-control">
    </div>
    <button type="submit" (click) = "on_click()"  [disabled]=newHelpForm.invalid class="btn btn-primary">Update</button>
    <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
    </form>
    </div>
    </body>
  
    `,
    styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
  },
  
  )
  
  
  export class UpdateDomesticHelpComponent implements OnInit {
   
    flatNo : String
    domHelp : DomesticHelp ; 
    newHelpForm:FormGroup
    // dmHelp : DomesticHelp[];
    constructor(private router: Router, private domesticService: DomesticService, private activatedRoute: ActivatedRoute) {
    }
  
    ngOnInit(): void {
  
      this.newHelpForm=new FormGroup({
        flatNo:new FormControl(),
        ownerName:new FormControl(),
        name:new FormControl(),
        helpType:new FormControl(),
        arrivalTime:new FormControl(),
        departureTime:new FormControl(),
        dat:new FormControl()
      })
      console.log("on init called *")
     this.domesticService.getDomById(this.activatedRoute.snapshot.params['fid']).subscribe(dh => this.domHelp = dh);
  
      
    }
  
    updateHelp(domHelp){
         this.domesticService.updateHelp(domHelp).subscribe(pipe());
         this.router.navigate(['/navbar/domestic-help/domHelp']);
    }
  
    on_click()
    {
    alert('Updated Successfully');
    }

    
    cancel() {
      this.router.navigate(['/navbar/domestic-help/domHelp'])
    }
  }
