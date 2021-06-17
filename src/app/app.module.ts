import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatService } from './service/flat.service';
import { FlatRentService } from './service/flatrent.service';
import { DeliveryService } from './service/delivery.service';
import { VehicleService } from './service/vehicle.service';
import { GuardService } from './service/guard.service';
import { DomesticService } from './service/domestichelp.service';
import { SecurityService } from './service/security.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { VisitorService } from './service/visitor.service';
import { UserService } from './service/user.service';
import { AdminService } from './service/admin.service';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavbarComponent,
    LoginComponent,
  
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    
  ],
  providers: [
    FlatService,
    FlatRentService, 
    DeliveryService,
    VehicleService,
    GuardService,
    DomesticService,
    SecurityService,
    VisitorService,
    UserService,
    AdminService,
  
  
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
