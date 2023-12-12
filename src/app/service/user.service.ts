import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   isUserLoggedIn:boolean = false
   message:string=''
   readonly BASE_URL = 'http://localhost:8080/api/user'
   
   constructor(private http:HttpClient){
      
   }
   PerformLogin(username:string,password:string):Observable<User[]>
   {
    return this.http.get<User[]>(this.BASE_URL+"/"+username+"/"+password)
   }
     
  
}
