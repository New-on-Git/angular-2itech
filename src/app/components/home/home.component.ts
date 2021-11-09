import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from "./mock-data";
import{Products} from '../../model/Products';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
products:Products[] = PRODUCTS;

}
