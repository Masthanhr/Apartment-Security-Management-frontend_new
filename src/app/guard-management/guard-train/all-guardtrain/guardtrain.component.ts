import { Component, OnInit } from "@angular/core";
import { observable, Observable } from "rxjs";
import { IGuard } from "src/app/model/guardtrain.model";
import { GuardService } from "src/app/service/guard.service";

@Component({
  selector: "guardtrain",
  template: `
      <body style="background-color:#C0C0C0">
        <div class="container" >
          <div >
                <h1>Guard Training Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let guards of guards | paginate: {itemsPerPage: 3,currentPage:p}" class="col-md-6 ">  
                        <allguardtrain #allguards [guarddata] = guards  (customEvent)="parentFunction($event)" ></allguardtrain>
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
      </body>`,
})
export class GuardTrainComponent {
  p: number = 1;

  //private guardService:GuardService;
  private guards: IGuard[];
  //private guardService:GuardService

  constructor(
    private guardService: GuardService //Dependency injection
  ) {
    //this.guardService=new GuardService;
    this.guardService
      .getAllGuardTrain()
      .subscribe((guarddata) => (this.guards = guarddata));
  }

  parentFunction(event) {
    console.log(event);
  }
}

function ngOnInit() {
  throw new Error("Function not implemented.");
}
