import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,FormGroup,FormControl} from '@angular/forms';
import { Security } from 'src/app/Model/Security.model';
import { SecurityService } from 'src/app/service/security.service';


@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent implements OnInit {

    private sec: Security //= new Security(null,null,null);
    secureForm:FormGroup;

    constructor(private router: Router, private securityService: SecurityService) {
    }

    ngOnInit(){
      console.log("**add security**")
      this.secureForm=new FormGroup({
        msgId:new FormControl(),
        message:new FormControl(),
        alert:new FormControl()
      });
    }
  
    addSecure(secure) {
      console.log("Add method called**********")
      this.securityService.addSecurity(secure).subscribe(sec => this.sec = sec);
      this.router.navigate(['/navbar/securityM/security'])
      console.log(secure)
    }
  
    cancel() {
      this.router.navigate(['/navbar/securityM/security'])
    }
    on_click()
    {
    alert('Added Successfully');
    }


 }