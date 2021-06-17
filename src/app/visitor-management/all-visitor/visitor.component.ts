import { Component } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Visitor } from 'src/app/model/visitor.model';
import { VisitorService } from 'src/app/service/visitor.service';

@Component({
  selector: 'visitor',
  template: `
  <body style="background-color:#C0C0C0">
  
          <div class="container">
          <h2>Visitor Component</h2>
            <div  *ngFor="let visitor of visitors | paginate: {itemsPerPage: 4 ,currentPage:p}"> 
            <allvisitor [visitorinfo] = visitor (customEvent) = "parentFunction($event)"></allvisitor>
            </div>
            <div style="background-color:#4682B4">
            <pagination-controls (pageChange)="p=$event"></pagination-controls>
            </div>
            </div>
            </body>`
 
})
export class VisitorComponent {

  [x: string]: any;
  p: number=1;
  private visitors : Visitor[];

  constructor(private visitorService: VisitorService) {
    console.log("visitor component clicked****");
    //this.visitors = this.visitorService.getAllVisitors();
  //  let obs : Observable<Visitor[]> = this.visitorService.getAllVisitors();
  //   obs.subscribe(visitor => this.visitors = visitor);

  this.visitorService.getAllVisitors().subscribe(visitorarr => this.visitors = visitorarr);
  }

  parentFunction(event)
  { alert("Verify your Id")
    console.log(event);
  }

}