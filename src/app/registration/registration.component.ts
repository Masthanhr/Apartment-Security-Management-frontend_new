import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  private userData: Admin = new Admin("", "",0,"","","","");
  email: string;
  no: number;
  private adminDb : Admin;
 
  registrationForm: FormGroup;
  isDisabled: string;
  invalidData: string;

  constructor(private router: Router, private adminService: AdminService, @Inject(DOCUMENT)private document:Document) {}

  ngOnInit(){
  
    console.log("* add flat *")

    this.registrationForm = new FormGroup
    ({
        
          firstName : new FormControl(),
          lastName : new FormControl(),
          password : new FormControl(),
          phoneNo : new FormControl(),
          adminId : new FormControl(),
          emailId : new FormControl(),

    });
    
  }

  on_click1()
  {
  alert('Registered Successfully!!!!!!!!!!');
  }
    
  validate(newAdmin : Admin){
  this.adminService.insertAdminInfo(newAdmin).subscribe(admin => this.adminDb = admin );
  this.router.navigate([''])
}
}