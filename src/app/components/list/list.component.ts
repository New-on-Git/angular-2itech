import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cards} from "../../model/Cards";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  @Input() data: Cards[];
  @Output() likeClick : EventEmitter<any> = new EventEmitter<any>()



  constructor() {
    this.data = [];
  }
  onLikeClick(){
    this.likeClick.emit();
  }

  ngOnInit() {
  }
}
