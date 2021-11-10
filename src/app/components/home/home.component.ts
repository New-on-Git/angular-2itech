import { Component } from '@angular/core';
import{Products} from '../../model/Products';
import {Cards} from "../../model/Cards";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  products: Products[] = [];

  data: Cards[] = [];

  constructor(private productService: ProductService) { }
  onLikeClick(){
    console.log('clicked');
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.data = products.map((product) => {
        return { title: product.name, subTitle: product.price + ' €', image: product.picture }
      });
    })
  }
}
