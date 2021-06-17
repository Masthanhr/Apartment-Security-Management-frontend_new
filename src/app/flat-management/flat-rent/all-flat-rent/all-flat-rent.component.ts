import { Component,Input,Output, EventEmitter} from '@angular/core';
import { crent } from 'src/app/model/flatrent.model';


@Component({
  selector: 'allflatrents',
  template:`
  <body>
  <div class="container">   
                                
  <div class="well hoverwell thumbnail py-3 my-3" [routerLink]="['./id',flatrentdata.userId]">
  
    <div > USER ID : {{flatrentdata?.userId}} </div>
      <div> OWNER NAME : {{flatrentdata?.ownerName | titlecase}} </div>
      <div>FLAT NO : {{flatrentdata?.flatNo | titlecase}} </div>
      <div>AMOUNT : {{flatrentdata?.amount |currency:"INR"}} </div>
      <div> FLAT TYPE : {{flatrentdata?.flatType | titlecase}} </div>
      <div>
          <!-- <span> <input type="text" (click) = "on_click1()" value="Hello" (keypress) = "myFunction()"></span><br/>-->
          <span> <button [class]=buttonStyle (click)="onButtonClick()"  [routerLink]="['./id',flatrentdata.userId]"> View </button></span>
      </div>
    </div>
  </div>
  
  </body>`,
styleUrls: ['./all-flat-rent.component.css'],
})
export class AllFlatRentComponent {
  @Input() flatrentdata: crent[];  // property receiving the data from parent using property binding
  // We can create custom event 
   @Output() customEvent =  new EventEmitter(); //   (customEvent) = "someFunction"
 
   isDisabled = true ;  
   buttonStyle = "btn btn-primary";
    
   myFunction(){
     this.isDisabled = false
     this.buttonStyle = "btn btn-success";
   }
 
   onButtonClick(){
     this.customEvent.emit(this.flatrentdata);  // what ever is send  by default get stored into one javascript '$event'
   }

   on_click1()
    {
    alert('Flat Rent By Id');
    }

  

  

}
