import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';


@Component({
  selector: 'viewbyname',
  template:`

  <div *ngIf="errorMessage" class="alert alert-danger  text-center">
  {{errorMessage?.error?.details | json}}
  </div>
  
  
  <div class="container">
  <div  class= "row row-cols-3">
  
  <div *ngIf="flatdata" class="well hoverwell thumbnail py-3 my-3  ">
      
      <div> OWNER NAME : {{flatdata?.ownerName | titlecase}} </div>
      <div>FLAT NO : {{flatdata?.flatNo | titlecase}} </div>
      <div>FLOOR NO : {{flatdata?.floorNo | titlecase}} </div>
      <div> FLAT TYPE : {{flatdata?.flatType | titlecase}} </div>
      <div>
          

      </div>
  </div>
  </div>
</div>`,
})
export class ViewByNameComponent  {
    
    private flatdata: cflat;
    private errorMessage;
  
  
    constructor(private flatService : FlatService, private activatedRoute: ActivatedRoute, private router: Router){
        
      //this.flatdata =this.flatService.getFlatById(+activatedRoute.snapshot.params['fid']); //capture from URL and pass it to service
      console.log("************ view*********");
      this.flatService.getFlatByName(activatedRoute.snapshot.params['fname']).subscribe(
      (flat) => {this.flatdata = flat},
      (error) => {this.errorMessage = error},
        
        
        
        );

      
    }

    
     
      
    

    

  

}
