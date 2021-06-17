import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { tap } from 'rxjs/operators';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';


@Component({
  selector: 'flatbyname',
  template:`
  <body>
  <div class="container" >
  <h1> Flat Details By Owner Name</h1>
  <hr/>
  <div  class= "row row-cols-2">
      <!-- <div  *ngFor="let flats of flats  | paginate: {itemsPerPage: 4,currentPage:p}" class="col-md-4 " > 
                         
        <div class="well hoverwell thumbnail py-3 my-3" >
        
            <div > USER ID : {{flats?.userId}} </div>
            <div> OWNER NAME : {{flats?.ownerName | titlecase}} </div>
            <div>FLAT NO : {{flats?.flatNo | titlecase}} </div>
            <div>FLOOR NO : {{flats?.floorNo | titlecase}} </div>
            <div> FLAT TYPE : {{flats?.flatType | titlecase}} </div>
            <div>
            <button class="btn btn-danger " type="submit" (click)="onButtonClick()" [routerLink]="['./',flats.ownerName]"> VIEW
            </button>
            </div>  
          </div>
        </div> -->

    <form #searchform="ngForm" autocomplete="off" novalidate (ngSubmit)="validate(searchform.value)">
        <div class="form-group">
            <label for="ownerName">OWNER NAME :</label>
            <input id="ownerName" type="text" required class="form-control" name="ownerName" (ngModel)=flatdata.ownerName
            placeholder="Enter your ownerName" >

          <em *ngIf="searchform.controls.ownerName?.invalid && (searchform.controls.ownerName?.touched)">
            ownerName can't be empty. </em>
        </div>

        <button type="submit" (click) = "on_click1()"  [disabled]=searchform.invalid class="btn btn-primary">Search</button>
      </form>
      </div>
      </div>
<br>
<br>
<br>
<div class="container">
<div  class= "row row-cols-3">
  <div *ngIf="errorMessage" class="alert alert-danger  text-center">
  {{errorMessage?.error?.details | json}}
  </div>
  
  <div *ngIf="flatdata" class="well hoverwell thumbnail py-3 my-3  ">
  <div *ngFor="let flat of flatdata " class="row row-cols-2">
      
      <div> OWNER NAME : {{flat?.ownerName | titlecase}} </div>
      <div>FLAT NO : {{flat?.flatNo | titlecase}} </div>
      <div>FLOOR NO : {{flat?.floorNo | titlecase}} </div>
      <div> FLAT TYPE : {{flat?.flatType | titlecase}} </div>
    </div>
      
  </div>
  </div>
</div>
        
    
    
    
    </body>


  <footer >
    <pagination-controls  (pageChange)="p=$event"></pagination-controls>
    </footer>
    
    
 `,
 styleUrls: ['./flat-by-name.component.css'],
})
export class FlatByNameComponent {

  p: number=1;
    constructor(private flatService : FlatService, private activatedRoute: ActivatedRoute, private router: Router){
            
    }

    on_click1()
  {
  alert('Flat By Owner Name !!!!');
  }

  private flatdata: cflat[];
  private errorMessage='';

  validate(flatname){
    console.log("***********"+flatname.ownerName);
    this.flatService.getFlatByName(flatname.ownerName).pipe().subscribe(
      (flat) => {this.flatdata = flat},
      (error) => {this.errorMessage = error},
     
        );
      
  }
  

  
  
}

    

  


