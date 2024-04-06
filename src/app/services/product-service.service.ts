import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = '...'; // URL of your API endpoint for products

  constructor(private http: HttpClient) {}

  // Fetch all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError) // Handle errors if any
      );
  }

  // Fetch a single product by ID
  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Create a new product
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Update an existing product
  updateProduct(id: number, product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling function
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    throw error;
  }
}
