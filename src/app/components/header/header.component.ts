import { Component } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private _StaticProductsService:StaticProductsService){}
}
