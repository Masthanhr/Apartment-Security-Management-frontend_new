import { Component, Input,Output,EventEmitter} from '@angular/core';
import { Visitor } from 'src/app/model/visitor.model';


@Component({
  selector: 'allvisitor',
  template: `<div class= "row-auto">
           
            <div class="well hoverwell thumnail py-3 my-3">
              <table class="table table-bordered">
        <tr>
        <th>Flat No</th>
        <th>Owner Name</th>
        <th>Name</th>
        <th>Date</th>
        <th>Arrival Time</th>
        <th>Departure Time</th>
        </tr>
        
        <tr>    
        <td>{{visitorinfo?.flatNo}}</td>
        <td>{{visitorinfo?.ownerName}}</td>
        <td>{{visitorinfo?.name}}</td>
        <td>{{visitorinfo?.datepost | date}}</td>
        <td>{{visitorinfo?.arrivalTime}}</td>
        <td>{{visitorinfo?.departureTime}}</td>
        <td>
        <button [class]=buttonStyle (click) = " on_click2()" (click) = "onClick()" [routerLink]="['/navbar/visitor-management/visitors/name',visitorinfo.ownerName]">View by Name</button>    
        </td>
        <td>
        <button [class]=buttonStyle (click) = " on_click1()" (click) = "onClick()" [routerLink]="['/navbar/visitor-management/visitors/id',visitorinfo.flatNo]">View by ID</button> 
        </td>
        </tr>
        
       
        
        </table>
    
</div> 
               
              </div> `
})
export class AllVisitorComponent {
  @Input() visitorinfo : Visitor[];
  @Output() customEvent = new EventEmitter();


  isDisabled = true;
  buttonStyle = "btn btn-primary ";

  public  i : number = 10;

  myFunction() {
    this.isDisabled = false
    this.buttonStyle = "btn btn-success ";
  }

 
  onClick() {
    this.customEvent.emit(this.visitorinfo)
    console.log("message is printed")
  };

  on_click1()
    {
    alert('Visitor By Id');
    }

    on_click2()
    {
    alert('Visitor By Name');
    }
}