import { Component,Input,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'allguardtrain',
  templateUrl:'all-guardtrain.component.html',
})
export class AllGuardTrainComponent {
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

 
   onButtonClick(){
     this.customEvent.emit(this.guarddata);  // what ever is send  by default get stored into one javascript '$event'
   }

   on_click1()
  {
  alert('Viewing all Guard train details');
  }

  

}