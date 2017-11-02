import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

//import page2 for nagivation
import { Pagina2Page } from "../index.paginas";


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  }

  navegarPagina(){

    //Using the this.navCtrl, if the button is clicked then push to the Pagina2Page with this.navCtrl.push
    this.navCtrl.push( Pagina2Page );

  }

  mostrarMenu(){

    this.menuCtrl.toggle();
  }
}
