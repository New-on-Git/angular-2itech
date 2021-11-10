import { Component } from '@angular/core';
import{Products} from '../../model/Products';
import {Cards} from "../../model/Cards";
import { ProductService } from '../../services/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  products: Products[] = [];

  data: Cards[] = [];

  constructor(private productService: ProductService, private router:Router) { }

  onLikeClick(id:number){
    console.log('clicked home '+ id);
  }
  onCardClick(id:number){
    console.log('clicked of '+ id);
    this.router.navigateByUrl("product/" + id)

  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.data = products.map((product) => {
        return {id:product.id, title: product.name, subTitle: product.price + ' €', image: product.picture }
      });
    })
  }
}
