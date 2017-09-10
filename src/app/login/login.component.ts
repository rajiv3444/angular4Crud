import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  pwd: string;
user:User;
  constructor(private authService: AuthService) { 
    this.user = new User;
  }

  ngOnInit() {
  }

  Login() {
    console.log(this.userName + ', ' + this.pwd);

    this.authService.DoLogin(this.userName, this.pwd)
      .subscribe((res) => {
        if (res != null) {
          console.log('login success -->');
          console.log(res['_body']);
        }
        else {
          console.log('login fail =-->');
          console.log(res);
        }
      },
      err => { });
  }

  CreateUser()
  {
    this.authService.AddUser(this.user)
    .subscribe((res) => {
      console.log(res['_body']);
    },
  err => {});
  }

  UpdateUser()
  {
    this.authService.UPdateMe(this.user)
    .subscribe((res) => {
      console.log(res['_body']);
    },
  err => {});
  }

}


export class User{
  name:string;
  job:string;
}
