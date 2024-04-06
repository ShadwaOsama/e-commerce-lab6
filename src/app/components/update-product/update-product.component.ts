import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { Product } from '../../models/product';
import { ApiProductsService } from '../../services/api-products.service';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {
  productId: number;
  product: Iproduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiProductsService: ApiProductsService,
    private productService: ProductService
  ) {
    this.productId = 0;
    this.product = {} as Iproduct;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      if (this.productId) {
        this.apiProductsService.getProductById(this.productId).subscribe({
          next: (res: Iproduct) => {
            this.product = res;
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    });
  }


  updateProduct(): void {
    if (this.productId && this.product) {
      this.productService.updateProduct(this.productId, this.product).subscribe({
        next: (res: Product) => { // Change type to Product
          console.log('Product updated successfully:', res);
          this.router.navigate(['/Products']); // Redirect the user to the products page after updating
        },
        error: (err) => {
          console.error('Error updating product:', err);
        }
      });
    } else {
      console.error('Invalid product or product ID');
    }
  }


}

