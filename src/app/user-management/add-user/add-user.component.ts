  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  // import { FormsModule } from '@angular/forms';
  import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

  
  @Component({
    selector: 'create-user',
    template: `
  <body style="background-color:#C0C0C0">
    <div class = "container" style= "width:550px">
    <div style ="text-align:center;">
    <h2><b>New User Registeration</b></h2>
    </div>
    <form [formGroup]="createForm" autocomplete="on" novalidate (ngSubmit)="addUser(createForm.value)">
    
    <div class="form-group" >
      <label for="userId">User Id:</label>
      <em *ngIf="createForm.controls.userId?.invalid && (createForm.controls.userId?.touched)">Required</em>
      <input  id="userId" type="text" required class="form-control" formControlName="userId"  [ngModel]=user?.userId placeholder="Name of user..." />
    </div>
  
    <div class="form-group" >
      <label for="firstName">First Name:</label>
      <em *ngIf="(createForm.controls.firstName?.invalid) && (createForm.controls.firstName?.touched)">Required</em>
      <input  id="firstName" required type="text"   class="form-control" formControlName="firstName"  [ngModel]=user?.firstName placeholder="Enter first Name..." />
    </div>
  
    <div class="form-group" >
      <label for="lastName">Last Name:</label>
      <em *ngIf="(createForm.controls.lastName?.invalid) && (createForm.controls.lastName?.touched)">Required</em>
      <input  id="lastName" required type="text"   class="form-control" formControlName="lastName"  [ngModel]=user?.lastName placeholder="Enter last Name..." />
    </div>
  
    <div class="form-group" >
    <label for="loginId">Login Id:</label>
    <em *ngIf="createForm.controls.loginId?.invalid && (createForm.controls.loginId?.touched)">Required</em>
    <input  id="loginId" type="text" required class="form-control" formControlName="loginId"  [ngModel]=user?.loginId placeholder="Name of loginId..." />
    </div>
  
  
    <div class="form-group" >
      <label for="password">Password:</label>
      <em *ngIf="(createForm.controls.password?.invalid) && (createForm.controls.password?.touched)">Required</em>
      <input  id="password" required type="text"   class="form-control" formControlName="password"  [ngModel]=user?.password placeholder="Enter password..." />
    </div>
  
    <div class="form-group" >
      <label for="mobileNo">Mobile No:</label>
      <em *ngIf="createForm.controls.mobileNo?.invalid && (createForm.controls.mobileNo?.touched)">Required</em>
      <input  id="mobileNo" type="text" required class="form-control" formControlName="mobileNo"  [ngModel]=user?.mobileNo placeholder="Name of mobileNo..." />
    </div>
  
    <div class="form-group" >
      <label for="emailId">Email Id:</label>
      <em *ngIf="createForm.controls.emailId?.invalid && (createForm.controls.emailId?.touched)">Required</em>
      <input  id="emailId" type="text" required class="form-control" formControlName="emailId"  [ngModel]=user?.emailId placeholder="Name of user..." />
    </div>
  
    <div class="form-group" >
      <label for="roleId">Role Id:</label>
      <em *ngIf="createForm.controls.roleId?.invalid && (createForm.controls.roleId?.touched)">Required</em>
      <input  id="roleId" type="text" required class="form-control" formControlName="roleId"  [ngModel]=user?.roleId placeholder="Name of roleId..." />
    </div>
  
  
      <button type="submit" (click)=" on_click()"  [disabled]=createForm.invalid class="btn btn-primary">Save</button>
      <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
      </form>
    </div>
    </body>`,
    styles: ['em{float:right; color: #E05c65; padding-left-10px;}']
  })
  
  export class AddUserComponent implements OnInit {
  
   user : User;
   createForm: FormGroup;
   
   constructor(private router: Router, private userService: UserService) {
    }
  
    ngOnInit(){
  
      console.log("* add flat *")
  
      this.createForm = new FormGroup
      ({
            userId : new FormControl(),
            firstName : new FormControl(),
            lastName : new FormControl(),
            loginId : new FormControl(),
            password : new FormControl(),
            mobileNo : new FormControl(),
            roleId : new FormControl(),
            emailId : new FormControl(),
  
      });
      
    }
  
    
    addUser(newUser) {
      this.userService.addUser(newUser).subscribe(user => this.user = user);
      this.router.navigate(['/navbar/user-management/user'])
      console.log(newUser)
      console.log("added new user")
      
    }
  
    cancel() {
      this.router.navigate(['/navbar/user-management/user'])
    }

    on_click()
    {
    alert('User Added Successfully');
    }
  }
