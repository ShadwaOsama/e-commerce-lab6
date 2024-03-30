import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isUserLoggedIn!: boolean
constructor(private userAuthSer:UserAuthService){}
  ngOnInit(): void {
    // this.isUserLoggedIn= this.userAuthSer.getUserLogged()
    this.userAuthSer.getAuthSubject().subscribe({
      next:(status)=>{
        this.isUserLoggedIn= status
      }
    })
  }
}
