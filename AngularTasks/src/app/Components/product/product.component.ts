import { Component, OnInit } from '@angular/core';
import { IProduct } from './../../Models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
ProductList: IProduct[];

  constructor() { 
    this.ProductList = [
      {Id : 1 , Name : 'Lab Dell' ,Price : 100 , Quantity : 10 ,CatId : 1 ,Img : 'https://fakeimg.pl/50x50/'},
      {Id : 1 , Name : 'Lab Dell' ,Price : 100 , Quantity : 10 ,CatId : 1 ,Img : 'https://fakeimg.pl/50x50/'},
      {Id : 1 , Name : 'Lab Dell' ,Price : 100 , Quantity : 10 ,CatId : 1 ,Img : 'https://fakeimg.pl/50x50/'},

    ]
  }

  ngOnInit(): void {
  }

}
