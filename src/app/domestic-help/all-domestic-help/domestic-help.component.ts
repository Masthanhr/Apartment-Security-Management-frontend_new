import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DomesticHelp } from 'src/app/Model/DomesticHelp.model';
import { DomesticService } from 'src/app/service/domestichelp.service';

@Component({
    selector: 'domHelp',
     templateUrl:`./domestic-help.component.html`,
    // template: `<div  *ngFor="let domHelp of domestic" class="col-md-6 ">  </div>
    // <div> {{domestic}} </div>`
    styleUrls:['./all-domestic-help.component.css']
})
export class DomesticComponent implements OnInit{
  
    private domestic:DomesticHelp[];
    

    // constructor(private courseService: DomesticService,private router: Router) {
    //     console.log("Get all method component clicked****");
    //     this.domestic = this.courseService.getAllHelp();
    //   }

      onButtonClick(id:String){
        console.log("Butoon clicked ******")
        // this.router.navigateByUrl('/domHelp/:{{domestic.flatId}}')
       this.router.navigate(['/navbar/domestic-help/domHelp/'+id]);
      }

      onButtonClick1(name:String){
        console.log("Butoon clicked ******")
       this.router.navigate(['/navbar/domestic-help/domHelp/nam/'+name]);
      }

    constructor(private domesticService:DomesticService,private router:Router){
    }
    ngOnInit(){
         console.log("Domestic Component Called********");
        // this.domestic=this.help.getAllHelp();
    this.domesticService.getAllHelp().subscribe(domArr => this.domestic = domArr);
    }

    on_click1()
    {
    alert('By Id');
    }

    on_click2()
    {
    alert('By Name');
    }

    
}