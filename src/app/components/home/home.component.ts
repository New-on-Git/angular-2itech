import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from "./mock-data";
import{Products} from '../../model/Products';
import {Cards} from "../../model/Cards";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
products:Products[] = PRODUCTS;

  data:Cards[] = [];


  ngOnInit(){
    this.data = this.products.map((products) => {
      return { title : products.name, subTitle:products.price + ' ans', image: products.picture}
    });
  }
}
