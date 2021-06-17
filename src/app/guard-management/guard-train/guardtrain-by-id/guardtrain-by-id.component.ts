import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGuard } from 'src/app/model/guardtrain.model';
import { GuardService } from 'src/app/service/guard.service';


@Component({
  selector: 'guardtrainbyid',
  templateUrl:'./guardtrain-by-id.component.html',
})
export class GuardTrainByIdComponent {

  private guard: IGuard;
  private delete: any;
  private errorMessage;

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

    this.guardService.getGuardtrainById(+activatedRoute.snapshot.params['fid']).subscribe(f => this.guard = f,(error) => {this.errorMessage = error});
  }

  updateGuardTrain(fid){
    this.router.navigateByUrl("/navbar/guard-management/GuardTraining/update/"+fid)
}


}