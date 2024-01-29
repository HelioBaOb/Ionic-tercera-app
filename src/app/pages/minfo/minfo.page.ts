import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-minfo',
  templateUrl: './minfo.page.html',
  styleUrls: ['./minfo.page.scss'],
})
export class MinfoPage implements OnInit {

  @Input() nombre: string;
  @Input() pais: string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }

  salirConArgumentos(){
    this.modalCtrl.dismiss({
      nombre: 'Felipe',
      pais: 'España'
    });
  }

}
