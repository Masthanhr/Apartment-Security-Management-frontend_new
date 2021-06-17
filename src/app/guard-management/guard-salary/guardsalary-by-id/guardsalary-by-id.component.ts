import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardSalary } from 'src/app/model/guardsalary.model';
import { GuardService } from 'src/app/service/guard.service';


@Component({
  selector: 'guardsalarybyid',
  templateUrl:'guardsalary-by-id.component.html',

})
export class GuardSalaryByIdComponent {
  private errorMessage;

  private guard: GuardSalary;
  private delete: any;

  on_click1()
  {
  alert('Deleted Id Successfully');
  }
  on_click2()
  {
  alert('Updated Id Successfully');
  }



  constructor(private guardService : GuardService, private activatedRoute: ActivatedRoute, private router: Router){
    console.log("*****")
    //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service

    this.guardService.getGuardSalaryById(+activatedRoute.snapshot.params['fid']).subscribe(f => this.guard = f,(error) => {this.errorMessage = error});
  }

  updateGuardSalary(fid){
    this.router.navigateByUrl("/navbar/guard-management/GuardSalary/update/"+fid)
}



}