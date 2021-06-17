import { Component, OnInit } from '@angular/core';
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
              
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Id</th>
              <th>Login Id</th>
              <th>Password</th>
              <th>Mobile No</th>
              <th>Email Id</th>
              <th>Role Id</th>
              </tr>
              
              <tr>    

              
              <td>{{userinfo?.firstName}}</td>
              <td>{{userinfo?.lastName}}</td>
              <td>{{userinfo?.userId}}</td>
              <td>{{userinfo?.loginId}}</td>
              <td> {{userinfo?.password}}</td>
              <td>{{userinfo?.mobileNo}}</td>
              <td>{{userinfo?.emailId}}</td>
              <td>{{userinfo?.roleId}}</td>
              </tr>
               
              </table>

   </div> 
   </body>
`,
})


export class UserByNameComponent implements OnInit{

  private userinfo : User;

  constructor(private userService : UserService, private activatedRoute: ActivatedRoute , private router : Router) {
      //  this.visitorService.getVisitorById(+activatedRoute.snapshot.params['fno']).subscribe(c => this.visitorinfo =c); // Capture id from URL and passit to service
  }
  ngOnInit(): void {
    console.log("in an user Id init method****" +(this.activatedRoute.snapshot.params['uname']))
    this.userService.getUserByName(this.activatedRoute.snapshot.params['uname']).subscribe(c => this.userinfo =c);
 
   }
  isDisabled = true;
  buttonStyle = "btn btn-primary btn-lg ";

  public  i : number = 10;

  onClick() {
    // this.customEvent.emit(this.visitorinfo)
    alert("Do u want to see details?")
    console.log("******++++message is printed")

  };

  
 
  
}