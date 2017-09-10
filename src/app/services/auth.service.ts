import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(public http: Http) { }
  DoLogin(username, password)//: Observable<any>
  {
    return this.http.get('https://reqres.in/api/users');    
  }

  GetAllUsers()
  {

  }
  AddUser(user:any)
  {
    return this.http.post('https://reqres.in/api/users', user);
  }

  UPdateMe(user:any)
  {
    return this.http.put('https://reqres.in/api/users/2', user);
  }
}
