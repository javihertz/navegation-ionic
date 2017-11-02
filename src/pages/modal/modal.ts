import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

//ViewController se encargar de la vista

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string="";
  edad:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {

      //Obtenemos los parametros a traves de nacParams, desde la estructura html

      this.nombre = this.navParams.get("nombre");
      this.edad = this.navParams.get("edad");
      console.log(this.nombre, this.edad);
  }

  cerrar_con_parametros(){

    let data={
      nombre:"Super Nova",
      edad:4,
      coord:{
        lat:10,
        lng:-10
      }
    };

    this.viewCtrl.dismiss( data );

  }

  cerrar_sin_parametros(){

    this.viewCtrl.dismiss();
  }

}
