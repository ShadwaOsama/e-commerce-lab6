import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { StaticProductsService } from '../../services/static-products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  currentId:number=0;
  product:Iproduct|null=null
  idsArr:number[]
  currentIdIndex: number=0;

  constructor(private _activatedRoute:ActivatedRoute,
    private _StaticProductsService:StaticProductsService,
    private _Location:Location,
    private router:Router
    ){
      this.idsArr=this._StaticProductsService.mapProductsToIds();
    }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentId =Number(paramMap.get('id'))
      this.product= this._StaticProductsService.getProductById(this.currentId);
    // this.currentId=Number(this._activatedRoute.snapshot.paramMap.get('id'))
    // this.product= this._StaticProductsService.getProductById(this.currentId)
});

  }

  goBack(){
    this._Location.back();
  }
  next(){

    this.currentIdIndex = this.idsArr.findIndex((id)=>id == this.currentId)
    if(this.currentIdIndex!= this.idsArr.length-1){
      this.router.navigateByUrl(`/Details/${this.idsArr[this.currentIdIndex+1]}`)
    }
  }
  prev(){
    this.currentIdIndex = this.idsArr.findIndex((id)=>id == this.currentId)
    if(this.currentIdIndex != 0){
      this.router.navigateByUrl(`/Details/${this.idsArr[this.currentIdIndex-1]}`)
    }
  }
}
