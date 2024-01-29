import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MinfoPage } from '../minfo/minfo.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async mostrarModal() {

    const modal = await this.modalCtrl.create({
      component: MinfoPage,
      componentProps: {
        nombre: 'Helio',
        pais: 'México'
      }
    });
    
    await modal.present();

    const {data} = await modal.onDidDismiss()
    console.log('onDidDismiss'); // Este evento se ejecuta despues de que se cierra el modal

    // const {data} = await modal.onWillDismiss()
    // console.log('onWillDismiss'); Este evento se ejecuta antes de que se cierre el modal

    console.log('Retorno del modal: ', data);

  }
}
