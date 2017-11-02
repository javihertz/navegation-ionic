import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';

import { ModalPage }  from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
  }

  activarPrincipal(){
    //Nos retorna a la tab seleccionada en este caso es la 2, recordamos que están ordenadas en base 0 por lo que 0,1,[2],3,4
    this.navCtrl.parent.select(2);

  }

  mostrar_modal(){

    //this.modalCtrl.create( ModalPage).present(); no permite enviar parametros

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
