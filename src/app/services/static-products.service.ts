import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  products:Iproduct[];

  constructor() {
    this.products=[
      {id:100,name:"hp laptop",price:50000,quantity:3,imgUrl:"https://fakeimg.pl/300/",catId:1},
      {id:200,name:"dell laptop",price:40000,quantity:0,imgUrl:"https://fakeimg.pl/300/",catId:1},
      {id:300,name:"iphone ",price:70000,quantity:2,imgUrl:"https://fakeimg.pl/300/",catId:2},
      {id:400,name:"oppo ",price:60000,quantity:1,imgUrl:"https://fakeimg.pl/300/",catId:2},
      {id:500,name:"samsung ",price:20000,quantity:0,imgUrl:"https://fakeimg.pl/300/",catId:3},
      {id:600,name:"lenovo ",price:10000,quantity:4,imgUrl:"https://fakeimg.pl/300/",catId:3},
    ]
   }

   getAllProducts(): Iproduct[]{
    return this.products;
   }
   getProductById(id: number): Iproduct|null{
    let foundedPrd = this.products.find((prd)=> prd.id==id);
    return foundedPrd? foundedPrd : null;
   }
   getProductByCatId(catId: number):Iproduct[]{
    if (catId==0){
      return this.products
    }else{
    return this.products.filter((prd)=>prd.catId==catId)
   }
  }
  mapProductsToIds():number[]{
    return this.products.map((prd)=>prd.id)
  }
}
