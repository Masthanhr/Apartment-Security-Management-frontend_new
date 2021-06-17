import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';





@Component({
  selector: 'user',
  template: `<div class= "row-auto">
 <body style="background-color:#C0C0C0">
   <div class="well hoverwell thumnail">
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
             
     <td >
      <button class="btn btn-primary" title="delete user" (click)=" on_click1()" (click)=delete(userinfo.userId) >Delete</button>
     </td>

   <td>
     <button class="btn btn-primary" title="update user" (click)=" on_click()" (click)=updateUser(userinfo.userId)>Update</button>
   </td>
   </tr>
               
   </table>
   </div>
   </body> 
`,
})


export class UserByIdComponent {

  private userinfo: User;

  // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
  constructor(private userService:UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    //  this.visitorService.getVisitorById(+activatedRoute.snapshot.params['fno']).subscribe(c => this.visitorinfo =c); // Capture id from URL and passit to service
  }
  ngOnInit(): void {
    console.log("in a visitor Id init method****" + (+this.activatedRoute.snapshot.params['uid']))
    this.userService.getUserById(+this.activatedRoute.snapshot.params['uid']).subscribe(c => this.userinfo = c);

  }
  isDisabled = true;
  buttonStyle = "btn btn-primary btn-lg ";

  public i: number = 10;

  onClick() {
    // this.customEvent.emit(this.visitorinfo)
    alert("User By Id")
    console.log("message is printed")
  };


  delete(userId: number) {
    console.log(userId);
    this.userService.delete(userId).subscribe(data => this.userinfo = data);
    this.router.navigate(['/navbar/user-management/user']);
  }
  updateUser(uid) {
    console.log(uid);

    this.router.navigateByUrl("/navbar/user-management/updateuser/" + uid)
  }

  on_click()
    {
    alert('Do you want to Update!!!!!!!!!!');
    }

    on_click1()
    {
    alert('Deleted Successfully!!!');
    }


}