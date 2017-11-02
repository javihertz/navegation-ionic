import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pagina3Page }  from "../index.paginas";

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;

  mutantes: any[] =[

    {
      nombre:"Magneto",
      poder:"Controlar metales",
    },
    {
      nombre:"Lobezno",
      poder:"Regeneración",
    },
    {
      nombre:"Xavier",
      poder:"Poderes psíquicos",
    },
    {
      nombre:"Tormenta",
      poder:"Hecha chispas",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3( mutante:any ){
    console.log(mutante);

    this.navCtrl.push(Pagina3Page , { 'mutante':mutante});

  }
}
