import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Security } from 'src/app/Model/Security.model';
import { SecurityService } from 'src/app/service/security.service';



@Component({
  selector: 'update-Security',
  template: `
  <body style="background-image: url('/assets/security/security1.jpeg');" >
  <div class="container">
  <form [formGroup]="secureForm" autocomplete="off" novalidate (ngSubmit)="updateSecurity(secureForm.value)">
  <div class="form-group" >
    <label for="msgId">Message Id:</label>
        <input id="msgId" type="text" required class="form-control" formControlName="msgId"  readonly [ngModel]=secur?.msgId />
  </div>
  <div class="form-group" >
    <label for="message">Message:</label>
    <em *ngIf="secureForm.controls.message?.invalid && (secureForm.controls.message?.touched)">Required</em>
    <em *ngIf="secureForm.controls.message?.errors?.minlength">Enter Full Message</em>      
    <input  id="message" type="text" required class="form-control" formControlName="message" required minlength="4" [ngModel]=secur?.message />
  </div>
  <div class="form-group" >
  <em *ngIf="secureForm.controls.alert?.invalid && (secureForm.controls.alert?.touched)">Required</em>
  <em *ngIf="secureForm.controls.alert?.errors?.minlength">Enter Full Alert Message</em>
  <label for="alert">Alert:</label>
      <input id="alert" required type="text" class="form-control" formControlName="alert" required minlength="4" [ngModel]=secur?.alert />
  </div>
  
  <button type="submit"  [disabled]=secureForm.invalid class="btn btn-primary">Update</button>
  <button type="button"   class="btn btn-primary" (click)="cancel()">Cancel</button>
  </form>
  </div>
  </body>

  `,
  styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
},

)


export class UpdateSecurityComponent implements OnInit{
 
  msgId : String
  secur : Security; 
  secureForm:FormGroup;
  constructor(private router: Router, private securityService: SecurityService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.secureForm=new FormGroup({
      msgId:new FormControl(),
      message:new FormControl(),
      alert:new FormControl()
    })
    console.log("on init called *")
   this.securityService.getsecureById(this.activatedRoute.snapshot.params['mid']).subscribe(dh => this.secur = dh);

    
  }

  updateSecurity(secur){
       this.securityService.updateSecurity(secur).subscribe(pipe());
       this.router.navigate(['/navbar/securityM/security']);
  }

  
  cancel() {
    this.router.navigate(['/navbar/securityM/security'])
  }


}