import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-management',
  templateUrl: './flat-management.component.html' ,
  styleUrls: ['./flat-management.component.css']
})
export class FlatManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/* [routerLinkActive]="active-link" [routerLinkActiveOptions]="{exact:true}"  



<li><a [routerLink]="['./flats']">Flats</a></li>
                    <li><a [routerLink]="['./new']">Create Flat</a></li>
                    <li><a [routerLink]="['./delete']">Delete Flat</a></li>
                    <li><a [routerLink]="['./update']">Update Flat</a></li>
                    <li><a [routerLink]="['./name']">Flat By Name</a></li>








*/