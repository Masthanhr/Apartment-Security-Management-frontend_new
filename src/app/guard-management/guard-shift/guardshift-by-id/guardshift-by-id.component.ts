import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardShift } from 'src/app/model/guardshift.model';
import { GuardService } from 'src/app/service/guard.service';


@Component({
  selector: 'guardshiftbyid',
  templateUrl:'./guardshift-by-id.component.html',

})
export class GuardShiftByIdComponent {
  private errorMessage;

  private guardShift: GuardShift;
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

    this.guardService.getGuardShiftById(+activatedRoute.snapshot.params['fid']).subscribe(f => this.guardShift = f,(error) => {this.errorMessage = error});
  }

  updateGuardShift(fid){
    this.router.navigateByUrl("/navbar/guard-management/GuardShift/update/"+fid)
}



}