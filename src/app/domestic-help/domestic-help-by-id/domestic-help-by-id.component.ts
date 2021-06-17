import {Component,OnInit} from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
import { DomesticHelp } from 'src/app/Model/DomesticHelp.model';
import { DomesticService } from 'src/app/service/domestichelp.service';
  
  @Component({
      selector: 'domById',
      templateUrl:`./domestic-help-by-id.component.html`,
      // template: `<div  *ngFor="let domHelp of domestic" class="col-md-6 ">  </div>
      // <div> {{domestic}} </div>`
      // styleUrls:['./domestic.component.css']
  })
  export class DomesticHelpByIdComponent implements OnInit {
      
      private domHelp: DomesticHelp;
      private errorMessage;
    // router: Router;
  
    // Capture the course id from URL  ActivatedRoute, ActivatedRouterSnapshot
    constructor(private domesticService: DomesticService, private activatedRoute: ActivatedRoute,private router:Router) {
    }
      ngOnInit(){
        console.log("get by id method of Component*****");
          this.domesticService.getDomById(this.activatedRoute.snapshot.params['fid']).subscribe((f) => {this.domHelp = f},
                                                                                              (error)=>{this.errorMessage=error}); // Capture id from URL and passit to service
    }
    deleteHelp(flatNo:String){
      console.log(flatNo);
      this.domesticService.deleteHelp(flatNo).subscribe(data => this.domHelp=data);
      this.router.navigate(['/navbar/domestic-help/domHelp']);
    }
  
    updateHelp(flatNo:String){
      this.router.navigateByUrl("/navbar/domestic-help/update/"+flatNo)
  }
  on_click()
  {
  alert('Deleted Successfully');
  }

 

  
  }
