import { Component,Input, OnInit } from '@angular/core';
import {Cards} from "../../model/Cards";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  @Input() data: Cards[];




  constructor() {
    this.data = [];
  }

  ngOnInit() {
  }
}
