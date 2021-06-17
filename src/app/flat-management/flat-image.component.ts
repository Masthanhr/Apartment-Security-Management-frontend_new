import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-management',
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
                  <img src="/assets/flat-management/flat3.jpeg" class ="d-block w-100"alt="Los Angeles">
                  <div class="carousel-caption">
                      
                  </div>
              </div>
              <div class="carousel-item">
                  <img src="/assets/flat-management/flat2.jpeg" class ="d-block w-100" alt="Chicago" >
                  <div class="carousel-caption">
                      
                  </div>
              </div>
              <div class="carousel-item">
                <img src="/assets/flat-management/flat1.jpg" class ="d-block w-100" alt="Chicago" >
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
  styleUrls: ['./flat-management.component.css']
})
export class FlatManagement1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

