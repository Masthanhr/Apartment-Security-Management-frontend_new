import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'user',
  template: `
  <body style="background-color:#C0C0C0">
            <div class="container">
            <h2> User Component</h2>
                <div  *ngFor="let user of users | paginate: {itemsPerPage: 1 ,currentPage:p}"> 
                <alluser [userinfo] = user (customEvent) = "parentFunction($event)"></alluser>
                </div>
              <div style="background-color:blue">
              <pagination-controls (pageChange)="p=$event"></pagination-controls>
              </div>
            </div>
        </body>`
 
})
export class UserComponent {
  [x: string]: any;
  p: number=1;
  private users : User[];

  constructor(private userService: UserService) {
    console.log("usercomponent clicked****");
    //this.visitors = this.visitorService.getAllVisitors();
  //  let obs : Observable<Visitor[]> = this.visitorService.getAllVisitors();
  //   obs.subscribe(visitor => this.visitors = visitor);

  this.userService.getAllUser().subscribe(userarr => this.users = userarr);
  }

  parentFunction(event)
  { alert("Verify your Id")
    console.log(event);
  }

}