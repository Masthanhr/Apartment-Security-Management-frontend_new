import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';


@Component({
  selector: 'deleteflat',
  template:`
  <body>
  <div class="container" >
    <h1>Delete on Flat Details</h1>
    <hr/>
    <div  class= "row row-cols-2">
    <div  *ngFor="let flats of flats  | paginate: {itemsPerPage: 4,currentPage:p}" class="col-md-4 " > 
   
                           
          <div class="well hoverwell thumbnail py-3 my-3" >
          
            <div > USER ID : {{flats?.userId}} </div>
              <div> OWNER NAME : {{flats?.ownerName | titlecase}} </div>
              <div>FLAT NO : {{flats?.flatNo | titlecase}} </div>
              <div>FLOOR NO : {{flats?.floorNo | titlecase}} </div>
              <div> FLAT TYPE : {{flats?.flatType | titlecase}} </div>
              <div>
              <button class="btn btn-danger " (click) = "on_click1()" type="submit" (click)="deleteflat(flats.userId)" > DELETE 
              </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      </body>
    


    <footer>
    <pagination-controls (pageChange)="p=$event"></pagination-controls>
    </footer>`,
    styleUrls: ['./delete-flat.component.css'],
})



export class DeleteFlatComponent implements OnInit {
 
  p: number=1;
  
    
  
    private flats: cflat[];
    private delete: cflat;
    
  
  
    constructor(private flatService : FlatService, private activatedRoute: ActivatedRoute, private router: Router){
        
      

    }

    ngOnInit(){
      console.log("***********delete flat**************");
      console.log("***********all flats**************");
      this.flatService.getAllflats().subscribe(flatdata => this.flats = flatdata)
    }

  
    deleteflat(userId: number){
      console.log("************ delete*********");
      this.flatService.Deleteflat(userId).subscribe(data => this.delete= data);
      this.router.navigate(['/navbar/flat-management/flat/flats']);
    }

    on_click1()
    {
    alert('Deleted Successfully');
    }

   
  

  
  
}

    

  



