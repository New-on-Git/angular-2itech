import { Component, OnInit } from '@angular/core';
import{Person} from '../../model/Person';
import {Cards} from "../../model/Cards";


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  styles:['mat-card{background: red}']
})
export class AboutUsComponent implements OnInit{

  persons:Person[] = [
    {id:1 ,name:'Bob',age:12},
    {id:2 ,name:'Bib',age:13},
    {id:3 ,name:'Bab',age:14},
  ];
  personPicture: string = "https://fsb.zobj.net/crop.php?r=2Ko4hCJM1r3Px3PvON4ndzkzPaWEwRIqfSMoY1lp7wzFGPCNQbMPv4MC6ni5OKoDOvL5n1rarJVL66f3qwdbFay4Ktp0rSzpz9KKl_d1IT-HtBGhvESyMpXgCNiUjPvt-Rk7eCXXty5qRnMPWQPnQMSawuYuxKVxceDAkUQ4vF_THkr25YELMkOM5YjSVCVspYlsF0GjYsTprHfq"
  data:Cards[] = [];
  onLikeClick(){
    console.log('clicked about');
  }


  ngOnInit(){
    this.data = this.persons.map((persons) => {
      return { id:persons.id, title : persons.name, subTitle:persons.age + ' ans', image: this.personPicture}
    });
  }
}
