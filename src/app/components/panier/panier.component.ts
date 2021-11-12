import { Component, OnInit } from '@angular/core';
import {Products} from "../../model/Products";
import {Panier} from "../../model/Panier";
import {ProductService} from "../../services/product.service";
import {Cards} from "../../model/Cards";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  product: Products = {id: 0, name: '', price: 0, picture: '', stock: 0}
  data: Products[] = [];
  oui: Products[] = [];
  console.log(this.oui);

  constructor(private productService: ProductService) {
  }

  ngOnInit() {

    let data = JSON.parse(localStorage.getItem('lePanier') || '{}');
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      data.forEach(
        this.productService.get(data[i]['id'])
          .subscribe((product: Products) => {
            this.product = product;
            this.oui.push(this.product);

          })
      )
      // for (let i = 0; i < data.length; i++) {
      //   this.productService.getProducts().subscribe((products) => {
      //       this.data = products.map((product) => {
      //         if(data[i]['id'] === product.id) {
      //           return {
      //             id: product.id,
      //             name: product.name,
      //             price: product.price,
      //             stock: product.stock,
      //             picture: product.picture
      //           }
      //         }else{
      //           return false;
      //         }
      //     });
      //   })
      // }

    }
    return this.oui
  }
}
