import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import {ModalPage}  from "../index.paginas";

@Component({
  selector: 'page-ajustes2',
  templateUrl: 'ajustes2.html',
})
export class Ajustes2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

  mostrar_modal(){

    //this.modalCtrl.create( ModalPage().present(); no permite enviar parametros

    let modal =  this.modalCtrl.create( ModalPage, {nombre:"Javi", edad:27} );

    modal.present();

    modal.onDidDismiss ( parametros => {

      if(parametros){
        console.log("Data del modal");
        console.log(parametros);
      }else{
        console.log("Se cerró modal sin parámetros")
      }
    })
  }

}
