import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cflat } from 'src/app/model/flat.model';
import { FlatService } from 'src/app/service/flat.service';


@Component({
  selector: 'createflat',
  templateUrl:  './add-flat.component.html', 
 
  styleUrls: ['./add-flat.component.css'],

}
)
export class AddFlatComponent implements OnInit {

  
  private flat: cflat;
  createForm: FormGroup;
  
  constructor(private router: Router, private flatService: FlatService) {
   
  }

  ngOnInit(){

    console.log("**** create flat ****")

    this.createForm = new FormGroup
    ({
          userId : new FormControl([null,Validators.required ]),
          ownerName : new FormControl(null,Validators.required),
          flatNo : new FormControl(null,Validators.required),
          floorNo : new FormControl(null,Validators.required),
          flatType : new FormControl(null,Validators.required)

    });

   
    
  }

  on_click()
    {
    alert('Added Successfully');
    }


  addFlat(newFlat: cflat) {
    this.flatService.addFlat(newFlat).subscribe(flat => this.flat = flat);
    this.router.navigate(['/navbar/flat-management/flat/flats'])
    console.log(newFlat)
  }

 

  cancel() {
    this.router.navigate(['/navbar/flat-management/flat/flats'])
  }






}

