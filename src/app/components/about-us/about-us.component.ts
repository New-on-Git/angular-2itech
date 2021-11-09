import { Component, OnInit } from '@angular/core';
import{Person} from '../../model/Person';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  styles:['mat-card{background: red}']
})
export class AboutUsComponent {

persons:Person[] = [
  {name:'Bob',age:12},
  {name:'Bib',age:13},
  {name:'Bab',age:14},
];

}
