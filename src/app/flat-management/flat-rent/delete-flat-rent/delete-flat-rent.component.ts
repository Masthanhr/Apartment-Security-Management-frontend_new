import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { crent } from 'src/app/model/flatrent.model';
import { FlatRentService } from 'src/app/service/flatrent.service';


@Component({
  selector: 'deleteflatRent',
  template:`
  <body>
  <div class="container" >
    <h1>Delete on Flat Details</h1>
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
              <button class="btn btn-danger " (click) = "on_click1()" type="submit" (click)="deleteflat(flatrent.userId)" > DELETE 
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
 styleUrls: ['./delete-flat-rent.component.css'],
})
export class DeleteFlatRentComponent implements OnInit {
 
  p: number=1;
    
  
    private flatrent: crent[];
    private delete: crent;
    
  
  
    constructor(private flatrentService : FlatRentService, private activatedRoute: ActivatedRoute, private router: Router){
        
      

    }

    ngOnInit(){
      console.log("***********delete flat**************");
      console.log("***********all flats**************");
      this.flatrentService.getAllflatRents().subscribe(flatdata => this.flatrent = flatdata)
    }

  
    deleteflat(userId: number){
      console.log("************ delete*********");
      this.flatrentService.deleteflatRent(userId).subscribe(data => this.delete= data);
      this.router.navigate(['/navbar/flat-management/flatrent/rents']);
    }


    on_click1()
  {
  alert('Deleted Successfully !!!!');
  }
  

  
  
}

    

  


