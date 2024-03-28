import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../models/iproduct';
import { StaticProductsService } from '../../services/static-products.service';

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
  constructor(private _activatedRoute:ActivatedRoute,private _StaticProductsService:StaticProductsService){

  }
  ngOnInit(): void {
    this.currentId=Number(this._activatedRoute.snapshot.paramMap.get('id'))
    this.product= this._StaticProductsService.getProductById(this.currentId)
  }

}
