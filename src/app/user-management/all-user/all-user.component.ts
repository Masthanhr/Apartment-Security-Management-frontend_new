import { Component, Input,Output,EventEmitter} from '@angular/core';
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'alluser',
  template: `<div class= "row-auto">
             
              <div class="well hoverwell thumnail py-3 my-3"> 
              <table class="table table-bordered">
              <tr>
              <th>User Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Login Id</th>
              <th>Password</th>
              <th>Mobile No</th>
              <th>Email Id</th>
              <th>Role Id</th>
              </tr>
              
              <tr>    
              <td>{{userinfo?.userId}}</td>
              <td>{{userinfo?.firstName}}</td>
              <td>{{userinfo?.lastName}}</td>
              <td>{{userinfo?.loginId}}</td>
              <td> {{userinfo?.password}}</td>
              <td>{{userinfo?.mobileNo}}</td>
              <td>{{userinfo?.emailId}}</td>
              <td>{{userinfo?.roleId}}</td>
              <td>
                <button [class]=buttonStyle (click) = " on_click2()" [routerLink]="['/navbar/user-management/user',userinfo.firstName]">  View by Name  </button>    
              </td>
              <td>
                <button [class]=buttonStyle (click) = "on_click1()" [routerLink]="['/navbar/user-management/user/id',userinfo.userId]">  View by ID  </button> 
              </td>
              </tr>
               
              </table>
              
              </div>
              </div>
             `,
})
export class AllUserComponent {
  @Input() userinfo : User[];
  @Output() customEvent = new EventEmitter();


  isDisabled = true;
  buttonStyle = "btn btn-primary ";

  public  i : number = 10;

  myFunction() {
    this.isDisabled = false
    this.buttonStyle = "btn btn-success ";
  }

 
  onClick() {
    this.customEvent.emit(this.userinfo)
    console.log("message is printed")


  };

  on_click1()
    {
    alert('User By Id');
    }

    on_click2()
    {
    alert('User By Name');
    }
}