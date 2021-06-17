

  import { Component,Input,Output, EventEmitter, OnInit} from '@angular/core';


  @Component({
    selector: 'allguardsalary',
    template:`<div>
    <div class="well hoverwell thumbnail py-3 my-3">
        <div > USER ID : {{guarddata?.userId}} </div>
        <div>GUARD TRAINIE NAME : {{guarddata?.name | titlecase}} </div>
        <!--
        <div>AMOUNT : {{guarddata?.amount}} </div>
        <div>STATUS : {{guarddata?.status | titlecase}} </div>
        <div>DATE : {{guarddata?.date | titlecase}} </div>
        -->
        <div>
            <span> <button [class]=buttonStyle  (click)="on_click1()" (click)="onButtonClick()" [routerLink]="['/navbar/guard-management/GuardSalary/userId',guarddata.userId]"> View Details</button></span>
        </div>

        <!--<div>
        <span> <button [class]=buttonStyle (click)="onButtonClick()" [routerLink]="['/navbar/guard-management/GuardSalary/name',guarddata.name]"> View By Name</button></span>
    </div> -->

    </div>
  </div>`,
  })
 
export class AllGuardSalaryComponent{
    @Input() guarddata;  // property receiving the data from parent using property binding
    // We can create custom event 
     @Output() customEvent =  new EventEmitter(); //   (customEvent) = "someFunction"
   
     isDisabled = true ;  
     buttonStyle = "btn btn-primary";
      
     public i:number=10;
  
     myFunction(){
       this.isDisabled = false
       this.buttonStyle = "btn btn-success";
     }

     on_click1()
     {
     alert('Viewing all Guard Shift details');
     }
  
   
     onButtonClick(){
       this.customEvent.emit(this.guarddata);  // what ever is send  by default get stored into one javascript '$event'
     }
  
    
  
  }
