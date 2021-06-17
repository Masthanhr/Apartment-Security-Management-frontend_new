import { Injectable } from "@angular/core";
import { Router } from "@angular/router";



@Injectable({
    providedIn:'root'
})
export class AuthorizeGuard{
    constructor(private router:Router){
    }
    canActivate(){
        if(localStorage.getItem('isAdmin')){
            console.log('isAdmin')
            return true;
        }
        alert("login first");
        this.router.navigate([''])
        return false;
    }
}