import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardShift } from 'src/app/model/guardshift.model';
import { GuardService } from 'src/app/service/guard.service';


@Component({
  selector: 'guardshiftbyname',
  template: `
  <body style="background-color:#C0C0C0">
  <div>

  <form #searchform="ngForm" autocomplete="off" novalidate (ngSubmit)="validate(searchform.value)">
        <div class="form-group">
            <label for="name"> NAME :</label>
            <input id="name" type="text" required class="form-control" name="name" (ngModel)=guard.name
            placeholder="Enter your Name" >

          <em *ngIf="searchform.controls.name?.invalid && (searchform.controls.name?.touched)">
            Name can't be empty. </em>
        </div>

        <button type="submit"  [disabled]=searchform.invalid class="btn btn-primary">Search</button>
      </form>
  </div>
<br>
<br>
<br>
<div class="container">
<div  class= "row row-cols-3">
  <div *ngIf="errorMessage" class="alert alert-danger  text-center">
  {{errorMessage?.error?.details | json}}
  </div>
  
  <div *ngIf="guardshift && guardshift!=null" class="well hoverwell thumbnail py-3 my-3  ">
      
  <div>GUARD TRAINIE NAME : {{guardshift?.name | titlecase}}</div>
  <div>GUARD USER ID : {{guardshift?.userId | titlecase}}</div>
  <div>TIME : TIME : {{guardshift?.time | titlecase}}</div>
  <div>STATUS DATE : {{guardshift?.date | titlecase}}  </div>
      
  </div>
  </div>
</div>
</body> `

})
export class GuardShiftByNameComponent {
  private errorMessage='';

  private guardshift: GuardShift;
  constructor(private guardService : GuardService, private activatedRoute: ActivatedRoute, private router: Router){
    // console.log("*****")
    // //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

    // this.guardService.getGuardShiftByName(activatedRoute.snapshot.params['fname']).subscribe(f => this.guardshift = f,(error) => {this.errorMessage = error});
  }

  ngOnInit() {
    this.errorMessage="";
    this.guardshift=null;
    // throw new Error('Method not implemented.');
  }

  validate(guardname){
    console.log("***********"+guardname.name);
    this.guardService.getGuardShiftByName(guardname.name).pipe().subscribe(
      (guardData) => {this.ngOnInit(),this.guardshift = guardData},
      (error) => {this.ngOnInit(),this.errorMessage = error},
     
        );
      
  }


}