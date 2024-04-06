import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  categories:Icategory[]
  newProduct:Iproduct={} as Iproduct;
  constructor(private _ApiProductsService:ApiProductsService,
    private router:Router){
    this.categories=
    [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mobile" },
      { id: 3, name: "Tablet" },
    ];
  }
  addNewProduct(){
this._ApiProductsService.addProduct(this.newProduct).subscribe({
  next:()=>{
alert('Done');
this.router.navigateByUrl('/Products')
  },
  error:(err)=>{
    console.log(err);
  }
})
  }

}
