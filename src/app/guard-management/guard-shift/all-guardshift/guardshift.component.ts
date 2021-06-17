import { Component, OnInit } from '@angular/core';
import { GuardShift } from 'src/app/model/guardshift.model';
import { GuardService } from 'src/app/service/guard.service';


@Component({
  selector: 'guardshift',
  template: `
  <body style="background-color:#C0C0C0">
  <div class="container" >
  <div >
                <h1>Guard Shift Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let guards of guards | paginate: {itemsPerPage: 5,currentPage:p}" class="col-md-4 ">  
                        <allguardshift #allguards [guarddata] = guards  (customEvent)="parentFunction($event)" ></allguardshift>
                        <!-- <div>
                        {{allguards.i}}
                        {{allguards.testmyFunction()}}
                        </div> 
                        -->

                  </div>
                  
              </div>
              <div style="background-color:#17a2b8">
                <pagination-controls (pageChange)="p=$event"></pagination-controls>
                </div>
                </div>
                </div>
                </body>`

})
export class GuardShiftComponent {

  p: number=1;
  //private guardService:GuardService;
  private guards:GuardShift[];
  //private guardService:GuardService


  constructor(private guardService:GuardService )         //Dependency injection
  {
    //this.guardService=new GuardService;
    this.guardService.getAllGuardShift().subscribe(guarddata => this.guards = guarddata);
  } 




  parentFunction(event) {
    console.log(event);
  }


}

function ngOnInit() {
  throw new Error('Function not implemented.');
}