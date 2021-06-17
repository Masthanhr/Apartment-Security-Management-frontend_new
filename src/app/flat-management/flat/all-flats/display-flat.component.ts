import { Component,Input,Output, EventEmitter} from '@angular/core';
import { cflat } from 'src/app/model/flat.model';



@Component({
  selector: 'allflats',
  template:`<div class="container">   
                                
  <div class="well hoverwell thumbnail py-3 my-3" [routerLink]="['./id',flatdata.userId]">
  
    <div > USER ID : {{flatdata?.userId}} </div>
      <div> OWNER NAME : {{flatdata?.ownerName | titlecase}} </div>
      <div>FLAT NO : {{flatdata?.flatNo | titlecase}} </div>
      <div>FLOOR NO : {{flatdata?.floorNo | titlecase}} </div>
      <div> FLAT TYPE : {{flatdata?.flatType | titlecase}} </div>
      <div>
          <!-- <span> <input type="text" value="Hello" (keypress) = "myFunction()"></span><br/>-->
          <span> <button [class]=buttonStyle (click) = "on_click1()" (click)="onButtonClick()"  [routerLink]="['./id',flatdata.userId]"> View </button></span>
      </div>
  </div>
</div>`,

styleUrls: ['./all-flats.component.css']
})
export class DisplayFlatsComponent {
  @Input() flatdata: cflat[];  // property receiving the data from parent using property binding
  // We can create custom event 
   @Output() customEvent =  new EventEmitter(); //   (customEvent) = "someFunction"
 
   isDisabled = true ;  
   buttonStyle = "btn btn-primary";
    
   myFunction(){
     this.isDisabled = false
     this.buttonStyle = "btn btn-success";
   }
 
   onButtonClick(){
     this.customEvent.emit(this.flatdata);  // what ever is send  by default get stored into one javascript '$event'
   }

   on_click1()
    {
    alert('Flat By Id');
    }


  

  

}
