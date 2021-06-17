import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from'rxjs';
import { Admin } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getElementById() {
    throw new Error('Method not implemented.');
  }
  getAdminEntity() {
    throw new Error('Method not implemented.');
  }

  private base_url :string = "http://localhost:9997/admin";
  
  private base_url1 :string = "http://localhost:9997/admin/registerForm";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 
  

  constructor(private httpClient : HttpClient ) { }

  public getAllDatabase(): Observable<Admin[]>{
   // return admindb;
   this.httpClient.get<Admin[]>(this.base_url); 
   return this.httpClient.get<Admin[]>(this.base_url);

  }


  public insertAdminInfo(newAdmin : Admin):Observable<Admin>{
    return this.httpClient.post<Admin>(this.base_url1,newAdmin ,this.httpOptions);  

  }
 
}