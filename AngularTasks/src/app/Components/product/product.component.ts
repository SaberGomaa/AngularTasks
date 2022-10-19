import { Component, OnInit } from '@angular/core';
import { IProduct } from './../../Models/IProduct';
import { ICategory } from './../../Models/ICategory';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

ProductList: IProduct[];
CatList : ICategory[];

  constructor() { 

    this.ProductList = [
      {Id : 1 , Name : 'Dell' ,Price : 1040 , Quantity : 10 ,CatId : 1 ,Img : 'https://fakeimg.pl/50x50/'},
      {Id : 2 , Name : 'Hp' ,Price : 1485 , Quantity : 20 ,CatId : 1 ,Img : 'https://fakeimg.pl/50x50/'},
      {Id : 3 , Name : 'OPPO' ,Price : 4894 , Quantity : 45 ,CatId : 2 ,Img : 'https://fakeimg.pl/50x50/'},
      {Id : 4 , Name : 'Samsung' ,Price : 4800 , Quantity : 81 ,CatId : 2 ,Img : 'https://fakeimg.pl/50x50/'},
      {Id : 5 , Name : 'LG' ,Price : 4640 , Quantity : 32 ,CatId : 3 ,Img : 'https://fakeimg.pl/50x50/'},
      {Id : 6 , Name : 'Toshiba' ,Price : 1540 , Quantity : 17 ,CatId : 3 ,Img : 'https://fakeimg.pl/50x50/'},
    ];

    this.CatList =[
      {Id : 1 , Name : 'Labtops'},
      {Id : 2 , Name : 'Mobile'},
      {Id : 3 , Name : 'TVs'},
    ];

  }

  ngOnInit(): void {
  }

}
