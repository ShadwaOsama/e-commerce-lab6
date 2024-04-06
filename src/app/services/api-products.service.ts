import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.development';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httClient:HttpClient) { }
  getAllProducts():Observable<Iproduct[]>{
    return this.httClient.get<Iproduct[]>(`${environment.baseUrl}/products`)

  }
  getProductById(id:number):Observable<Iproduct>{
    return this.httClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)

  }
  getProductBycatId(catId:number):Observable<Iproduct[]>{
    return this.httClient.get<Iproduct[]>(`${environment.baseUrl}/products?catId=${catId}`)

  }
  addProduct(newPrd:Iproduct):Observable<Iproduct>{
    return this.httClient.post<Iproduct>(`${environment.baseUrl}/products`,JSON.stringify(newPrd));
  }
  deleteProduct(id:number):Observable<any>{
    return this.httClient.delete(`${environment.baseUrl}/products/${id}`);
  }
  updateProduct(id:number,product:Iproduct):Observable<Iproduct>{
    return this.httClient.put<Iproduct>(`${environment.baseUrl}/products/${id}`,product)
  }
}
