import { Component } from '@angular/core';
import{Products} from '../../model/Products';
import {Cards} from "../../model/Cards";
import {Panier} from "../../model/Panier";
import { ProductService } from '../../services/product.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  products: Products[] = [];
  panier:Panier[] = [];
  data: Cards[] = [];
  quantity:number = 0;

  constructor(private productService: ProductService, private router:Router) { }

  onLikeClick(id:number){
    console.log('clicked home '+ id);
  }
  onCardClick(id:number){
    console.log('clicked of '+ id);
    this.router.navigateByUrl("product/" + id)
  }

  onAddClick(id:number){

    //console.log('clicked of add '+ id);
    this.router.navigateByUrl("panier");
    const count = this.panier.push(
      {id:id,
      quantity:this.quantity,
    });

    if(localStorage.getItem("lePanier") === null){
      localStorage.setItem('lePanier',JSON.stringify(this.panier));
    }else{
      let obj = JSON.parse(localStorage.getItem('lePanier') || '{}');
      // push le nouvo
       obj.push(this.panier);
      localStorage.setItem('lePanier',JSON.stringify(obj));
      //console.log(localStorage);

    }
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.data = products.map((product) => {
        return {id:product.id, title: product.name, subTitle: product.price + ' €', image: product.picture }
      });
    })
  }
}
