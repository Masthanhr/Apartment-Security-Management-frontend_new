import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardSalary } from 'src/app/model/guardsalary.model';
import { GuardService } from 'src/app/service/guard.service';


@Component({
  selector: 'guardsalarybyname',
  template: `
  <body style="background-color:#C0C0C0">
  <div>
  <!--
  <div class="well hoverwell thumbnail py-3 my-3">
      <div>GUARD TRAINIE NAME : {{guard?.name | titlecase}} </div>
      <div>AMOUNT : {{guard?.amount}} </div>
      <div>STATUS : {{guard?.status | titlecase}} </div>
      <div>DATE : {{guard?.date | titlecase}} </div>
  </div>
  -->


  <form #searchform="ngForm" autocomplete="off" novalidate (ngSubmit)="validate(searchform.value)">
        <div class="form-group">
            <label for="name">Guard NAME :</label>
            <input id="name" type="text" required class="form-control" name="name" (ngModel)=guard.name
            placeholder="Enter guardName" >

          <em *ngIf="(searchform.controls.name?.invalid) && (searchform.controls.name?.touched)">
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
  
  <div *ngIf="guard && guard!=null" class="well hoverwell thumbnail py-3 my-3  ">

  <div>GUARD TRAINIE NAME : {{guard?.name | titlecase}} </div>
  <div>AMOUNT : {{guard?.amount}} </div>
  <div>STATUS : {{guard?.status | titlecase}} </div>
  <div>DATE : {{guard?.date | titlecase}} </div>
      
  </div>
  </div>
</div>
</body>`

})
export class GuardSalaryByNameComponent {
  private errorMessage='';

  private guard: GuardSalary;

  constructor(private guardService : GuardService, private activatedRoute: ActivatedRoute, private router: Router){
    // console.log("*****")
    // //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

    // this.guardService.getGuardSalaryByName(activatedRoute.snapshot.params['fname']).subscribe(f => this.guard = f);
  }
  ngOnInit() {
    this.errorMessage="";
    this.guard=null;
    // throw new Error('Method not implemented.');
  }


  
  validate(guardname){
    console.log("***********"+guardname.name);
    this.guardService.getGuardSalaryByName(guardname.name).pipe().subscribe(
      (guardData) => {this.ngOnInit(),this.guard = guardData},
      (error) => {this.ngOnInit(),this.errorMessage = error},
        );
      
  }


}