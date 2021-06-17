import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'update-user',
  template: `
  <body style="background-color:#C0C0C0">
  <div class = "container" style= "width:550px">
  <div style ="text-align:center;">
  <h2><b>Update User Details</b></h2>
  </div>
  <form [formGroup]="updateForm" autocomplete="on" novalidate (ngSubmit)="updateUser(updateForm.value)">
  
  <div class="form-group" >
    <label for="userId">User Id:</label>
    <em *ngIf="updateForm.controls.userId?.invalid && (updateForm.controls.userId?.touched)">Required</em>
    <input  id="userId" type="text" required class="form-control" formControlName="userId"  [ngModel]=user?.userId placeholder="Name of user..." />
  </div>

  <div class="form-group" >
    <label for="firstName">First Name:</label>
    <em *ngIf="(updateForm.controls.firstName?.invalid) && (updateForm.controls.firstName?.touched)">Required</em>
    <input  id="firstName" required type="text"   class="form-control" formControlName="firstName"  [ngModel]=user?.firstName placeholder="Enter first Name..." />
  </div>

  <div class="form-group" >
    <label for="lastName">Last Name:</label>
    <em *ngIf="(updateForm.controls.lastName?.invalid) && (updateForm.controls.lastName?.touched)">Required</em>
    <input  id="lastName" required type="text"   class="form-control" formControlName="lastName"  [ngModel]=user?.lastName placeholder="Enter last Name..." />
  </div>

  <div class="form-group" >
  <label for="loginId">Login Id:</label>
  <em *ngIf="updateForm.controls.loginId?.invalid && (updateForm.controls.loginId?.touched)">Required</em>
  <input  id="loginId" type="text" required class="form-control" formControlName="loginId"  [ngModel]=user?.loginId placeholder="Name of loginId..." />
  </div>


  <div class="form-group" >
    <label for="password">Password:</label>
    <em *ngIf="(updateForm.controls.password?.invalid) && (updateForm.controls.password?.touched)">Required</em>
    <input  id="password" required type="text"   class="form-control" formControlName="password"  [ngModel]=user?.password placeholder="Enter password..." />
  </div>

  <div class="form-group" >
    <label for="mobileNo">Mobile No:</label>
    <em *ngIf="updateForm.controls.mobileNo?.invalid && (updateForm.controls.mobileNo?.touched)">Required</em>
    <input  id="mobileNo" type="text" required class="form-control" formControlName="mobileNo" [ngModel]=user?.mobileNo placeholder="Name of mobileNo..." />
  </div>
  
  <div class="form-group" >
  <label for="emailId">Email Id:</label>
  <em *ngIf="updateForm.controls.emailId?.invalid && (updateForm.controls.emailId?.touched)">Required</em>
  <input  id="emailId" type="text" required class="form-control" formControlName="emailId"  [ngModel]=user?.emailId placeholder="Name of emailId..." />
</div>

  <div class="form-group" >
    <label for="roleId">Role Id:</label>
    <em *ngIf="updateForm.controls.roleId?.invalid && (updateForm.controls.roleId?.touched)">Required</em>
    <input  id="roleId" type="text" required class="form-control" formControlName="roleId"  [ngModel]=user?.roleId placeholder="Name of roleId..." />
  </div>

  <button type="submit" (click)=" on_click()"  [disabled]=updateForm.invalid class="btn btn-primary" >Update</button>
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  </div>
  </body>
   
`,
})
export class UpdateUserComponent  implements OnInit {
 
 
  
    user: User; 
    updateForm : FormGroup;
    constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) {
    }
  
    ngOnInit(): void {
      this.updateForm = new FormGroup
      ({
        userId : new FormControl(),
        firstName : new FormControl(),
        lastName : new FormControl(),
        loginId : new FormControl(),
        password : new FormControl(),
        mobileNo : new FormControl(),
        emailId : new FormControl(),
        roleId : new FormControl(),

  
      });
  

     this.userService.getUserById(+this.activatedRoute.snapshot.params['uid']).subscribe(user => this.user = user );
    }
  
    updateUser(newUser){
         this.userService.updateUser(newUser).subscribe(user => this.user = user );
         this.router.navigate(['/navbar/user-management/user']);
         console.log(newUser)
         console.log("updated user******")
    }

    on_click()
    {
    alert('Updated Successfully');
    }
  
}