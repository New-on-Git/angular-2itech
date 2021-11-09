import { Component, OnInit } from '@angular/core';

interface Person{name:string,age:number,}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Yvan';
  firstNumber:number = 4;

  Yvan:Person = {name : 'Yvan',age:12}
  persons:Person[] = [
    {name:'Curtis',age:14},
    {name:'Simon',age:13},
    this.Yvan,
    {name:'Bob Marley',age:146}
  ]

  constructor(){
    this.Yvan.age = 9;
  }
}
