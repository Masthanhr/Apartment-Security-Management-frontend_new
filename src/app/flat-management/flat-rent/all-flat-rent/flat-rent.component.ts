import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { crent } from 'src/app/model/flatrent.model';
import { FlatRentService } from 'src/app/service/flatrent.service';


@Component({
  selector: 'flatrent',
  template: `
  <body>
  <div class="container" >
                <h1>Flat Rent Details</h1>
                <hr/>
                <div  class= "row row-cols-2">
                <div  *ngFor="let flatrent of flatrent | paginate: {itemsPerPage: 6,currentPage:p}" class="col-md-4">  
                        <allflatrents  [flatrentdata] = flatrent  (customEvent)="parentFunction($event)" ></allflatrents>    
                      

                </div>
              </div>
              </div>
              </body>
    <footer>
    <pagination-controls (pageChange)="p=$event"></pagination-controls>
    </footer>
              `,

              styleUrls: ['./all-flat-rent.component.css'],

})
export class FlatRent1Component implements OnInit {

  p: number=1;

  parentFunction(event) {
    console.log(event);
  }

  
  private flatrent: crent[];

  constructor(private flatrentService : FlatRentService){
   
  
}

ngOnInit(){
  console.log("***********all flats**************");
  
  this.flatrentService.getAllflatRents().subscribe(flat => this.flatrent = flat)

}



  
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}

