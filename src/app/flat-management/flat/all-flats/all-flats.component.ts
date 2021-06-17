 import { Component, OnInit } from '@angular/core';
  import { observable, Observable } from 'rxjs';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';
 
  
  @Component({
    selector: 'flats',
    templateUrl: './all-flats.component.html'
    
    
                
                ,
                
                styleUrls: ['./all-flats.component.css'],
                

  
  })
  export class AllFlatsComponent implements OnInit {
  
    p: number=1;

    parentFunction(event) {
      console.log(event);
    }
  
    
    private flats: cflat[];
  
    constructor(private flatService : FlatService){
     
    
  }
  
  ngOnInit(){
    console.log("***********all flats**************");
    
    this.flatService.getAllflats().subscribe(flatdata => this.flats = flatdata)
  
  }
  
  
  
    
  }
  
 
  
  