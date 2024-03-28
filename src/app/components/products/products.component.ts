import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { CreditCardFormatPipe } from '../../pipes/credit-card-format.pipe';
import { EgyptianNationalIdPipe } from '../../pipes/egyptian-national-id.pipe';
import { StaticProductsService } from '../../services/static-products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,ProductCardDirective,EgyptianNationalIdPipe,CreditCardFormatPipe,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges{
  products:Iproduct[];
  nationalId:number = 14;
  filteredProducts:Iproduct[];
  boughtProducts: Iproduct[] = [];
  totalOrderPrice: number = 0;
  num:number = 16;

  @Output() onProductBought: EventEmitter<Iproduct>
  @Input() recievedCatId:number=0
  // private _StaticProductsService: any;

  constructor(private _StaticProductsService: StaticProductsService,
    private router:Router)
    {
    this.products =this._StaticProductsService.getAllProducts()

    this.filteredProducts=this.products
    this.onProductBought=new EventEmitter<Iproduct>();
  }
  ngOnChanges() {
   this.filteredProducts=this._StaticProductsService.getProductByCatId(this.recievedCatId)
   }
    change(){
    }
    buyProduct(product: Iproduct) {
    if (product.quantity > 0) {
      product.quantity--;
    }
    this.onProductBought.emit(product);
 }
 navigateToDetails(id:number) {
  this.router.navigate(['/Details',id]);
}
}




  // filterProducts(){
  //   if(this.recievedCatId==0){
  //     this.filteredProducts=this.products
  //   }else{
  //     this.filteredProducts=this.products.filter((prd)=>prd.catId==this.recievedCatId)
  //   }
  //  }



