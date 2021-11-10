import { Injectable } from '@angular/core';
import {Products} from "../model/Products";
import {Observable, of} from "rxjs";
import { HttpClient } from '@angular/common/http';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) {

  }

  getProducts():Observable<Products[]> {
    return this.http.get<Products[]>(environment.API.baseUrl + environment.API.endpoint.product);
  }
}
