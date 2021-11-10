import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Products} from "../../model/Products";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
product:Products = {id:0, name:'' ,price : 0, picture:'',stock : 0}
  constructor(private route : ActivatedRoute, private productServices:ProductService) { }

  ngOnInit(): void {
    this.productServices.get(this.route.snapshot.params['id'])
      .subscribe((product:Products) => {
      this.product = product;
    })
  }

}
