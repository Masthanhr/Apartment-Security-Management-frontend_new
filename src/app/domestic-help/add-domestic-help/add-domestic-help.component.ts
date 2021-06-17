  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import {FormGroup, FormsModule, FormControl} from '@angular/forms';
import { DomesticHelp } from 'src/app/Model/DomesticHelp.model';
import { DomesticService } from 'src/app/service/domestichelp.service';
  
  
  
  
  @Component({
    selector: 'create-DomHelp',
    templateUrl:`./add-domestic-help.component.html`,
    styles: [`em{float:right; color: #E05c65; padding-left-10px;`]
  },
  
  )
  
  
  export class AddDomesticHelpComponent implements OnInit {
  
    private dom:DomesticHelp;
    newHelpForm:FormGroup
  
    // dom: DomesticHelp = new DomesticHelp(null,null,null,null,null,null,null);
    constructor(private router: Router, private domesticService: DomesticService) {
    }
    ngOnInit(){
      console.log("**Create help**")
      this.newHelpForm=new FormGroup({
        flatNo:new FormControl(),
        ownerName:new FormControl(),
        name:new FormControl(),
        arrivalTime:new FormControl(),
        departureTime:new FormControl(),
        dat:new FormControl(),
        helpType:new FormControl()
      });
    }
    addHelp(newHelp) {
      console.log("Add method called**********")
      this.domesticService.addHelp(newHelp).subscribe(dom => this.dom = dom);
      this.router.navigate(['/navbar/domestic-help/domHelp'])
      console.log(newHelp)
    }
  
    on_click()
    {
    alert('Added Successfully');
    }
    cancel() {
      this.router.navigate(['/navbar/domestic-help/domHelp'])
    }
  }
