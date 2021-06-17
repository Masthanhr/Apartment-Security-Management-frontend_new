import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { crent } from 'src/app/model/flatrent.model';
import { FlatRentService } from 'src/app/service/flatrent.service';





@Component({
  selector: 'updateflatRentForm',
  template: `
  <div  class = "container" style="width:550px; background-color: pink"> 
  <div class="col-md-6">
 
  <form [formGroup]="updateForm" autocomplete="off" novalidate (ngSubmit)="updateFlatRent(updateForm.value)">

  <div class="form-group" >
          <label for="userId">User Id:</label>
              <input  id="userId" required type="text" class="form-control" formControlName="userId" readonly   [ngModel]=flats?.userId  />
              
    </div>
      
    <div class="form-group" >
            <label for="ownerName">Owner Name:</label>
                <input  id="ownerName" required type="text"   class="form-control" formControlName="ownerName" readonly  [ngModel]=flats?.ownerName  />
    </div>



  <div class="form-group" >
  <label for="flatNo">Flat No:</label>
 
      <input  id="flatNo" required type="text"   class="form-control" formControlName="flatNo"  [ngModel]=flats?.flatNo placeholder="Enter Flat No..." />
      <div *ngIf="(updateForm.controls.flatNo?.invalid) && (updateForm.controls.flatNo?.touched)" class="alert alert-danger">Required</div>
</div>

 
<div class="form-group" >
<label for="amount">Amount:</label>

<input  id="amount"  required type="number" [pattern]="'^[0-9]+$'" class="form-control" formControlName="amount" [ngModel]=flats?.amount placeholder="Enter Amount..." />
<div *ngIf="updateForm.controls.amount?.invalid && (updateForm.controls.amount?.touched)" class="alert alert-danger">Required</div>
</div>



<div class="form-group" >
<label for="flatType">Flat Type:</label>

<input  id="flatType"  required type="text" class="form-control" formControlName="flatType" [ngModel]=flats?.flatType placeholder="Enter Flat Type..." />
<div *ngIf="updateForm.controls.flatType?.invalid && (updateForm.controls.flatType?.touched)" class="alert alert-danger">Required</div>
</div>


  <button type="submit" (click) = "on_click1()"  [disabled]=updateForm.invalid class="btn btn-warning">Update</button>&nbsp;
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  </div>
  </div>

  `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class UpdateFlatRentFormComponent implements OnInit {
 
  
  flats : crent; 
  updateForm : FormGroup;
  
  

  constructor(private router: Router, private flatrentService: FlatRentService, private activatedRoute: ActivatedRoute) {
    console.log("***********update flat Rent form**************");
  }


  ngOnInit(): void{

    this.updateForm = new FormGroup
    ({
          userId : new FormControl(null,Validators.required),
          ownerName : new FormControl(null,Validators.required),
          flatNo : new FormControl(null,Validators.required),
          amount : new FormControl(null,Validators.required),
          flatType : new FormControl(null,Validators.required)

    });

    this.flatrentService.getFlatRentById(+this.activatedRoute.snapshot.params['fid']).subscribe(flat => this.flats = flat);

    
    
  }



  updateFlatRent(newFlat: crent){
    console.log("********** update *********")
       this.flatrentService.updateFlatRent(newFlat).subscribe(flat => this.flats = flat);
       this.router.navigate(['/navbar/flat-management/flatrent/update']);
  }

  cancel() {
    this.router.navigate(['/navbar/flat-management/flatrent/update'])
  }

  on_click1()
  {
  alert('Updated Successfully !!!!');
  }
}

