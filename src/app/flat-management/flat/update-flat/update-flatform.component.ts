import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';





@Component({
  selector: 'updateflat',
  template: `
  <body>
  <div  class = "container" style="width:550px; background-color: pink"> 
  
 
  <form [formGroup]="updateForm" autocomplete="off" novalidate (ngSubmit)="updateFlat(updateForm.value)">

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
            <div *ngIf="(updateForm.controls.flatNo?.invalid) && (updateForm.controls.flatNo?.touched)" class="alert alert-danger">Required Flat No</div>
        </div>

 
        <div class="form-group" >
        <label for="floorNo">Floor No:</label>
       
        <input  id="floorNo"  required type="text" class="form-control" formControlName="floorNo" [ngModel]=flats?.floorNo placeholder="Enter Floor No..." />
        <div *ngIf="updateForm.controls.floorNo?.invalid && (updateForm.controls.floorNo?.touched)"class="alert alert-danger">Required Floor No</div>
        </div>

        <div class="form-group" >
        <label for="flatType">Flat Type:</label>
        <input  id="flatType"  required type="text" class="form-control" formControlName="flatType" [ngModel]=flats?.flatType placeholder="Enter Flat Type..." />
        <div *ngIf="updateForm.controls.flatType?.invalid && (updateForm.controls.flatType?.touched)"class="alert alert-danger">Required Flat Type</div>

        </div>


      <button type="submit" (click) = "on_click1()"  [disabled]=updateForm.invalid class="btn btn-warning">Update</button>&nbsp;
      <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
 
  </div>
</body>
  `,
}

)


export class UpdateFlatFormComponent implements OnInit {
 
  
  flats : cflat ; 
  updateForm : FormGroup;
  
  

  constructor(private router: Router, private flatService: FlatService, private activatedRoute: ActivatedRoute) {
    console.log("***********update flat form**************");
  }

  ngOnInit(): void {

    this.updateForm = new FormGroup
    ({
      userId : new FormControl(),
      ownerName : new FormControl(),
      flatNo : new FormControl(null,Validators.required),
      floorNo : new FormControl(null,Validators.required),
      flatType : new FormControl(null,Validators.required)

    });

   this.flatService.getFlatById(+this.activatedRoute.snapshot.params['fid']).subscribe(flat => this.flats = flat);

    
  }

  updateFlat(newFlat: cflat){
    console.log("********** update *********")
       this.flatService.updateFlat(newFlat).subscribe(flat => this.flats = flat);
       this.router.navigate(['/navbar/flat-management/flat/update']);
  }

  cancel() {
    this.router.navigate(['/navbar/flat-management/flat/update'])
  }

  on_click1()
  {
  alert('Updated Successfully !!!!');
  }
}

