import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isUserLogged: boolean = false;
constructor(private userAuthSer:UserAuthService){
  this.isUserLogged = this.userAuthSer.getUserLogged()
}

login(){
  this.userAuthSer.login()
  this.isUserLogged= this.userAuthSer.getUserLogged()
}
logout(){
  this.userAuthSer.logout()
  this.isUserLogged= this.userAuthSer.getUserLogged()
}
}
