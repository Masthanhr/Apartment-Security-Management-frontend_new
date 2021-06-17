import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  private adminDb : Admin[];
  userData : Admin = new Admin("", "");
  isDisabled: string;
  invalidData: string;
  loginForm: FormGroup;
  constructor(private adminService: AdminService , private router : Router) { }

  ngOnInit(){
  
    console.log("* add flat *")
    this.adminService.getAllDatabase().subscribe(adminarr => this.adminDb =adminarr)

    this.loginForm = new FormGroup
    ({
      firstName : new FormControl(),
      lastName : new FormControl(),
      password : new FormControl(),
      phoneNo : new FormControl(),
      adminId : new FormControl(),
      emailId : new FormControl(),

    });
    
  }
  validation(){
    console.log("validation");
    console.log(this.loginForm.value.emailId);
    console.log(this.loginForm.value.password);

    if(this.adminDb.find(admin => admin.emailId === this.loginForm.value.emailId)){
      if(this.adminDb.find(admin => admin.emailId === this.loginForm.value.emailId && admin.password === this.loginForm.value.password)){
      // this.isDisable = false;
      localStorage.setItem('isAdmin','admin');
        this.router.navigate(['/navbar'])
      }else{
        document.getElementById("errpassword").innerHTML = "Invalid User password";
      }
    }else{
      document.getElementById("erremailId").innerHTML = "Invalid EmailId";
    }
}
onButtonClick(buttonE){
  this.router.navigate(['/registration'])
 }

 onChange(emailId){
  // this.accountService.getAllUsers().subscribe(user => this.userArray = user );
      for(let e of this.adminDb){
          if(e.emailId==emailId.target.value){
              //this.signUpForm.controls.email.invalid=true;
              this.isDisabled="true";
              this.invalidData="true";
              alert("E-mail already exists..");
              console.log(e.emailId);
          }
          else{
              this.isDisabled="!registrationForm.valid";
          }
      }
  console.log(emailId.target.value);
}


}