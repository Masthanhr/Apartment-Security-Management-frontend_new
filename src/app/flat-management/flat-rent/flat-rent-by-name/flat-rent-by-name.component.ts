import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { crent } from 'src/app/model/flatrent.model';
import { FlatRentService } from 'src/app/service/flatrent.service';


@Component({
  selector: 'flatRentbyname',
  template:`
  <body>
  <div class="container" >
  <h1> Flat Details By Name</h1>
  <hr/>
  <div  class= "row row-cols-2">
  <div  *ngFor="let flatrent of flatrent | paginate: {itemsPerPage: 6,currentPage:p}" class="col-md-4">   
                         
        <div class="well hoverwell thumbnail py-3 my-3" >
        
          <div > USER ID : {{flatrent?.userId}} </div>
            <div> OWNER NAME : {{flatrent?.ownerName | titlecase}} </div>
            <div>FLAT NO : {{flatrent?.flatNo | titlecase}} </div>
            <div>AMOUNT : {{flatrent?.amount | titlecase}} </div>
            <div> FLAT TYPE : {{flatrent?.flatType | titlecase}} </div>
            <div>
            <button class="btn btn-danger " (click) = "on_click1()" type="submit" (click)="onButtonClick()" [routerLink]="['./',flatrent.ownerName]"> VIEW
            </button>
            </div>
          </div>
        </div>
      

    </div>
  </div>
  </body>
  <footer>
    <pagination-controls (pageChange)="p=$event"></pagination-controls>
    </footer>
    
    
 `,
 styleUrls: ['./flat-rent-by-name.component.css'],
})
export class FlatRentByNameComponent implements OnInit{
  p: number=1;
    private flatrent: crent[];
    private name : crent;
    @Output() customEvent =  new EventEmitter();
  
  
    constructor(private flatrentService : FlatRentService, private activatedRoute: ActivatedRoute, private router: Router){
              

    }

    ngOnInit(){

      console.log("***all flats***");
      this.flatrentService.getAllflatRents().subscribe(flat => this.flatrent = flat);

     
    }

    onButtonClick(){
      this.customEvent.emit(this.flatrent);  // what ever is send  by default get stored into one javascript '$event'
    }
  
    on_click1()
    {
    alert('Flat Rent By Name');
    }

  

  
  
}

    

  


