import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-management',
  template: `
  <div id="demo" class="carousel slide" data-ride="carousel">
  
  <!-- Indicators -->
  <ol class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
  </ol>

  <!-- The slideshow -->
  <div class="carousel-inner">
      <div class="carousel-item active">
          <img  src="/assets/visitor-management/visitor1.jpeg" class ="d-block w-100"alt="Los Angeles">
          <div class="carousel-caption">
              
          </div>
      </div>
      <div class="carousel-item">
          <img  src="/assets/visitor-management/visitor2.jpeg" class ="d-block w-100" alt="Chicago" >
          <div class="carousel-caption">
              
          </div>
      </div>
      

  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
  </a>
</div>




          <router-outlet></router-outlet>

          `,
  
})
export class VisitorManagement1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

